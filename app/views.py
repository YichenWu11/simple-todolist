from django.http import HttpResponse
from rest_framework import viewsets

from app.models import Tasks, TaskTemplate, MyUser
from app.serializer import TaskSerializer, TaskTemplateSerializer, MyUserSerializer

from rest_framework.views import APIView
from django.core.mail import send_mail
from django.conf import settings
from app.tasks import send_email


# Create your views here.

class MyUserViewSet(viewsets.ModelViewSet):
    queryset = MyUser.objects.all()
    serializer_class = MyUserSerializer


class TasksViewSet(viewsets.ModelViewSet):
    queryset = Tasks.objects.all()
    serializer_class = TaskSerializer


class TaskTemplateViewSet(viewsets.ModelViewSet):
    queryset = TaskTemplate.objects.all()
    serializer_class = TaskTemplateSerializer


# 发送邮件
class EmailView(APIView):
    def post(self, request):
        send_email.delay(request.query_params.get("id"))
        return HttpResponse("ok")
