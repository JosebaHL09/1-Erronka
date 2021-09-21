CREATE DATABASE  IF NOT EXISTS `jatetxea` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `jatetxea`;
-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: jatetxea
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `erabiltzailea`
--

DROP TABLE IF EXISTS `erabiltzailea`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erabiltzailea` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Erabiltzailea` varchar(50) DEFAULT NULL,
  `Izena` varchar(45) DEFAULT NULL,
  `Abizena` varchar(45) DEFAULT NULL,
  `Posta` varchar(45) DEFAULT NULL,
  `Pasahitza` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erabiltzailea`
--

LOCK TABLES `erabiltzailea` WRITE;
/*!40000 ALTER TABLE `erabiltzailea` DISABLE KEYS */;
INSERT INTO `erabiltzailea` VALUES (1,'Paco12232','Paco','Fetido','dfagdfsgsfa',NULL),(2,'Golondrina777','Juanito','Juan','golondrina@gmail.com',NULL);
/*!40000 ALTER TABLE `erabiltzailea` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erosketa`
--

DROP TABLE IF EXISTS `erosketa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erosketa` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_saskia` int NOT NULL,
  `id_produktua` int NOT NULL,
  `kantitatea` int DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `id_saskia_idx` (`id_saskia`),
  KEY `id_produktua_idx` (`id_produktua`),
  CONSTRAINT `id_produktua` FOREIGN KEY (`id_produktua`) REFERENCES `produktua` (`id`),
  CONSTRAINT `id_saskia` FOREIGN KEY (`id_saskia`) REFERENCES `saskia` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erosketa`
--

LOCK TABLES `erosketa` WRITE;
/*!40000 ALTER TABLE `erosketa` DISABLE KEYS */;
INSERT INTO `erosketa` VALUES (1,1,1,3),(2,1,3,2),(3,1,2,1),(4,2,1,1);
/*!40000 ALTER TABLE `erosketa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `iruzkinak`
--

DROP TABLE IF EXISTS `iruzkinak`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `iruzkinak` (
  `id` int NOT NULL AUTO_INCREMENT,
  `testua` varchar(255) DEFAULT NULL,
  `id_erabil` int DEFAULT NULL,
  `id_prod` int DEFAULT NULL,
  `kalifikazioa` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_erabil_idx` (`id_erabil`),
  KEY `id_prod_idx` (`id_prod`),
  CONSTRAINT `id_erabil` FOREIGN KEY (`id_erabil`) REFERENCES `erabiltzailea` (`id`),
  CONSTRAINT `id_prod` FOREIGN KEY (`id_prod`) REFERENCES `produktua` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `iruzkinak`
--

LOCK TABLES `iruzkinak` WRITE;
/*!40000 ALTER TABLE `iruzkinak` DISABLE KEYS */;
/*!40000 ALTER TABLE `iruzkinak` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jatetxea`
--

DROP TABLE IF EXISTS `jatetxea`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jatetxea` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Izena` varchar(45) DEFAULT NULL,
  `Helbidea` varchar(45) DEFAULT NULL,
  `Telefonoa` int DEFAULT NULL,
  `Izarrak` int DEFAULT NULL,
  `Oharrak` varchar(255) DEFAULT NULL,
  `img_path` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jatetxea`
--

LOCK TABLES `jatetxea` WRITE;
/*!40000 ALTER TABLE `jatetxea` DISABLE KEYS */;
INSERT INTO `jatetxea` VALUES (1,'Tolibar','Durango',2564814,5,'El mejor bar de durango',NULL),(2,'Bar2','Iurreta',3456575,3,'algo',NULL);
/*!40000 ALTER TABLE `jatetxea` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produktua`
--

DROP TABLE IF EXISTS `produktua`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produktua` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Izena` varchar(45) DEFAULT NULL,
  `Prezioa` float DEFAULT NULL,
  `id_restaurante` int NOT NULL,
  `img_path` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_jatetxea_idx` (`id_restaurante`),
  CONSTRAINT `id_jatetxea` FOREIGN KEY (`id_restaurante`) REFERENCES `jatetxea` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produktua`
--

LOCK TABLES `produktua` WRITE;
/*!40000 ALTER TABLE `produktua` DISABLE KEYS */;
INSERT INTO `produktua` VALUES (1,'Bocadillo',5,1,NULL),(2,'Sopa do macaco',10,2,NULL),(3,'Nalopitanas',2,1,NULL);
/*!40000 ALTER TABLE `produktua` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `saskia`
--

DROP TABLE IF EXISTS `saskia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `saskia` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Helbidea` varchar(45) DEFAULT NULL,
  `Telefonoa` int DEFAULT NULL,
  `Data` datetime DEFAULT NULL,
  `id_erabiltzaile` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_erabiltzaile` (`id_erabiltzaile`),
  CONSTRAINT `id_erabiltzaile` FOREIGN KEY (`id_erabiltzaile`) REFERENCES `erabiltzailea` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `saskia`
--

LOCK TABLES `saskia` WRITE;
/*!40000 ALTER TABLE `saskia` DISABLE KEYS */;
INSERT INTO `saskia` VALUES (1,'Durango',6546358,'2021-09-20 00:00:00',1),(2,'Iurreta',3456655,'2021-09-22 00:00:00',2);
/*!40000 ALTER TABLE `saskia` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-21  8:55:20
