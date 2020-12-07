CREATE DATABASE bigBusiness;
USE bigBusiness;

CREATE TABLE department (
    id INT NOT NULL,
    departmentName VARCHAR(25) NOT NULL
    PRIMARY KEY (id)
);
CREATE TABLE jobFunction (
    id INT NOT NULL,
    posTitle VARCHAR(25) NOT NULL,
    salary DECIMAL(10,5) NOT NULL,
    departmentID INT NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE employee (
    id INT NOT NULL,
    firstName VARCHAR(20) NOT NULL,
    lastName VARCHAR(20) NOT NULL,
    posID INT NOT NULL,
    managerID INT
)