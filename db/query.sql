SELECT *
FROM department_names;

SELECT  AS 
FROM department_names
GROUP BY department;

SELECT role, 
FROM department_names
GROUP BY department;

SELECT
   AS name,  AS 
FROM 
JOIN department ON department_names.department = department.id;