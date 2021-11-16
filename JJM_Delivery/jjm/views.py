from json import dumps
import json

from django.contrib import messages
from django.contrib.auth.models import User, auth
from django.http import *
from django.shortcuts import render, redirect
from django.db.models import Count
from .forms import *
from django.http import Http404
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate, login, logout
from math import sin, cos, sqrt, atan2, radians


def loginUser(request):
    if request.user.is_authenticated:
        return HttpResponseRedirect('/')
    if request.method == 'POST':
        erabiltzailea = request.POST.get('userLogin')
        pasahitza = request.POST.get('pasLogin')
        user = authenticate(request, username=erabiltzailea, password=pasahitza)
        if user is not None:
            login(request, user)
            return HttpResponseRedirect('/')

    return render(request, 'index.html')
def logoutUser(request):
    logout(request)
    return HttpResponseRedirect('/')
def registerUser(request):
    if request.user.is_authenticated:
        return HttpResponseRedirect('/')
    if request.method == 'POST':
        izena = request.POST.get('izena')
        abizena = request.POST.get('abizena')
        mail = request.POST.get('mail')
        erabiltzailea = request.POST.get('erabiltzailea')
        pasahitza = request.POST.get('pasahitza')
        if User.objects.filter(username=erabiltzailea).exists() or User.objects.filter(email=mail).exists():
            print('Username or mail  taken')
            return render(request, 'register.html')
        else:
            user = User.objects.create_user(username=erabiltzailea,password=pasahitza,email=mail,first_name=izena,last_name=abizena)
            user.save()
            user = authenticate(request, username=erabiltzailea, password=pasahitza)
            login(request,user)
            return HttpResponseRedirect('/')
    else:
        return render(request, 'register.html')
    context = {}
    return render(request, 'register.html', context)
def index (request):
    last_ten = Produktua.objects.all().order_by('id')[:9]
    tenjatetxeak = last_ten.values('jatetxea_id')
    latitude = Jatetxea.objects.values('latitud')[:10]
    longitud = Jatetxea.objects.values('longitud')[:10]
    lat = []
    lon = []
    for x in tenjatetxeak:
        lat.append(Jatetxea.objects.values_list('latitud', flat=True).get(id=x['jatetxea_id']))
        lon.append(Jatetxea.objects.values_list('longitud', flat=True).get(id=x['jatetxea_id']))
    #if request.method == 'GET':
       # times = getDistanceTime(latitudeBez,longitudeBez,latitude,longitud)
    best_jatetxe = Jatetxea.objects.all()[:8]
    #La cosita esta es como un group by
    hiriak = (Jatetxea.objects.values('helbidea').annotate(dcount=Count('helbidea')).order_by())   
    return render(request, 'index.html',{"produktua":last_ten , "jatetxea":best_jatetxe, "hiriak":hiriak , "latitude":lat, "longitude":lon} )
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
idArray = []
def show_jatetxea(request):
    id = request.GET.get('id', None)
    if(id is not None):
        idArray.clear()
        idArray.append(id)
    motakAll = (Produktua.objects.filter(jatetxea=id).values('mota').annotate(dcount=Count('mota')).order_by())
    motak = (Produktua.objects.filter(jatetxea=id).values('mota').annotate(dcount=Count('mota')).order_by())[10:]
    jatetxea = Jatetxea.objects.filter(id= id)
    iruzkinak = Iruzkina.objects.filter(jatetxea_id= id)
    produktuak = (Produktua.objects.filter(jatetxea=id).annotate(dcount=Count('mota')).order_by())
    if request.method == 'POST':
        inputResena = request.POST.get('inputResena')
        ratio = request.POST.get('ratio')
        userid = request.user.id
        iruzkina = Iruzkina.objects.create(testua=inputResena,kalifikazioa=ratio,erabiltzailea_id=userid,jatetxea_id=idArray[0])
        iruzkina.save()
        return redirect('../',id=idArray[0])
    return render(request, 'jatetxea.html',{"motakAll": motakAll,"motak": motak,"jatetxe":jatetxea,"produktuak":produktuak,"iruzkinak":iruzkinak})

def get_queryset(request):
    price = request.GET.get('price')
    mota = request.GET.get('mota', None) 
    hiria=request.GET.get('hiria',None)
    jatetxea = Jatetxea.objects.filter(helbidea__icontains = hiria).filter(mota__icontains = mota)
    filtroak = (Jatetxea.objects.filter(helbidea__icontains = hiria).values('mota').annotate(dcount=Count('mota')).order_by())   
    if price:
        jatetxea= Jatetxea.objects.filter(deskripzioa__contains=price) #But this fails!?
    return render(request, 'ciudad.html',{"hiria": hiria,"jatetxe":jatetxea,"filtro":filtroak})

def kmRange(request):
    if request.method == 'POST':
        latitud = request.POST.get('latitud')
        longitud = request.POST.get('longitud')
        restaurantesenRango = Jatetxea.objects.none()
        try:
            jatetxea = Jatetxea.objects.all()
            for jatetxe in jatetxea:
                if getDistance(latitud,longitud,jatetxe.latitud,jatetxe.longitud) < 10.0:
                   restaurantesenRango |=Jatetxea.objects.all().filter(id=jatetxe.id)   #Es para crear una union          
        except Jatetxea.DoesNotExist:
            raise Http404("Jatetxea does not exist")

    return render(request, 'rangoJatetxeak.html',{"restautantes":restaurantesenRango} )








def getDistance(lati1,long1,lati2,long2):
    R = 6373.0

    lat1 = radians(float(lati1))
    lon1 = radians(float(long1))
    lat2 = radians(float(lati2))
    lon2 = radians(float(long2))

    dlon = lon2 - lon1
    dlat = lat2 - lat1

    a = sin(dlat / 2)**2 + cos(lat1) * cos(lat2) * sin(dlon / 2)**2
    c = 2 * atan2(sqrt(a), sqrt(1 - a))

    distance = R * c

    return distance