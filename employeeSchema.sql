-- make database 
DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

-- make department table 
CREATE TABLE department (
    id int not null auto_increment,
    name VARCHAR(30),
    PRIMARY KEY (id)
);

-- make role table 
CREATE TABLE roles (
    id int not null auto_increment,
    title VARCHAR(30),
    salary DECIMAL,
    department_id int,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id) REFERENCES department(id)
);

-- make employee table 
-- add manager manually for this
CREATE TABLE employee (
    id int not null auto_increment,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id int,
    manager VARCHAR(30) null,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id) REFERENCES roles(id)
);

-- test queries
SELECT * from department;

SELECT * from roles;

SELECT * from manager;

SELECT * from employee;
