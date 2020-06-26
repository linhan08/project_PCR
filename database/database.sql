-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.20 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for database
CREATE DATABASE IF NOT EXISTS `database` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `database`;

-- Dumping structure for table database.address
CREATE TABLE IF NOT EXISTS `address` (
  `unit_id` int NOT NULL,
  `area_id` int DEFAULT NULL,
  `province_id` int DEFAULT NULL,
  `country_id` int DEFAULT NULL,
  PRIMARY KEY (`unit_id`),
  KEY `fk_address_unit_idx` (`unit_id`),
  CONSTRAINT `fk_address_unit` FOREIGN KEY (`unit_id`) REFERENCES `unit` (`unit_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table database.address: ~0 rows (approximately)
DELETE FROM `address`;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
/*!40000 ALTER TABLE `address` ENABLE KEYS */;

-- Dumping structure for table database.area
CREATE TABLE IF NOT EXISTS `area` (
  `area_id` int NOT NULL AUTO_INCREMENT,
  `area_name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`area_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table database.area: ~0 rows (approximately)
DELETE FROM `area`;
/*!40000 ALTER TABLE `area` DISABLE KEYS */;
/*!40000 ALTER TABLE `area` ENABLE KEYS */;

-- Dumping structure for table database.chemical
CREATE TABLE IF NOT EXISTS `chemical` (
  `chemical_id` int NOT NULL AUTO_INCREMENT,
  `chemical_type_id` int NOT NULL,
  `chemical_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`chemical_id`),
  KEY `fk_chemical_chemical_type1_idx` (`chemical_type_id`),
  CONSTRAINT `fk_chemical_chemical_type1` FOREIGN KEY (`chemical_type_id`) REFERENCES `chemical_type` (`type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table database.chemical: ~0 rows (approximately)
DELETE FROM `chemical`;
/*!40000 ALTER TABLE `chemical` DISABLE KEYS */;
/*!40000 ALTER TABLE `chemical` ENABLE KEYS */;

-- Dumping structure for table database.chemical_report
CREATE TABLE IF NOT EXISTS `chemical_report` (
  `chemical_report_id` int NOT NULL AUTO_INCREMENT,
  `unit_report_id` int DEFAULT NULL,
  `chemical_type_id` int DEFAULT NULL,
  `chemical_id` varchar(45) DEFAULT NULL,
  `chemical_number_usedd` int DEFAULT NULL,
  `chemical_number_left` int DEFAULT NULL,
  `chemical_number_needed` int DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_date` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`chemical_report_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table database.chemical_report: ~0 rows (approximately)
DELETE FROM `chemical_report`;
/*!40000 ALTER TABLE `chemical_report` DISABLE KEYS */;
/*!40000 ALTER TABLE `chemical_report` ENABLE KEYS */;

-- Dumping structure for table database.chemical_type
CREATE TABLE IF NOT EXISTS `chemical_type` (
  `type_id` int NOT NULL AUTO_INCREMENT,
  `type_name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table database.chemical_type: ~0 rows (approximately)
DELETE FROM `chemical_type`;
/*!40000 ALTER TABLE `chemical_type` DISABLE KEYS */;
/*!40000 ALTER TABLE `chemical_type` ENABLE KEYS */;

-- Dumping structure for table database.country
CREATE TABLE IF NOT EXISTS `country` (
  `country_id` int NOT NULL AUTO_INCREMENT,
  `country_name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`country_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table database.country: ~0 rows (approximately)
DELETE FROM `country`;
/*!40000 ALTER TABLE `country` DISABLE KEYS */;
/*!40000 ALTER TABLE `country` ENABLE KEYS */;

-- Dumping structure for table database.device
CREATE TABLE IF NOT EXISTS `device` (
  `device_id` int NOT NULL AUTO_INCREMENT,
  `device_type_id` int NOT NULL,
  `device_name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`device_id`),
  KEY `fk_device_device_type1_idx` (`device_type_id`),
  CONSTRAINT `fk_device_device_type1` FOREIGN KEY (`device_type_id`) REFERENCES `device_type` (`type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table database.device: ~0 rows (approximately)
DELETE FROM `device`;
/*!40000 ALTER TABLE `device` DISABLE KEYS */;
/*!40000 ALTER TABLE `device` ENABLE KEYS */;

-- Dumping structure for table database.device_report
CREATE TABLE IF NOT EXISTS `device_report` (
  `device_report_id` int NOT NULL AUTO_INCREMENT,
  `unit_report_id` int DEFAULT NULL,
  `device_type_id` int DEFAULT NULL,
  `device_id` int DEFAULT NULL,
  `is_need_more_machine` int DEFAULT NULL,
  `number_of_machine` int DEFAULT NULL,
  `device_purpose` varchar(255) DEFAULT NULL,
  `test_result_number_each_time` int DEFAULT NULL,
  `test_number_each_day` int DEFAULT NULL,
  `start_using_date` date DEFAULT NULL,
  `note` varchar(1000) DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`device_report_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table database.device_report: ~0 rows (approximately)
DELETE FROM `device_report`;
/*!40000 ALTER TABLE `device_report` DISABLE KEYS */;
/*!40000 ALTER TABLE `device_report` ENABLE KEYS */;

-- Dumping structure for table database.device_type
CREATE TABLE IF NOT EXISTS `device_type` (
  `type_id` int NOT NULL,
  `type_name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table database.device_type: ~0 rows (approximately)
DELETE FROM `device_type`;
/*!40000 ALTER TABLE `device_type` DISABLE KEYS */;
/*!40000 ALTER TABLE `device_type` ENABLE KEYS */;

-- Dumping structure for table database.employee_result
CREATE TABLE IF NOT EXISTS `employee_result` (
  `employee_result_id` int NOT NULL,
  `unit_id` int DEFAULT NULL,
  `employee_number_doing_test` int DEFAULT NULL,
  `employee_number_using_PCR` int DEFAULT NULL,
  `employee_testing_trained_place` varchar(100) DEFAULT NULL,
  `employee_trained_place` varchar(100) DEFAULT NULL,
  `employee_number_incoming` int DEFAULT NULL,
  `created_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`employee_result_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table database.employee_result: ~0 rows (approximately)
DELETE FROM `employee_result`;
/*!40000 ALTER TABLE `employee_result` DISABLE KEYS */;
/*!40000 ALTER TABLE `employee_result` ENABLE KEYS */;

-- Dumping structure for table database.province
CREATE TABLE IF NOT EXISTS `province` (
  `province_id` int NOT NULL AUTO_INCREMENT,
  `province_name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`province_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table database.province: ~0 rows (approximately)
DELETE FROM `province`;
/*!40000 ALTER TABLE `province` DISABLE KEYS */;
/*!40000 ALTER TABLE `province` ENABLE KEYS */;

-- Dumping structure for table database.role
CREATE TABLE IF NOT EXISTS `role` (
  `role_id` int NOT NULL AUTO_INCREMENT,
  `area_id` int DEFAULT NULL,
  `province_id` int DEFAULT NULL,
  `country_id` int DEFAULT NULL,
  `role_type` int DEFAULT NULL,
  `role_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table database.role: ~0 rows (approximately)
DELETE FROM `role`;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
/*!40000 ALTER TABLE `role` ENABLE KEYS */;

-- Dumping structure for table database.test_result
CREATE TABLE IF NOT EXISTS `test_result` (
  `test_id` int NOT NULL AUTO_INCREMENT,
  `unit_id` int DEFAULT NULL,
  `test_number_from_day_21` bigint DEFAULT NULL,
  `test_number_moved_to_other_unit` int DEFAULT NULL,
  `test_sample_moving_place` varchar(100) DEFAULT NULL,
  `test_number_execute_at_unit` int DEFAULT NULL,
  `test_number_each_day` int DEFAULT NULL,
  `test_number_incoming` bigint DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`test_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table database.test_result: ~0 rows (approximately)
DELETE FROM `test_result`;
/*!40000 ALTER TABLE `test_result` DISABLE KEYS */;
/*!40000 ALTER TABLE `test_result` ENABLE KEYS */;

-- Dumping structure for table database.unit
CREATE TABLE IF NOT EXISTS `unit` (
  `unit_id` int NOT NULL AUTO_INCREMENT,
  `unit_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`unit_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table database.unit: ~0 rows (approximately)
DELETE FROM `unit`;
/*!40000 ALTER TABLE `unit` DISABLE KEYS */;
/*!40000 ALTER TABLE `unit` ENABLE KEYS */;

-- Dumping structure for table database.unit_report
CREATE TABLE IF NOT EXISTS `unit_report` (
  `unit_report_id` int NOT NULL AUTO_INCREMENT,
  `unit_id` int DEFAULT NULL,
  `name_of_head_of_department` varchar(45) DEFAULT NULL,
  `email_of_head_of_department` varchar(45) DEFAULT NULL,
  `phone_of_head_of_department` varchar(45) DEFAULT NULL,
  `is_executed_test` int DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_date` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`unit_report_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table database.unit_report: ~0 rows (approximately)
DELETE FROM `unit_report`;
/*!40000 ALTER TABLE `unit_report` DISABLE KEYS */;
/*!40000 ALTER TABLE `unit_report` ENABLE KEYS */;

-- Dumping structure for table database.user
CREATE TABLE IF NOT EXISTS `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `role_id` int NOT NULL,
  `user_name` varchar(100) DEFAULT NULL,
  `user_password` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  KEY `fk_user_role1_idx` (`role_id`),
  CONSTRAINT `fk_user_role1` FOREIGN KEY (`role_id`) REFERENCES `role` (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table database.user: ~0 rows (approximately)
DELETE FROM `user`;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
