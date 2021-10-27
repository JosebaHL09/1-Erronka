from django.contrib.auth.hashers import make_password
from django.http import *
from django.shortcuts import render, redirect

from .forms import *


# Create your views here.
"""def erabiltzailea_new(request):
    if request.method == 'POST':
        form = ErabiltzaileaForm(request.POST)
        if form.is_valid():
            erabiltzailea = form.save(commit=False)
            erabiltzailea.pasahitza = make_password("123")
            erabiltzailea.save()
            return HttpResponseRedirect('../..')
    else:
        form = ErabiltzaileaForm()
        redirect('index.html')
    return render(request, 'erabiltzailea_edit.html', {'form':form})"""

def index (request):
    last_ten = Produktua.objects.all().order_by('id')[:10]
    best_jatetxe = Jatetxea.objects.all()[:8]
    return render(request, 'index.html',{"produktua":last_ten , "jatetxea":best_jatetxe} )

    