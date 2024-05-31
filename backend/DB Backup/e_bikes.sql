/*
SQLyog Community v13.2.1 (64 bit)
MySQL - 10.4.28-MariaDB : Database - e_bikes
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`e_bikes` /*!40100 DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci */;

USE `e_bikes`;

/*Table structure for table `accessories` */

DROP TABLE IF EXISTS `accessories`;

CREATE TABLE `accessories` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `price` decimal(10,0) unsigned NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() COMMENT 'current_timestamp()',
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

/*Data for the table `accessories` */

insert  into `accessories`(`id`,`name`,`description`,`price`,`image_url`,`created_at`,`updated_at`) values 
(1,'Krptonite Lock','12.7mm hardened STEEL CASE',79,'https://50rebels.com/cdn/shop/products/kryptonitelockproduct.svg?v=1678732174&width=1800','2024-04-23 16:25:06','2024-04-23 16:25:06'),
(2,'White Wall Vee tires','White Wall Tires (Vee Speedster)\r\nThese tires make your 20x4 bike look like a real bike from the 70s. Tires can only be ordered as a separate item and must be fitted by you or in a bicycle or e-bike shop. The designated price is for two tires, which are c',139,'https://50rebels.com/cdn/shop/products/white_walltires__5.svg?v=1678803775&width=1800','2024-04-23 16:27:14','2024-04-23 16:27:14'),
(3,'Protector Spray','Professional use. This silicone protective spray eliminates squeaks and repels moisture. Ideal for protecting, waterproofing and lubricating mechanical parts, rubber and plastic joints.',9,'https://50rebels.com/cdn/shop/products/SiliconeProtectantSpray.svg?v=1678898958&width=1800','2024-04-23 16:28:23','2024-05-21 15:42:36'),
(4,'Inflate & Repair Can','Never be stuck without a pump to inflate your electric bike tires again. With the help of these small cans that quickly inflate a flat tire, you won\'t have to worry about getting home.',15,'https://50rebels.com/cdn/shop/products/Products_Inflate_Repair_can.svg?v=1678891552&width=1800','2024-04-23 16:30:20','2024-04-23 16:30:20'),
(5,'Brake Cleaning Spray','Brake Cleaning Spray',11,'https://50rebels.com/cdn/shop/products/50R-accessories-01012.jpg?v=1672758026&width=1800','2024-04-23 16:31:32','2024-04-23 16:31:32');

/*Table structure for table `configured_bikes` */

DROP TABLE IF EXISTS `configured_bikes`;

CREATE TABLE `configured_bikes` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `frame` varchar(255) NOT NULL,
  `color` varchar(255) NOT NULL,
  `seat` varchar(255) NOT NULL,
  `lights` tinyint(1) DEFAULT NULL,
  `mudguard` tinyint(1) DEFAULT NULL,
  `motor` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() COMMENT 'current_timestamp()',
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

/*Data for the table `configured_bikes` */

