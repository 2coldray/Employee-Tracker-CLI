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
CREATE TABLE role (
    id int not null auto_increment,
    title VARCHAR(30),
    salary DECIMAL,
    department_id int,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id) REFERENCES department(id)
);

-- create manager table
CREATE TABLE manager (
    id int not null auto_increment,
    manager_title VARCHAR(30), 
    PRIMARY KEY (id)
);


-- make employee table 
CREATE TABLE employee (
    id int not null auto_increment,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id int,
    manager_id int null,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id) REFERENCES role(id),
    FOREIGN KEY (manager_id) REFERENCES manager(id),
);

-- test queries
