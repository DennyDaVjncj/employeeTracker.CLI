DROP DATABASE IF EXISTS daVjncjCorp_data
CREATE DATABASE daVjncjCorp_data;
USE daVjncjCorp_data;

CREATE TABLE department (
    id INT AUTO_INCREMENT NOT NULL,
    departmentName VARCHAR(25) NOT NULL
    PRIMARY KEY (id)
);
CREATE TABLE jobFunction (
    id INT AUTO_INCREMENT NOT NULL,
    posTitle VARCHAR(25),
    salary DECIMAL(10,5),
    departmentID INT,
    PRIMARY KEY (id)
);
CREATE TABLE employee (
    id INT AUTO_INCREMENT NOT NULL,
    firstName VARCHAR(20) NOT NULL,
    lastName VARCHAR(20) NOT NULL,
    posID INT NOT NULL,
    managerID INT,
    primary key (id)
);