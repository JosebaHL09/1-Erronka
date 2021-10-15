from django.shortcuts import render
from .models import Erabiltzailea
# Create your views here.
def user_list(request):
    erabiltzaileak = Erabiltzailea.objects.all()
    return render(request, 'blog/post_list.html', locals())