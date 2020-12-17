-- all I need to do is create a seed table
USE daVjncjCorp_data;

INSERT INTO department (deptName)
VALUES ("human resources");

INSERT INTO role (title, salary)
VALUES ("personal assistant", 75000);

INSERT INTO employee (firstName, lastName, roleID)
VALUES ("Light", "Yagami", 1);