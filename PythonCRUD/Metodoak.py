import mysql.connector

def sortuErabiltzailea(erabiltzailea, pasahitza, izena, abizena, posta):
    sql = "INSERT INTO erabiltzailea (erabiltzailea, izena, abizena, posta, pasahitza) VALUES (%s, %s, %s, %s, %s)"
    val = (erabiltzailea,izena, abizena,posta,pasahitza)
    mycursor.execute(sql, val)
    mydb.commit()

def sortuIruzkina(kalifikazioa, testua, id_erab, id_prod):
    sql = "INSERT INTO iruzkinak (testua, id_erabil, id_prod, kalifikazioa) VALUES (%s, %s, %s, %s)"
    val = (testua, id_erab, id_prod, kalifikazioa)
    mycursor.execute(sql, val)
    mydb.commit()

def sortuSaskia(helbidea, telefonoa, data, id_erabil):
    sql = "INSERT INTO saskia (helbidea, telefonoa, data, id_erabiltzaile) VALUES (%s, %s, %s, %s)"
    val = (helbidea, telefonoa, data, id_erabil)
    mycursor.execute(sql, val)
    mydb.commit()

def sortuErosketa():
    print("")

mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    password="root",
    database="jatetxea"
)
mycursor = mydb.cursor()

#sortuErabiltzailea("Juanito23","juan123","Juan","Lopez","Juanitogolondrina@gmail.com")
#sortuIruzkina(9,"Muy buen producto, extremadamente rico y todo bien preparado, recomendable 100%",1,1)
#sortuSaskia("c/Landako etorbidea 20 4E,Durango",655495415,"2021-09-27",1)