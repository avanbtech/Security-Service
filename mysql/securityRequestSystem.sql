/*
securityRequestSystem.sql
Creates a request information table in the database to store values for our status page
*/

DROP TABLE IF EXISTS `requestinformation`;

CREATE TABLE `requestinformation` (
  `id` int(11) NOT NULL,
  `status` varchar(45) NOT NULL,
  `statusDate` varchar(45) NOT NULL,
  `sfuid/bcdl` int(11) NOT NULL,
  `department` varchar(45) NOT NULL,
  `date` int(11) NOT NULL,
  `requestBy` varchar(45) NOT NULL,
  `phone` int(11) NOT NULL,
  `fax` int(11) NOT NULL,
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

LOCK TABLES `requestinformation` WRITE;

UNLOCK TABLES;
