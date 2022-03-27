from django.contrib import admin
from .models import Tasks, TaskTemplate, MyUser
from django.contrib.auth.admin import UserAdmin

# Register your models here.
admin.site.register(Tasks)
admin.site.register(TaskTemplate)
admin.site.register(MyUser, UserAdmin)

