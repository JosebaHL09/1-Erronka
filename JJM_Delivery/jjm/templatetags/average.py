from django import template

from jjm.models import Jatetxea
register = template.Library()

@register.simple_tag()
def average(jatetxea):
 
    average = Jatetxea.objects.raw('SELECT jjmdb.jjm_jatetxea.id as id, jjmdb.jjm_jatetxea.izena, avg(jjmdb.jjm_iruzkina.kalifikazioa) AS Kalifikazioa , COUNT(jjmdb.jjm_iruzkina.erabiltzailea_id) AS Count FROM jjmdb.jjm_iruzkina  INNER JOIN jjmdb.jjm_jatetxea ON jjmdb.jjm_jatetxea.id = jjmdb.jjm_iruzkina.jatetxea_id  WHERE jjmdb.jjm_jatetxea.id = %s group by jjmdb.jjm_jatetxea.id' %(str(jatetxea.id)))

    return average