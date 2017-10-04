-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: securityrequestsystem
-- ------------------------------------------------------
-- Server version	5.7.19-log
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
--
-- Table structure for table `requestinformation`
--
DROP TABLE IF EXISTS `requestinformation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `requestinformation` (
  `id` int(11) NOT NULL,
  `status` varchar(45) NOT NULL,
  `statusDate` varchar(45) NOT NULL,
  `sfuid/bcdl` int(11) NOT NULL,
  `department` varchar(45) NOT NULL,
  `date` int(11) NOT NULL,
  `requestBy` varchar(45) NOT NULL,
  `phone` int(11) NOT NULL,
  `fax` int(11),
  `email` varchar(45) NOT NULL,
  `nameOfEvent` varchar(45) NOT NULL,
  `licensed` tinyint(4) NOT NULL,
  `location` varchar(45) NOT NULL,
  `numberOfattendees` int(11) NOT NULL,
  `evenDates` varchar(45) NOT NULL,
  `times` int(11) NOT NULL,
  `details` mediumtext,
  `accountCode` varchar(45) NOT NULL,
  `invoice` tinyint(4) DEFAULT NULL,
  `authorizedBy` varchar(45) NOT NULL,
  `authorizedID` varchar(45) NOT NULL,
  `authorizedDate` varchar(45) NOT NULL,
  `signature` varchar(45) NOT NULL,
  `authorizedPhone` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;
--
-- Dumping data for table `requestinformation`
--
LOCK TABLES `requestinformation` WRITE;
/*!40000 ALTER TABLE `requestinformation` DISABLE KEYS */;
/*!40000 ALTER TABLE `requestinformation` ENABLE KEYS */;
UNLOCK TABLES;
--
-- Dumping events for database 'securityrequestsystem'
--
--
-- Dumping routines for database 'securityrequestsystem'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
-- Dump completed on 2017-09-26 12:49:11
