-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 30, 2022 at 04:32 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ticketbooking`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `username` varchar(10) DEFAULT NULL,
  `password` varchar(12) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`username`, `password`) VALUES
('admin', '12345');

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE `bookings` (
  `username` varchar(15) DEFAULT NULL,
  `movie` varchar(20) DEFAULT NULL,
  `theatre` varchar(20) DEFAULT NULL,
  `seats` int(11) DEFAULT NULL,
  `book_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bookings`
--

INSERT INTO `bookings` (`username`, `movie`, `theatre`, `seats`, `book_date`) VALUES
('Rushi', 'ddlj', '2', 5, '0000-00-00 00:00:00'),
('Rushi', 'ddlj', '2', 5, '2022-12-30 18:30:00'),
('Rushi', 'ddlj', '2', 5, '2022-12-30 18:30:00'),
('Rushi', 'ddlj', '2', 4, '2022-12-30 18:30:00'),
('Rushi', 'ddlj', '2', 5, '2022-12-30 18:30:00'),
('Rushi', 'ddlj', '2', 1, '2022-12-30 18:30:00'),
('Rushi', 'ddlj', '2', 5, '2022-12-30 18:30:00'),
('Rushi', 'ddlj', '2', 5, '2022-12-30 18:30:00'),
('Rushi', 'ddlj', '2', 5, '2022-12-30 18:30:00'),
('Rushi', 'ddlj', '2', 55, '2022-12-30 18:30:00'),
('Rushi', 'ddlj', '2', 5, '2022-12-30 18:30:00');

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `name` varchar(20) DEFAULT NULL,
  `th_id` int(11) DEFAULT NULL,
  `slots` int(11) DEFAULT NULL,
  `movie_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`name`, `th_id`, `slots`, `movie_date`) VALUES
('ddlj', 2, 0, '2022-12-31 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `theatres`
--

CREATE TABLE `theatres` (
  `id` int(11) NOT NULL,
  `name` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `theatres`
--

INSERT INTO `theatres` (`id`, `name`) VALUES
(2, 'xyz'),
(3, 'abc');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `username` varchar(10) DEFAULT NULL,
  `password` varchar(12) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`username`, `password`) VALUES
('Rushi', '123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `theatres`
--
ALTER TABLE `theatres`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `theatres`
--
ALTER TABLE `theatres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
