from django.db import models
from django import forms

# Create your models here.
class Erabiltzailea(models.Model):
    erabiltzailea = models.CharField(max_length=1000)
    izena = models.CharField(max_length=1000)
    abizena = models.CharField(max_length=1000)
    posta = models.EmailField(max_length=1000)
    pasahitza = models.CharField(max_length=1000)

    def __unicode__(self):
        return self.erabiltzailea