import random
from django import template
from math import sin, cos, sqrt, atan2

register = template.Library()

@register.simple_tag
def getDistance(lat1,lon1,lat2,lon2):
    R = 6373.0

    lat1 = lat1
    lon1 = lon1
    lat2 = lat2
    lon2 = lon2

    dlon = lon2 - lon1
    dlat = lat2 - lat1
    a = (sin(dlat/2))**2 + cos(lat1) * cos(lat2) * (sin(dlon/2))**2
    c = 2 * atan2(sqrt(a), sqrt(1-a))
    distance = R * c

    return distance