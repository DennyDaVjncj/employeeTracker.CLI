DROP DATABASE IF EXISTS daVjncjCorp_data,
CREATE DATABASE daVjncjCorp_data;
USE daVjncjCorp_data;

CREATE TABLE department (
    id INT AUTO_INCREMENT NOT NULL,
    deptName VARCHAR(25) NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE role (
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(25),
    salary DECIMAL(10,5),
    departmentID INT,
    PRIMARY KEY (id)
);
CREATE TABLE employee (
    id INT AUTO_INCREMENT NOT NULL,
    firstName VARCHAR(30) NOT NULL,
    lastName VARCHAR(30) NOT NULL,
    roleID INT NOT NULL,
    managerID INT, --needs further consideration
    primary key (id)
);