from django.shortcuts import get_object_or_404, render
import json

from ledger_app.models import UserModel, ItemModel
from ledger_app.views.FormModel import UserCreateForm, ItemCreateForm

def edit_instance(request, model, form_class, id):
    instance = get_object_or_404(model, pk = id)
    if request.method == 'POST':
        edit_form = form_class(request.POST, instance = instance)
        if edit_form.is_valid():
            edited_item = edit_form.save(commit = False)
            edited_item.save()
            return json.dumps({"edit_result": False})
    return json.dumps({"edit_result": True})

def update_user(request, user_id):
    return edit_instance(request, UserModel, UserCreateForm, user_id)

def update_item(request, item_id):
    return edit_instance(request, ItemModel, ItemCreateForm, item_id)
