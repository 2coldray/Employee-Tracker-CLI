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