from rest_framework import serializers
from app.models import Tasks, TaskTemplate, MyUser
from django.contrib.auth import get_user_model
from app.tasks import send_email


# 创建序列化器,用于实现序列化和反序列化
# ModelSerializer里已经实现了 update 和 create

# 用户
class MyUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyUser
        fields = '__all__'

    def create(self, validated_data):
        user = super(MyUserSerializer, self).create(validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user


# 任务
class TaskSerializer(serializers.ModelSerializer):
    # 在序列化中获取外键的信息
    user = serializers.CharField(source='user.username')

    class Meta:
        model = Tasks  # 指定序列模型从哪个模型映射字段
        fields = ["id", "title", "content", "state", "remark", "planning_finish_time", "actual_finish_time",
                  "create_time", "user"]  # 指定映射字段范围

    # 单个字段校验
    def validate_state(self, value):
        if value > 3 or value < 0:
            raise serializers.ValidationError("state参数范围出错")
        return value

    # 联合校验
    def validate(self, attrs):
        return attrs

    def create(self, validated_data):
        user_cls = get_user_model()
        user, is_created = user_cls.objects.get_or_create(username=validated_data['user']['username'])
        validated_data['user'] = user
        task = super(TaskSerializer, self).create(validated_data)
        return task


# 任务模板
class TaskTemplateSerializer(serializers.ModelSerializer):
    user = serializers.CharField(source='user.username')

    class Meta:
        model = TaskTemplate
        fields = ["id", "title", "content", "remark", "range", "update_time",
                  "create_time", "user"]  # 指定映射字段范围

    # 校验range
    def validate_range(self, value):
        if value > 1 or value < 0:
            raise serializers.ValidationError("range参数范围出错")
        return value

    # 联合校验
    def validate(self, attrs):
        return attrs

    def create(self, validated_data):
        user_cls = get_user_model()
        user, is_created = user_cls.objects.get_or_create(username=validated_data['user']['username'])
        validated_data['user'] = user
        return super(TaskTemplateSerializer, self).create(validated_data)

    def update(self, instance, validated_data):
        if instance.user.username != validated_data['user']['username']:
            raise serializers.ValidationError("非创建者进行了修改请求")
        validated_data.pop("user", None)
        return super(TaskTemplateSerializer, self).update(instance, validated_data)
