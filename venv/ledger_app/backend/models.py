from django.db import models

# Create your models here.

class UserModel(models.Model):
    user_name = models.CharField(
        blank = False,
        max_length = 255,
    )

    user_address = models.CharField(
        blank = False,
        max_length = 255,
    )

    user_password = models.CharField(
        blank = False,
        max_length = 255,
    )

class ItemModel(models.Model):
    user_id =  models.ForeignKey(
        UserModel.id, 
        on_delete=models.CASCADE,
    )

    item_name = models.CharField(
        blank = False,
        max_length = 255,
    )

    item_price = models.IntegerField(
        blank = False,
        max_length = 2047,
    )
