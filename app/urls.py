from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_jwt.views import obtain_jwt_token

from app import views
# 定义视图对应的路由器,用于自动生成路由
router = DefaultRouter()
# 在路由中注册视图集
router.register(r'task', views.TasksViewSet)
router.register(r'template', views.TaskTemplateViewSet)
router.register(r'myuser', views.MyUserViewSet)

urlpatterns = [
    path(r"authorizations/", obtain_jwt_token),  # drf自带的登陆验证
    path(r"sendemail/", views.EmailView.as_view()),
    # path(r"taskss/", views.TasksViewSet.as_view({'get': 'list'}))
]

urlpatterns += router.urls
