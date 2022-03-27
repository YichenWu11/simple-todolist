from django.db import models
from django_mysql.models import JSONField
from django.contrib.auth.models import User, AbstractUser


# Create your models here.

# 用户
class MyUser(AbstractUser):
    class Meta:
        verbose_name = '用户'


# 任务
class Tasks(models.Model):
    user = models.ForeignKey(MyUser, models.CASCADE)  # 创建人
    title = models.CharField(max_length=20)  # 任务名称
    content = models.CharField(max_length=100)  # 任务内容
    state = models.IntegerField(default=0)  # 任务状态
    remark = models.CharField(max_length=50, null=True, blank=True)  # 任务备注
    planning_finish_time = models.DateTimeField()  # 计划完成时间
    actual_finish_time = models.DateTimeField(null=True, blank=True)  # 实际完成时间
    create_time = models.DateTimeField(auto_now_add=True)  # 创建时间

    def __str__(self):
        return self.title

    class Meta:
        ordering = ["id"]


# 任务模板
class TaskTemplate(models.Model):
    user = models.ForeignKey(MyUser, models.CASCADE)   # 创建人
    title = models.CharField(max_length=20)  # 模板名称
    content = JSONField()  # 模板内容 Json字符串
    remark = models.CharField(max_length=50, null=True, blank=True)  # 模板备注
    range = models.IntegerField(default=0)  # 模板可见范围( 0 为仅自己可见, 1 为所有人可见)
    update_time = models.DateTimeField(null=True, blank=True)  # 更新时间
    create_time = models.DateTimeField(auto_now_add=True)  # 创建时间

    def __str__(self):
        return self.title

    class Meta:
        ordering = ["id"]
