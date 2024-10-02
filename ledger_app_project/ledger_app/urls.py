from django.contrib import admin
from django.urls import include, path

import ledger_app.views.create_method as create_method
import ledger_app.views.delete_method as delete_method
import ledger_app.views.read_method as read_method
import ledger_app.views.update_method as update_method

urlpatterns = [
    path('create_user/', create_method.create_user()),
    path('update_user/', update_method.update_user()),
    path('delete_user/', delete_method.delete_user()),
    path('create_item/', create_method.create_item()),
    path('update_item/', update_method.update_item()),
    path('delete_item/', delete_method.delete_item()),
]