insert  into `configured_bikes`(`id`,`frame`,`color`,`seat`,`lights`,`mudguard`,`motor`,`created_at`,`updated_at`) values 
(3,'standart','pink','long',1,0,750,'2024-04-24 16:27:55','2024-04-24 20:00:04'),
(4,'normal','normal','normal',0,1,750,'2024-04-24 16:58:16','2024-04-24 16:58:16'),
(5,'standart','red','normal',0,1,500,'2024-04-24 17:02:30','2024-04-24 17:02:30'),
(6,'special','blue','long',1,1,500,'2024-04-24 17:09:34','2024-04-24 17:09:34'),
(7,'special','blue','long',1,1,500,'2024-04-24 17:33:50','2024-04-24 17:33:50'),
(9,'standart','pink','long',1,0,750,'2024-05-03 13:42:37','2024-05-03 13:42:37'),
(10,'v_series','purple','long',1,0,500,'2024-05-03 14:00:41','2024-05-03 14:00:41'),
(11,'v_series','midnight blue','long',1,0,500,'2024-05-03 15:17:09','2024-05-03 15:17:09'),
(12,'r_series','midnight blue','normal',1,0,500,'2024-05-03 19:27:59','2024-05-03 19:27:59'),
(13,'v_series','','false',0,0,500,'2024-05-06 13:43:01','2024-05-06 13:43:01'),
(14,'v_series','','false',0,0,250,'2024-05-06 13:43:16','2024-05-06 13:43:16'),
(15,'r_series','','true',0,0,500,'2024-05-06 13:44:49','2024-05-06 13:44:49'),
(16,'r_series','','long',0,0,750,'2024-05-06 13:47:58','2024-05-06 13:47:58'),
(17,'r_series','','long',0,0,750,'2024-05-06 13:48:52','2024-05-06 13:48:52'),
(18,'r_series','','long',0,0,500,'2024-05-06 13:53:00','2024-05-06 13:53:00'),
(19,'r_series','','long',1,1,500,'2024-05-06 13:53:17','2024-05-06 13:53:17'),
(20,'r_series','Midnight Blue','long',1,1,500,'2024-05-06 13:54:15','2024-05-06 13:54:15'),
(21,'r_series','Black Matte','long',1,1,500,'2024-05-06 13:54:31','2024-05-06 13:54:31'),
(22,'v_series','Green Glowing','normal',1,0,750,'2024-05-06 13:56:39','2024-05-06 13:56:39'),
(23,'v_series','Green Glowing','normal',1,0,750,'2024-05-06 13:57:15','2024-05-06 13:57:15'),
(25,'v_series','Green Glowing','long',0,0,750,'2024-05-15 11:22:17','2024-05-15 11:22:17'),
(26,'r_series','Green Glowing','long',1,1,750,'2024-05-20 20:30:45','2024-05-20 20:30:45'),
(27,'v_series','Green Glowing','long',1,0,750,'2024-05-29 12:41:34','2024-05-29 12:41:34');

/*Table structure for table `shopping_cart` */

DROP TABLE IF EXISTS `shopping_cart`;

CREATE TABLE `shopping_cart` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `product` varchar(255) NOT NULL,
  `price` decimal(10,0) unsigned DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() COMMENT 'current_timestamp(',
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

/*Data for the table `shopping_cart` */

insert  into `shopping_cart`(`id`,`product`,`price`,`created_at`,`updated_at`) values 
(1,'batata',20,'2024-05-10 11:36:45','2024-05-10 11:36:45'),
(9,'V_Series_Moped_X',2940,'2024-05-10 13:49:15','2024-05-10 13:49:15'),
(15,'r_series_large',2490,'2024-05-11 16:50:25','2024-05-11 16:50:25'),
(17,'r_series_large',0,'2024-05-13 14:14:05','2024-05-13 14:14:05'),
(18,'v_series_moped',0,'2024-05-13 14:32:31','2024-05-13 14:32:31'),
(19,'r_series_large',0,'2024-05-13 19:31:47','2024-05-13 19:31:47'),
(20,'v_series_moped',0,'2024-05-13 20:13:45','2024-05-13 20:13:45');

/*Table structure for table `stock_bikes` */

DROP TABLE IF EXISTS `stock_bikes`;

CREATE TABLE `stock_bikes` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `model` varchar(255) NOT NULL,
  `autonomy` int(11) NOT NULL,
  `motor` int(11) NOT NULL,
  `color` varchar(255) NOT NULL,
  `price` decimal(10,0) unsigned NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() COMMENT 'current_timestamp()',
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

/*Data for the table `stock_bikes` */

