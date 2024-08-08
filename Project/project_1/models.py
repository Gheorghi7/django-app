from django.db import models
from PIL import Image
# Create your models here.
class BasePage(models.Model):
    title = models.CharField(max_length=20)
    description = models.TextField(max_length=120)
    rate = models.IntegerField()

class AnimeModel(models.Model):
    title = models.CharField(max_length=50)
    image = models.ImageField()
    year = models.IntegerField()
    genre = models.CharField(max_length=100)
    episodes = models.CharField(max_length=20)
    description = models.TextField(max_length=1500)


    
    

