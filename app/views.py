from rest_framework import viewsets

from app.models import Tasks, TaskTemplate, MyUser
from app.serializer import TaskSerializer, TaskTemplateSerializer, MyUserSerializer


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

