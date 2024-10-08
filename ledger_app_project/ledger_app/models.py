from django.db import models

# Create your models here.
class UserModel(models.Model):
    user_name = models.CharField(
        blank = True,
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

    def __str__(self):
        return f'{self.user_name}'

class ItemModel(models.Model):
    item_name = models.CharField(
        blank = False,
        max_length = 255,
    )

    item_user_id = models.ForeignKey(
        UserModel, 
        on_delete=models.CASCADE
    )

    item_price = models.IntegerField(
        blank = False,
    )

    item_regist_day = models.DateField(
        blank = False,
    )

    def __str__(self):
        return f'{self.item_name} is {self.item_price} | {self.item_regist_day}'