USE employees_db;

INSERT INTO department (name)
VALUES  
    ("Engineer"),
    ("Sales"),
    ("Finance"),
    ("Human Resources"),
    ("Legal"),
    ("Information Technology");


INSERT INTO role (title, salary, department_id)
VALUES 
    ("Accountant", 65000, 3),
    ("Legal Team", 85000, 5),
    ("Lawyer", 120000, 5),
    ("Sales Lead", 55000, 2),
    ("Salesperson", 40000, 2),
    ("Lead Engineer", 110000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("Megan", "Brown", 4, NULL),
("Sara", "Cox", 6, NULL),
("Sam", "Cash", 3, NULL),
("Jon", "Doe", 2, 3),
("Mike", "Warne", 5, 1),
("Ashley", "Saxon", 1, NULL);
