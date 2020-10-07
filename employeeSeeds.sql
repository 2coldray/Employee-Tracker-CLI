-- insert data into department
insert into department (name)
VALUES ("Software"), ("Finance"), ("Marketing"), ("Human Resources"), ("Analytics");

-- insert data into roles
insert into roles (title, salary, department_id)
VALUES 
    ("Manager", 180000, 1), 
    ("Lead Engineer", 120000, 2), 
    ("Junior Engineer", 90000, 3), 
    ("UI Designer", 85000, 4),
    ("Intern", 20000, 5);


-- insert data into employee 
insert into employee (first_name, last_name, role_id, manager)
VALUES 
    ("Patrick", "Mahomes", 1, "Andy Reid"),
    ("Tyreek", "Hill", 2, "John Harbaugh"),
    ("Travis", "Kelce", 3, "Dan Quinn"),
    ("Tyrann", "Mathieu", 4, "Bill Belicheck"),
    ("Mecole", "Hardman", 5, "Adam Gase");

-- View all employee's query
select employee.first_name, employee.last_name, employee.manager, roles.title, roles.salary, department.name
from roles
inner join employee on employee.role_id = roles.id
inner join department on roles.department_id = department.id;

-- View All Departmnets Query
select * from department;

-- View All Roles Query
select * from roles;

-- Add a department query
insert into department (name)
values ();

-- Add a role query
insert into roles (title, salary, department_id)
values ();

-- Add an employee query
insert into employee (first_name, last_name, role_id, manager)
values ();

-- Update an employee query
update employee
set role_id = 2
where id = 1;