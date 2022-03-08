CREATE DATABASE company;
USE company;


CREATE TABLE employees
(
          id int(11) PRIMARY KEY AUTO_INCREMENT,
          name varchar(30) NOT NULL,
          date date DEFAULT NULL
)
ENGINE=InnoDB DEFAULT CHARSET=utf8;