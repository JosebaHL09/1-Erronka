from json import dumps
import json

from django.contrib import messages
from django.contrib.auth.hashers import make_password
from django.http import *
from django.shortcuts import render, redirect
from django.db.models import Count
from .forms import *
from math import sin, cos, sqrt, atan2, radians
from django.http import Http404
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate, login, logout


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
def loginUser(request):
    if request.user.is_authenticated:
        return render(request, 'index.html')
    if request.method == 'POST':
        erabiltzailea = request.POST.get('erabiltzailea')
        pasahitza = request.POST.get('pasahitza')

        user = authenticate(request, username=erabiltzailea, password=pasahitza)

        if user is not None:
            login(request, user)
            return render(request, 'index.html')
    context = {}
    return render(request, 'login.html',context)
def logoutUser(request):
    logout(request)
    return render(request, 'login.html')

def index (request):
    last_ten = Produktua.objects.all().order_by('id')[:10]
    latitude = Jatetxea.objects.values('latitud')[:10]
    longitud = Jatetxea.objects.values('longitud')[:10]
    #if request.method == 'GET':
       # times = getDistanceTime(latitudeBez,longitudeBez,latitude,longitud)
    best_jatetxe = Jatetxea.objects.all()[:8]
    #La cosita esta es como un group by
    hiriak = (Jatetxea.objects.values('helbidea').annotate(dcount=Count('helbidea')).order_by())   
    return render(request, 'index.html',{"produktua":last_ten , "jatetxea":best_jatetxe, "hiriak":hiriak} )

@csrf_exempt
def hiria(request):
    hiria = request.GET.get('hiria',None)
    try:
        filtroak = (Jatetxea.objects.filter(helbidea__icontains = hiria).values('mota').annotate(dcount=Count('mota')).order_by())   
        jatetxea = Jatetxea.objects.filter(helbidea__icontains = hiria)
    except Jatetxea.DoesNotExist:
        raise Http404("Jatetxea does not exist")
    return render(request, 'ciudad.html',{"hiria": hiria,"jatetxe":jatetxea,"filtro":filtroak})

@csrf_exempt
def post_hiriak(request):
    mota = request.GET.get('mota', None) 
    hiria=request.GET.get('hiria',None)
    jatetxea = Jatetxea.objects.filter(helbidea__icontains = hiria).filter(mota__icontains = mota)
    filtroak = (Jatetxea.objects.filter(helbidea__icontains = hiria).values('mota').annotate(dcount=Count('mota')).order_by())   
    return render(request, 'ciudad.html',{"hiria": hiria,"jatetxe":jatetxea,"filtro":filtroak})


#def get_hiriakMap(request):
    hiria=request.GET.get('hiria',None)
    jatetxea = Jatetxea.objects.filter(helbidea__icontains = hiria)
    return JsonResponse({"jatetxea": jatetxea}, status=200)

def getDistanceTime(latitdue_bez,longitude_bez,latitude_jate,longitude_jate):
    R = 6373.0
    times=[]
    for x in range(0,len(latitude_jate)):
        lat1 = radians(latitdue_bez)
        lon1 = radians(longitude_bez)
        lat2 = radians(latitude_jate[x])
        lon2 = radians(longitude_jate[x])

        dlon = lon2 - lon1
        dlat = lat2 - lat1

        a = sin(dlat / 2)**2 + cos(lat1) * cos(lat2) * sin(dlon / 2)**2
        c = 2 * atan2(sqrt(a), sqrt(1 - a))

        distance = R * c

        time = distance * 5
        times.append(time)
        
    return times 
