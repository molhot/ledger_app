from rest_framework import serializers
from ledger_app.models import UserModel, ItemModel


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = ('id', 'user_name','user_address', 'user_password')

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemModel
        fields = ('id', 'item_name', 'item_user_id', 'item_price', 'item_regist_day')

