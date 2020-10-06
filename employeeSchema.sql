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
    PRIMARY KEY (id)
);

-- make employee table 


-- test queries
