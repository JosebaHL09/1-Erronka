from django import forms
from Proiketua.miweb.blog.models import Erabiltzailea


class UserForm(forms.ModelForm):
    class Meta:
        model = Erabiltzailea
        widgets = {
        'pasahitza': forms.PasswordInput(),
    }