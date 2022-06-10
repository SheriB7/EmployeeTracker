department
  id:INT PRIMARY KEY
  --to hold department name
  name: VARCHAR(30)

role
  id: INT PRIMARY KEY
  --TO HOLD ROLE TITLE
  title:VARCHAR(30)
  --TO HOLD ROLE SALARY
  salary:DECIMAL
  --TO HOLD REFERENCE TO DEPARTMENT ROLE BELONGINGS TO
  department_id:INT

employee
  id:INT PRIMARY KEY
  --TO HOLD EMPLOYEES FIRST NAME
  first_name:VARCHAR(30)
  --TO HOLD EMPLOYEES LAST NAME
  last_name:VARCHAR(30)
  --TO HOLD REFERNCE TO EMPLOYEE ROLE
  role_id:INT
  --TO HOLD REFERENCE TO ANOTHER EMPLOYEE THAT IS THE MANAGER OF THE CURRENT EMPLOYEE(NULL IF EMPLOYEE HAS NO MANAGER)














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