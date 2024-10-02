import json

from ledger_app.models import UserModel, ItemModel
from ledger_app.views.FormModel import UserCreateForm, ItemCreateForm

def create_instance(request, model, form_class):
    instance = model()
    if request.method == 'POST':
        form = form_class(request.POST, instance=instance)
        if form.is_valid():
            new_instance = form.save(commit=False)
            new_instance.save()
            return json.dumps({"result": True})
    return json.dumps({"result": False})

def create_user(request):
    return create_instance(request, UserModel, UserCreateForm)

def create_item(request):
    return create_instance(request, ItemModel, ItemCreateForm)