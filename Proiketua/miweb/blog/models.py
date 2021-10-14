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

class Saskia(models.Model):
    helbidea = models.CharField(max_length=1000)
    telefonoa = models.IntegerField(max_length=9)
    data = models.DateTimeField()
    erabiltzailea = models.ForeignKey(Erabiltzailea,related_name='saskia',on_delete =models.CASCADE)

    def __unicode__(self):
        return self.helbidea