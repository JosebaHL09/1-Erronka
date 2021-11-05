from django.forms import ModelForm
from .models import *
from django.contrib.auth.forms import UserCreationForm


class RegistrationForm(UserCreationForm):
    class Meta:
        model = User
        fields = "__all__"
    def clean_email(self):
        email = self.cleaned_data['mail'].lower()
        try:
            email = User.objects.get(email=email)
        except Exception as e:
            return email
        raise forms.ValidationError(f"El mail: {email} ya esta en uso")
    def clean_user(self):
        username = self.cleaned_data['erabiltzailea'].lower()
        try:
            email = User.objects.get(username=username)
        except Exception as e:
            return username
        raise forms.ValidationError(f"El usuario: {username} ya esta en uso")

