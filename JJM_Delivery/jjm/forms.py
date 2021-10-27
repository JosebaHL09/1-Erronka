from django.forms import ModelForm
from .models import *

class ErabiltzaileaForm(ModelForm):
    class Meta:
        model = Erabiltzailea
        fields = '__all__'