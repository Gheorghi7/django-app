from django.db import models


# Create your models here.
class BasePage(models.Model):
    title = models.CharField(max_length=20)
    description = models.TextField(max_length=120)
    rate = models.IntegerField()
