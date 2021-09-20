SELECT jatetxea.produktua.izena, jatetxea.erosketa.kantitatea, (jatetxea.erosketa.kantitatea * jatetxea.produktua.prezioa) AS Totala
FROM jatetxea.erosketa 
INNER JOIN jatetxea.produktua ON id_produktua = produktua.id;