from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import ItemModel
from .models import UserModel

admin.site.register(UserModel)
admin.site.register(ItemModel)
