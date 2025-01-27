-- phpMyAdmin SQL Dump
-- version 3.2.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 10, 2010 at 03:10 p.m.
-- Server version: 5.1.41
-- PHP Version: 5.3.1

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `eventhdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `eventhdb_auth_actions`
--

DROP TABLE IF EXISTS `eventhdb_auth_actions`;
CREATE TABLE IF NOT EXISTS `eventhdb_auth_actions` (
  `ix` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(24) COLLATE latin1_general_ci NOT NULL,
  `display` tinyint(4) DEFAULT '1',
  `new` tinyint(4) DEFAULT '1',
  `modify` tinyint(4) DEFAULT '1',
  `remove` tinyint(4) DEFAULT '1',
  PRIMARY KEY (`ix`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci AUTO_INCREMENT=9 ;

--
-- Dumping data for table `eventhdb_auth_actions`
--

INSERT INTO `eventhdb_auth_actions` (`ix`, `description`, `display`, `new`, `modify`, `remove`) VALUES
(1, 'mUser', 1, 1, 1, 1),
(2, 'mLocation', 1, 1, 1, 1),
(3, 'mEvent', 1, 1, 1, 1),
(4, 'mPOS', 1, 1, 1, 1),
(5, 'mFinance', 1, 1, 1, 1),
(6, 'mReport', 1, 1, 1, 1),
(7, 'mHelp', 1, 1, 1, 1),
(8, 'mOut', 1, 1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `eventhdb_auth_roleactions`
--

DROP TABLE IF EXISTS `eventhdb_auth_roleactions`;
CREATE TABLE IF NOT EXISTS `eventhdb_auth_roleactions` (
  `action` int(2) NOT NULL,
  `role` int(2) NOT NULL,
  KEY `idAction` (`action`,`role`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Dumping data for table `eventhdb_auth_roleactions`
--

INSERT INTO `eventhdb_auth_roleactions` (`action`, `role`) VALUES
(1, 2),
(2, 2);

-- --------------------------------------------------------

--
-- Table structure for table `eventhdb_auth_roles`
--

DROP TABLE IF EXISTS `eventhdb_auth_roles`;
CREATE TABLE IF NOT EXISTS `eventhdb_auth_roles` (
  `ix` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(16) COLLATE latin1_general_ci NOT NULL,
  PRIMARY KEY (`ix`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci AUTO_INCREMENT=6 ;

--
-- Dumping data for table `eventhdb_auth_roles`
--

INSERT INTO `eventhdb_auth_roles` (`ix`, `description`) VALUES
(1, 'Client'),
(2, 'Operator'),
(3, 'Seller'),
(4, 'Manager'),
(5, 'Administrator');

-- --------------------------------------------------------

--
-- Table structure for table `eventhdb_auth_useractions`
--

DROP TABLE IF EXISTS `eventhdb_auth_useractions`;
CREATE TABLE IF NOT EXISTS `eventhdb_auth_useractions` (
  `user` int(2) DEFAULT NULL,
  `action` int(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `eventhdb_auth_useractions`
--

INSERT INTO `eventhdb_auth_useractions` (`user`, `action`) VALUES
(1, 1),
(1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `eventhdb_auth_users`
--

DROP TABLE IF EXISTS `eventhdb_auth_users`;
CREATE TABLE IF NOT EXISTS `eventhdb_auth_users` (
  `ix` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(24) COLLATE latin1_general_ci NOT NULL,
  `middlename` varchar(24) COLLATE latin1_general_ci NOT NULL,
  `lastname` varchar(24) COLLATE latin1_general_ci NOT NULL,
  `email` varchar(24) COLLATE latin1_general_ci NOT NULL,
  `role` tinyint(1) NOT NULL,
  `password` varchar(16) COLLATE latin1_general_ci NOT NULL,
  `phone` int(16) NOT NULL,
  `photo` varchar(32) COLLATE latin1_general_ci NOT NULL,
  `state` int(16) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ix`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci AUTO_INCREMENT=12 ;

--
-- Dumping data for table `eventhdb_auth_users`
--

INSERT INTO `eventhdb_auth_users` (`ix`, `firstname`, `middlename`, `lastname`, `email`, `role`, `password`, `phone`, `photo`, `state`) VALUES
(1, 'Manuel', 'Amaya', 'Carpio', 'amayamanu@gmail.com', 5, '123456', 25518325, 'P1010176.JPG', 1),
(2, 'Fabian', 'Alpizar', 'Arce', 'fgrid@hotmail.com', 2, '123456', 88934280, 'Koala.jpg', 1),
(3, 'Wilberth', 'Castro', 'Fuentes', 'wilz04@hotmail.com', 4, '123456', 83490213, 'wilz06.jpg', 1),
(9, 'Ketty', 'Hidalgo', 'Casimiro', 'ketty_mar20@hotmail.com', 4, '1234', 990417476, 'Imagen016.jpg', 1),
(10, 'Steve', 'Granados', 'Cantillo', 'gracans777@yahoo.es', 5, '1234', 88888888, 'Lighthouse.jpg', 1),
(11, 'Tannia', 'Redondo', 'Sánchez', 'tannia.r@gmail.com', 4, '123456', 89321033, 'Penguins.jpg', 1);

