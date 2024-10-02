from django.forms import ModelForm

from ledger_app.models import UserModel, ItemModel

class UserCreateForm(ModelForm):
    model = UserModel
    fields = (
        'user_name', 'user_address', 'user_password'
    )

class ItemCreateForm(ModelForm):
    model = ItemModel
    fields = (
        'item_name', 'item_user_id', 'item_price'
    )