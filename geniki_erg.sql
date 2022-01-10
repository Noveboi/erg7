-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 10, 2022 at 06:04 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `geniki_erg`
--

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `reviewid` int(11) NOT NULL,
  `disc_name` varchar(63) DEFAULT NULL,
  `reldate` date DEFAULT NULL,
  `uname` varchar(63) DEFAULT NULL,
  `reviewtext` text DEFAULT NULL,
  `rating` tinyint(4) UNSIGNED DEFAULT NULL,
  `birthyear` smallint(5) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`reviewid`, `disc_name`, `reldate`, `uname`, `reviewtext`, `rating`, `birthyear`) VALUES
(1, 'Bopz Vol. 2', '2021-01-06', 'lmaoxd', 'Bopz is very cool I really like it!', 4, 2005),
(2, 'Bopz Vol. 2', '2021-01-06', 'noveboi', 'Bopz is very cool I really like it!', 4, 2003),
(3, 'Bopz', '2022-01-05', 'helloman', 'cool cool', 5, 1999),
(4, 'Bopz', '2022-01-05', 'helloman', 'cool cool', 5, 1999),
(5, 'bopz vol.1', '2022-01-28', 'wazzup', 'it ok but not great -ign', 2, 2003),
(6, 'bopz vol.4', '2022-01-29', 'hellyeah', 'ufwfuwef', 3, 2003),
(7, 'Vol. 3: Bottom of the Barrel', '0000-00-00', 'novepro', 'Haven\'t listened to it lol', 4, 2003),
(8, 'Vol. 3: Bottom of the Barrel', '2021-10-15', 'not_nove', 'Uhh ok', 5, 2005);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`reviewid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `reviewid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