insert  into `stock_bikes`(`id`,`model`,`autonomy`,`motor`,`color`,`price`,`image_url`,`created_at`,`updated_at`) values 
(1,'v_series_moped',70,250,'Black Matte',2490,'https://50rebels.com/cdn/shop/files/50rebels-v-series-moped-blackmatte.jpg?v=1703248719&width=1800','2024-04-23 11:01:24','2024-04-23 11:01:24'),
(2,'v_series_moped_x',100,500,'Black Matte',2940,'https://50rebels.com/cdn/shop/files/50rebels-v-series-moped-blackmatte.jpg?v=1703248719&width=1800','2024-04-23 11:03:04','2024-04-29 17:51:40'),
(3,'v_series_moped_x',100,500,'Midnight Blue',2940,'https://50rebels.com/cdn/shop/files/50rebels-v-series-naked-blue.jpg?v=1703248719&width=1800','2024-04-23 11:03:33','2024-04-29 17:52:00'),
(4,'v_series_moped',70,250,'Midnight Blue',2490,'https://50rebels.com/cdn/shop/files/50rebels-v-series-naked-blue.jpg?v=1703248719&width=1800','2024-04-23 11:04:50','2024-04-23 11:06:02'),
(5,'v_series_classic',80,250,'Black Matte',2390,'https://50rebels.com/cdn/shop/files/50rebels-v-series-classic-black.jpg?v=1703248613&width=1800','2024-04-23 11:04:56','2024-04-23 11:07:54'),
(6,'v_series_classic_x',100,500,'Black Matte',2840,'v=1703248613&width=1800','2024-04-23 11:08:37','2024-04-29 17:52:04'),
(7,'v_series_classic_x',100,500,'Purple',2840,'https://50rebels.com/cdn/shop/files/50rebels-v-series-classic-purple2.jpg?v=1703248613&width=1800','2024-04-23 11:09:51','2024-04-29 17:52:09'),
(8,'v_series_classic',80,250,'Purple',2390,'v=1703248613&width=1800','2024-04-23 11:10:52','2024-04-23 11:10:59'),
(9,'v_series_raw',80,250,'Black Matte',1990,'https://50rebels.com/cdn/shop/files/50rebels-v-series-naked-mattblack.jpg?v=1702996371&width=1800','2024-04-23 11:14:32','2024-04-23 11:15:18'),
(10,'v_series_raw_x',100,500,'Black Matte',2440,'v=1702996371&width=1800','2024-04-23 11:15:39','2024-05-13 13:59:50'),
(11,'r_series_large',80,250,'Black Matte',2590,'https://50rebels.com/cdn/shop/files/50rebels-r-series-large-black.jpg?v=1702996628&width=1800','2024-04-23 11:17:40','2024-04-23 11:18:07'),
(12,'r_series_large_x',100,500,'Black Matte',3040,'https://50rebels.com/cdn/shop/files/50rebels-r-series-large-black.jpg?v=1702996628&width=1800','2024-04-23 11:18:19','2024-05-11 12:21:35'),
(13,'r_series_large_x',100,500,'Midnight Blue',3040,'https://50rebels.com/cdn/shop/files/50rebels-r-series-large-blue.jpg?v=1703248406&width=1800','2024-04-23 11:19:23','2024-05-11 12:21:45'),
(14,'r_series_large',80,250,'Midnight Blue',2590,'https://50rebels.com/cdn/shop/files/50rebels-r-series-large-blue.jpg?v=1703248406&width=1800','2024-04-23 11:20:49','2024-04-23 11:21:51'),
(15,'r_series_classic',80,250,'Black Matte',2390,'https://50rebels.com/cdn/shop/files/50rebels-r-series-classic-black.jpg?v=1703248287&width=1800','2024-04-23 11:22:47','2024-04-23 11:23:06'),
(16,'r_series_classic_x',100,500,'Black Matte',2840,'https://50rebels.com/cdn/shop/files/50rebels-r-series-classic-black.jpg?v=1703248287&width=1800','2024-04-23 11:23:31','2024-04-29 17:52:17'),
(17,'r_series_classic_x',100,500,'Midnight Blue',2840,'https://50rebels.com/cdn/shop/files/50rebels-r-series-classic-blue.jpg?v=1703248287&width=1800','2024-04-23 11:24:00','2024-04-29 17:52:20'),
(18,'r_series_classic',80,250,'Midnight Blue',2390,'https://50rebels.com/cdn/shop/files/50rebels-r-series-classic-blue.jpg?v=1703248287&width=1800','2024-04-23 11:24:47','2024-04-23 11:25:31'),
(19,'r_series_raw',80,250,'Black Matte',1990,'https://50rebels.com/cdn/shop/files/50rebels-r-series-naked-mattblack.jpg?v=1711980030&width=1800','2024-04-23 11:26:07','2024-04-23 11:26:31'),
(20,'r_series_raw_x',100,500,'Black Matte',2440,'https://50rebels.com/cdn/shop/files/50rebels-r-series-naked-mattblack.jpg?v=1711980030&width=1800','2024-04-23 11:26:48','2024-04-29 17:52:25'),
(21,'r_series_raw',100,500,'Green Glowing',2440,'https://50rebels.com/cdn/shop/files/50rebels-r-series-naked-green.jpg?v=1711980030&width=1800','2024-04-23 11:28:48','2024-04-23 11:28:48'),
(22,'r_series_raw',80,100,'Green Glowing',1990,'https://50rebels.com/cdn/shop/files/50rebels-r-series-naked-green.jpg?v=1711980030&width=1800','2024-04-23 11:29:04','2024-04-23 11:29:21'),
(23,'v_series_raw',80,250,'purple',1990,'https://50rebels.com/cdn/shop/files/50rebels-v-series-classic-purple2.jpg?v=1703248613&width=1800','2024-05-13 13:59:42','2024-05-13 14:01:08'),
(24,'v_series_raw_x',100,500,'purple',2440,'https://50rebels.com/cdn/shop/products/50rebels-v-series-naked-purple.jpg?v=1702996371&width=1800','2024-05-13 14:01:48','2024-05-15 11:04:33');

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `hashed_password` varchar(255) NOT NULL,
  PRIMARY KEY (`email`),
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