-- --------------------------------------------------------

--
-- Table structure for table `eventhdb_ecom_bank`
--

DROP TABLE IF EXISTS `eventhdb_ecom_bank`;
CREATE TABLE IF NOT EXISTS `eventhdb_ecom_bank` (
  `ix` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(24) DEFAULT NULL,
  `logo` binary(1) DEFAULT NULL,
  PRIMARY KEY (`ix`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `eventhdb_ecom_bank`
--

INSERT INTO `eventhdb_ecom_bank` (`ix`, `name`, `logo`) VALUES
(1, 'Bac San Jos&eacute;', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `eventhdb_ecom_cards`
--

DROP TABLE IF EXISTS `eventhdb_ecom_cards`;
CREATE TABLE IF NOT EXISTS `eventhdb_ecom_cards` (
  `ix` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `bank` int(11) DEFAULT NULL,
  `name` varchar(24) DEFAULT NULL,
  PRIMARY KEY (`ix`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `eventhdb_ecom_cards`
--

INSERT INTO `eventhdb_ecom_cards` (`ix`, `bank`, `name`) VALUES
(1, 1, 'Credomatic');

-- --------------------------------------------------------

--
-- Table structure for table `eventhdb_ecom_currency`
--

DROP TABLE IF EXISTS `eventhdb_ecom_currency`;
CREATE TABLE IF NOT EXISTS `eventhdb_ecom_currency` (
  `ix` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(16) DEFAULT NULL,
  `symbol` char(1) DEFAULT NULL,
  `exchangerate` decimal(10,0) DEFAULT NULL,
  PRIMARY KEY (`ix`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `eventhdb_ecom_currency`
--

INSERT INTO `eventhdb_ecom_currency` (`ix`, `name`, `symbol`, `exchangerate`) VALUES
(1, 'Col&oacute;n', 'C', '1');

-- --------------------------------------------------------

--
-- Table structure for table `eventhdb_ecom_paymentmethods`
--

DROP TABLE IF EXISTS `eventhdb_ecom_paymentmethods`;
CREATE TABLE IF NOT EXISTS `eventhdb_ecom_paymentmethods` (
  `ix` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(16) DEFAULT NULL,
  PRIMARY KEY (`ix`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 COMMENT='\n\n' AUTO_INCREMENT=2 ;

--
-- Dumping data for table `eventhdb_ecom_paymentmethods`
--

INSERT INTO `eventhdb_ecom_paymentmethods` (`ix`, `name`) VALUES
(1, 'Tarjeta');

-- --------------------------------------------------------

--
-- Table structure for table `eventhdb_find_regions`
--

DROP TABLE IF EXISTS `eventhdb_find_regions`;
CREATE TABLE IF NOT EXISTS `eventhdb_find_regions` (
  `ix` int(11) NOT NULL AUTO_INCREMENT,
  `parent` int(11) DEFAULT NULL,
  `name` varchar(64) NOT NULL,
  PRIMARY KEY (`ix`),
  KEY `parent` (`parent`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=12 ;

--
-- Dumping data for table `eventhdb_find_regions`
--

INSERT INTO `eventhdb_find_regions` (`ix`, `parent`, `name`) VALUES
(1, NULL, 'Costa Rica'),
(2, 1, 'Cartago'),
(5, 2, 'Central'),
(6, 5, 'San Francisco'),
(7, 6, 'Cocorí'),
(8, 7, 'Casa de Wil'),
(9, 7, 'Casa de Fabito'),
(10, 2, 'El Guarco'),
(11, 11, 'Curri');

-- --------------------------------------------------------

--
-- Table structure for table `eventhdb_find_sector`
--

DROP TABLE IF EXISTS `eventhdb_find_sector`;
CREATE TABLE IF NOT EXISTS `eventhdb_find_sector` (
  `ix` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(24) DEFAULT NULL,
  `description` varchar(64) DEFAULT NULL,
  `type` int(1) DEFAULT NULL,
  `capacity` int(6) DEFAULT NULL,
  `rows` int(11) DEFAULT NULL,
  `cols` int(11) DEFAULT NULL,
  `image` varchar(64) DEFAULT NULL,
  `state` int(1) DEFAULT NULL,
  PRIMARY KEY (`ix`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `eventhdb_find_sector`
--


-- --------------------------------------------------------

--
-- Table structure for table `eventhdb_find_typeevent`
--

DROP TABLE IF EXISTS `eventhdb_find_typeevent`;
CREATE TABLE IF NOT EXISTS `eventhdb_find_typeevent` (
  `ix` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(24) NOT NULL,
  PRIMARY KEY (`ix`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `eventhdb_find_typeevent`
--


-- --------------------------------------------------------

--
-- Constraints for table `eventhdb_find_regions`
--
ALTER TABLE `eventhdb_find_regions`
  ADD CONSTRAINT `eventhdb_find_regions_ibfk_1` FOREIGN KEY (`parent`) REFERENCES `eventhdb_find_regions` (`ix`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
