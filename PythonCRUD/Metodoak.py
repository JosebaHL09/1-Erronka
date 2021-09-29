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

def sortuErosketa(id_saskia, id_produktua, kantitatea):
    sql = "INSERT INTO erosketa (id_saskia, id_produktua, kantitatea) VALUES (%s, %s, %s)"
    val = (id_saskia, id_produktua, kantitatea)
    mycursor.execute(sql, val)
    mydb.commit()

def deleteErosketa(id):
    sql = "DELETE FROM erosketa WHERE id = %s"
    val = (id,)
    mycursor.execute(sql, val)
    mydb.commit()

def deleteSaskia(id):
    sql = "DELETE FROM saskia WHERE id = %s"
    val = (id,)
    mycursor.execute(sql, val)
    mydb.commit()

def deleteIruzkina(id):
    sql = "DELETE FROM iruzkinak WHERE id = %s"
    val = (id,)
    mycursor.execute(sql, val)
    mydb.commit()

def updateIruzkina(id, nota, testua):
    sql = "UPDATE iruzkinak SET testua = %s,  kalifikazioa = %s WHERE id = %s"
    val = (testua, nota, id)
    mycursor.execute(sql, val)
    mydb.commit()

def getErabiltzaileak(erab, pas):
    mycursor.execute("SELECT erabiltzailea, pasahitza FROM erabiltzailea")
    myresult = mycursor.fetchall()
    userArray = []
    passwArray = []
    for x in range(0,len(myresult),1):
        userArray.append(myresult[x][0])
        passwArray.append(myresult[x][1])
    i = userArray.index(erab)
    if erab in userArray[i] and pas in passwArray[i]:
        return True
    else:
        return False

def erabArray():
    mycursor.execute("SELECT erabiltzailea FROM erabiltzailea")
    myresult = mycursor.fetchall()
    userArray = []

    for x in range(0, len(myresult), 1):
        userArray.append(myresult[x][0])
    return userArray


mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    password="root",
    database="jatetxea"
)
mycursor = mydb.cursor()

#sortuErabiltzailea("Manolo2354","manolo123","Manolo","Lopez","Manolete@gmail.com")
#sortuIruzkina(9,"Muy buen producto, extremadamente rico y todo bien preparado, recomendable 100%",1,1)
#sortuSaskia("c/Landako etorbidea 20 4E,Durango",655495415,"2021-09-27",1)
#sortuErosketa(3,1,4)
#deleteErosketa(5)
#updateIruzkina(1,2,"Basura, lo peor que he probado en mucho tiempo")
erabArray()