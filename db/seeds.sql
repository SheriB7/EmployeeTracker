USE employees_db;

INSERT INTO departments (department_name)
VALUES  
    ("Engineer"),
    ("Sales"),
    ("Finance"),
    ("Human Resources")
    ("Legal");
    ("Information Technology"),


INSERT INTO role (title, salary, department_id,)
VALUES 
    ("Accountant", 65000, 1),
    ("Legal Team", 85000, 2),
    ("Lawyer", 120000, 3),
    ("Sales Lead", 55000, 4),
    ("Salesperson", 40000, 5),
    ("Lead Engineer", 110000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("Megan Brown"),
("Sara Cox"),
("Sam Cash"),
("Jon Doe"),
("Mike Warne"),
("Ashley Saxon");
