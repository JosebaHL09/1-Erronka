#! python
# -*- coding: UTF-8 -*-# enable debugging
import cgitb
import mysql.connector
mydb = mysql.connector.connect(
    host="192.168.73.6",
    port="3306",
    user="erabiltzailea",
    password="1234",
    database="jatetxea"
)
def produktuaTabla():
    mycursor = mydb.cursor()
    mycursor.execute("SELECT * FROM produktua")
    myresult = mycursor.fetchall()

    s1 = ""
    for x in myresult:
        s1 += "<tr>"
        col = 0
        for y in x:

            if (col == 7):
                s1 += "<td><img src='" + str(y) + "' style='width:100px;height:100px;'></img></td>"
            else:
                # print('Y: '+ str(y))
                s1 += "<td>" + str(y) + "</td>"
            col += 1
        s1 += "</tr>"
    return s1
def jatetxeaTabla():
    mycursor2 = mydb.cursor()
    mycursor2.execute("SELECT * FROM jatetxea")
    myresult2 = mycursor2.fetchall()
    s2 = ""
    for x1 in myresult2:
        s2 += "<tr>"
        for y1 in x1:
            # print('Y: '+ str(y))
            s2 += "<td>" + str(y1) + "</td>"
        s2 += "</tr>"
    return s2
s2 =jatetxeaTabla()
s1 =produktuaTabla()
cgitb.enable()
print("Content-Type: text/html;charset=utf-8 \n")
print("<style> table, th, td { border:1px solid black; } </style>")
print("<TITLE>CGI script output</TITLE>")
print("<H1>Produktuak</H1>")
print("<table style='width: 50%'>"+str(s1)+"</table></body></html>")
print("<H1>Jatetxeak</H1>")
print("<table style='width: 50%'>"+str(s2)+"</table></body></html>")