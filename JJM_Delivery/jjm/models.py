from django.db import models
from django import forms
# Create your models here.

class Erabiltzailea(models.Model):
    erabiltzailea = models.CharField(max_length=1000)
    izena = models.CharField(max_length=1000)
    abizena = models.CharField(max_length=1000)
    posta = models.EmailField(max_length=1000)
    pasahitza = models.CharField(max_length=1000)
    def __str__(self):
        return self.erabiltzailea

class Saskia(models.Model):
    helbidea = models.CharField(max_length=1000)
    telefonoa = models.IntegerField()
    data = models.DateTimeField()
    erabiltzailea = models.ForeignKey(Erabiltzailea,related_name='erabiltzailea_saskia',on_delete =models.CASCADE)

    def __str__(self):
        return self.helbidea

class Jatetxea(models.Model):
    izena = models.CharField(max_length=1000)
    deskripzioa=models.CharField(max_length=1000)
    helbidea = models.CharField(max_length=1000)
    telefonoa = models.IntegerField()
    mota = models.CharField(max_length=1000)
    img_path = models.CharField(max_length=1000)
    distantzia=models.IntegerField()
    latitud = models.FloatField(null=True)
    longitud = models.FloatField(null=True)


    def __str__(self):
        return self.izena

class Produktua(models.Model):
    izena = models.CharField(max_length=1000)
    prezioa = models.FloatField()
    mota = models.CharField(max_length=1000)
    deskontua = models.BooleanField()
    portzentaia = models.FloatField(blank=True, null=True)
    jatetxea = models.ForeignKey(Jatetxea, related_name='jatetxea_produktua', on_delete=models.CASCADE)
    img_path = models.CharField(max_length=1000)

    def __str__(self):
        return self.izena

class Erosketa(models.Model):
    saskia = models.ForeignKey(Saskia, related_name='saskia', on_delete=models.CASCADE)
    produktua = models.ForeignKey(Produktua, related_name='produktua_erosketa', on_delete=models.CASCADE)
    kantitatea = models.IntegerField()

    def __str__(self):
        return self.izena

class Iruzkina(models.Model):
    testua = models.CharField(max_length=1000)
    erabiltzailea = models.ForeignKey(Erabiltzailea, related_name='erabiltzailea_iruzkina', on_delete=models.CASCADE)
    jatetxea = models.ForeignKey(Jatetxea, related_name='jatetxea_iruzkina', on_delete=models.CASCADE)
    kalifikazioa = models.IntegerField()

    def __str__(self):
        return self.testua
