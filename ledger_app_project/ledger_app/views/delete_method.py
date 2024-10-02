from django.shortcuts import get_object_or_404, render
import json

from ledger_app.models import UserModel, ItemModel
from ledger_app.views.FormModel import UserCreateForm, ItemCreateForm

def delete_instance(request, model, post_id):
    post = get_object_or_404(model, pk=post_id)
    post.delete()
    return json.dumps({"delete_result": True})

def delete_user(request, user_id):
    return delete_instance(request, UserModel, user_id)

def delete_item(request, item_id):
    return delete_instance(request, ItemModel, item_id)