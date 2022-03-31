from django.http import HttpResponse
from rest_framework import viewsets

from app.models import Tasks, TaskTemplate, MyUser
from app.serializer import TaskSerializer, TaskTemplateSerializer, MyUserSerializer

from rest_framework.views import APIView
from rest_framework_jwt.utils import jwt_decode_handler
from app.tasks import send_email


# Create your views here.

class MyUserViewSet(viewsets.ModelViewSet):
    queryset = MyUser.objects.all()
    serializer_class = MyUserSerializer


class TasksViewSet(viewsets.ModelViewSet):
    queryset = Tasks.objects.all()
    serializer_class = TaskSerializer

    def list(self, request, *args, **kwargs):
        response = super().list(request, *args, **kwargs)
        # token校验
        token = request.META.get("HTTP_AUTHORIZATION")
        response.data = filter(lambda x: x['user'] == jwt_decode_handler(token)['username'], response.data)
        return response


class TaskTemplateViewSet(viewsets.ModelViewSet):
    queryset = TaskTemplate.objects.all()
    serializer_class = TaskTemplateSerializer

    def list(self, request, *args, **kwargs):
        response = super().list(request, *args, **kwargs)
        # token验证
        token = request.META.get("HTTP_AUTHORIZATION")
        response.data = filter(lambda x: (x['user'] == jwt_decode_handler(token)['username']) or x['range'], response.data)
        return response


# 发送邮件
class EmailView(APIView):
    def post(self, request):
        send_email.delay(request.query_params.get("id"))
        return HttpResponse("ok")
