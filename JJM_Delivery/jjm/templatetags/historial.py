from django import template
from jjm.models import Erosketa
from django.template import RequestContext
register = template.Library()

@register.simple_tag()
def showHistorial(user):
        erosketa = Erosketa.objects.raw('SELECT jjmdb.jjm_erosketa.id as id ,jjmdb.jjm_produktua.img_path,jjmdb.jjm_saskia.data, jjmdb.jjm_produktua.izena, jjmdb.jjm_jatetxea.izena as jatizena,jjmdb.jjm_erosketa.kantitatea,jjmdb.jjm_produktua.prezioa FROM jjmdb.jjm_erosketa INNER JOIN jjmdb.jjm_produktua ON jjmdb.jjm_produktua.id = jjmdb.jjm_erosketa.produktua_id INNER JOIN jjmdb.jjm_saskia ON jjmdb.jjm_saskia.id = jjmdb.jjm_erosketa.saskia_id INNER JOIN jjmdb.auth_user ON jjmdb.jjm_saskia.erabiltzailea_id = jjmdb.auth_user.id inner JOIN jjm_jatetxea on jjmdb.jjm_jatetxea.id =jjmdb.jjm_produktua.jatetxea_id WHERE jjmdb.auth_user.id = %s' %(str(user.id)))
        return erosketa