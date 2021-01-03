# todo/models.py

from django.db import models
# Create your models here.


class User(models.Model):
  name = models.CharField(max_length=120)
  password = models.CharField(max_length=120)

  def _str_(self):
    return self.name

class Product(models.Model):
  name = models.CharField(max_length=120)
  description = models.CharField(max_length=120)
  price = models.CharField(max_length=120)

  def _str_(self):
    return self.name