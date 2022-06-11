DROP DATABASE if EXISTS employees_db;
CREATE DATABASE employees_db;
USE employees_db;

CREATE TABLE department(
  id INT PRIMARY KEY AUTO_INCREMENT,  
  name VARCHAR(30)
);

CREATE TABLE role (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(30), 
  salary DECIMAL,
    department_id INT,
  FOREIGN KEY (department_id)
  REFERENCES department(id)
  );

CREATE TABLE employee (
  id INT PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manager_id INT,
  FOREIGN KEY (role_id)
  REFERENCES role(id),
  FOREIGN KEY (manager_id)
  REFERENCES employee(id)
);














-- DROP DATABASE IF EXISTS departments_db;
-- CREATE DATABASE departments_db;

-- USE departments_db;

-- CREATE TABLE departments (
--   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   department_name VARCHAR(30) NOT NULL
-- );

-- CREATE TABLE reviews (
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     department_id INT,
--     review TEXT NOT NULL,
--     FOREIGN KEY (department_id)
--     REFERENCES departments(id)
--     ON DELETE SET NULL
-- );