import time
import logging

from celery import shared_task

from .models import Tasks
import datetime

from django.core.mail import send_mail

from celery.task import task

logger = logging.getLogger(__name__)


# params：任务id，等待时间
@task()
def send_email(task_id):
    task_id = int(task_id)
    logger.info("异步任务开始执行")
    chosen = Tasks.objects.filter(id=task_id)
    # 计算时间
    t1 = datetime.datetime.strptime(str(chosen[0].planning_finish_time).replace("T", " "), '%Y-%m-%d %H:%M:%S')
    t2 = datetime.datetime.now()
    wait_time = int((t1 - t2).total_seconds())
    if Tasks.objects.filter(id=task_id).exists():
        # 等待时间
        if int(wait_time) - 1*60*60 > 1*60*60:
            # 等到任务截止时间前一个小时
            time.sleep(int(wait_time) - 1*60*60)
            # 如果此时任务未完成
            if chosen[0].state == 0:
                subject = "任务截止通知"
                message = "您的任务 " + chosen[0].content + "即将截止，请查收"
                from_who = "2950335254@qq.com"
                to_who = chosen[0].user.email
                send_mail(subject, message, from_who, [to_who])
    logger.info("执行成功")

