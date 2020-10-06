-- insert data into department
insert into department (name)
VALUES ("Software"), ("Finance"), ("Marketing");

-- insert data into roles
insert into roles (title, salary)
VALUES 
    ("Manager", 180000), 
    ("Lead Engineer", 120000), 
    ("Junior Engineer", 90000), 
    ("UI Designer", 85000),
    ("Intern", 20000);

-- insert data into manager 
insert into manager (manager_title)
VALUES ("Manager");

-- insert data into employee 
insert into employee (first_name, last_name)
VALUES 
    ("Patrick", "Mahomes"),
    ("Tyreek Hill"),
    ("Travis Kelce"),
    ("Tyrann Mathieu"),
    ("Mecole Hardman");