/*Data for the table `users` */

insert  into `users`(`id`,`email`,`hashed_password`) values 
(24,'1010@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$ECVJdxG3VTrPV6oGjcb7tg$JWHGrRoXjbvKmKSFK70Tmu4ec9UyBK1oWKwmOgM7518'),
(25,'1011@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$dQnSkcj0YE0Bb8cCcYgPEw$lu5Iyxmu26qn4Z4loMDvrF7MH5Nn1atPPmR2A0aDjxk'),
(20,'123456@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$VfqXLzJLc9/jelR8f49HQw$JuMgFBCYVoCGcgSb22WATjdN+FvSMJl9sYkN07878Lg'),
(19,'12345@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$1ewv9QGGqcTI044ijNIVUg$tgt/6KyMWAEIoBvvehAta2jAiT4+ChVGGGc+o4UsD1I'),
(17,'1234@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$T58CB587NYg6yqtHF3HUiA$6twwhBSwis+kQ215fP+KDCwnwh6JNRALqnpgbUeqeYQ'),
(16,'1234@mail.com','$argon2id$v=19$m=65536,t=3,p=4$jkYiycqIUZn2JNz3Wt/tAQ$V69gxJnWYD4Gnti5J7krObowqT2XS6kTVyAloF0TipM'),
(14,'123@mail.com','$argon2id$v=19$m=65536,t=3,p=4$7TvdoAhTPvKiywjKoGOryw$egKBir0az78T4wYjkXSJFEzvtVyJKvE3jrJmsOuzDC0'),
(22,'2020@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$RR1OrU5fq3F3wTvAi8CitA$jVCpjh64jRVt6lNtb2FiZ5TAgE04uwD1W7Mfa4ohYDs'),
(10,'maisum@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$ea2dCTkiCVNb74Pomo0omQ$IPFqTQLZwfWLH7r/hIZ8dJqCVlaH7TJ/3N2iwrWdWNs'),
(8,'novo@email.com','$argon2id$v=19$m=65536,t=3,p=4$oS3qDnrf2nbtHijCJy+5eA$FqDVjt5ATIZy+WqzITVWHACBbxqX//8wOeNzu21I9cg'),
(5,'rail.com','$argon2id$v=19$m=65536,t=3,p=4$PickRJX9uqHt33y4FmXRbA$LSKGP/1X1XA2nnX88/+wUmq6IC9hV6JVZzvn4brnkKw'),
(6,'rodrigo@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$FhDOGR5xIc+H8ign0lJNew$ohAyKiBo9cyXEvjIMk5Yv9TDqp6CtwYBlZoVWAbSmmI'),
(7,'roger@email.com','$argon2id$v=19$m=65536,t=3,p=4$RckjPT2n+3pfgX81FSgKuA$pA7jme8YbqbNTf/eBmCM4nEpecuY/GczZwVJKorbm5I'),
(1,'roger@hotmail.com','$argon2id$v=19$m=65536,t=3,p=4$oYCDb0b0385+RlhLOsTjEA$dY/mCBu52hg5cJohjLesbeCiIsCF9XL+MdK+5cG4i2U'),
(26,'teste@email.com','$argon2id$v=19$m=65536,t=3,p=4$u6PeXHoUlfkw+6ccy2ukvQ$b0jsSlDEB6gNcOCNcchOcwYYhBCPn1OXGW+lwsytFWE'),
(3,'ze@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$JxfjbCMsQ50SpyKHoNbjwg$eecey/ZKPqgZvT31OeVF0h08X2os2HxQF732VVwad5k');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
