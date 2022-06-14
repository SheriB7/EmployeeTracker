require("dotenv").config()
const inquirer = require("inquirer");
// Import and require mysql2
const mysql = require('mysql2');
const util = require("util")
// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',

    user: process.env.USER,

    password: process.env.PASSWORD,
    database: process.env.DATABASE
  },
  console.log(`Connected to the departments_db database.`)
);
const query = util.promisify(db.query).bind(db)

// Create welcome page
const figlet = require('figlet');

figlet('Employee Manager!', function (err, data) {
  if (err) {
    console.log('Something went wrong...');
    console.dir(err);
    return;
  }
  console.log(data)
});


//view rolls
const viewAllRoles = async () => {
  try {
    const response = await query('select * FROM role;')
    console.table(response)
  } catch (error) {
    console.error(error)
  }
}
// viewAllRoles()

//view employees
const viewAllEmployees = async () => {
  try {
    const response = await query('select * FROM employee;')
    console.table(response)
  } catch (error) {
    console.error(error)
  }
}
// viewAllEmployees()

//view departments
// viewAllDepartments()

//first action

const promptStart = async () => {
  const data = await inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        name: "choices",
        choices: [
          "View ALL Departments",
          "View All Roles?",
          "View All Employees?",
          "View All Employees By Manager",
          "Add an Employee?",
          "Add a Role",
          "Add a Department?",
          "Update Employee"
        ]
      }
    ])
  //     //using the value and
  //     .then((value) => {
  //       console.log(value)
  // })

  // promptStart()




  // .then((data) => {
  const { choices } = data;
  if (choices === "View all departments") {
    showDepartments();
  }
  if (choices === "View all roles") {
    showRoles();
  }
  if (choices === "View all employees") {
    showEmployes();
  }
  if (choices === "Add a department") {
    showDepartment();
  }
  if (choices === "Add a role") {
    showRole();
  }
  if (choices === "Add an employee") {
    showEmployee();
  }
  if (choices === "Update an employee role") {
    updateEmployee();
  }
  if (choices === "Update an employee managers") {
    updateManager();
  }
  if (choices === "View employees by manager") {
    employeeDepartment();
  }
  if (choices === "Delete a department") {
    deleteDepartment();
  }
  if (choices === "Delete a role") {
    deleteRole();
  }
  if (choices === "Delete an employee") {
    deleteEmployee();
  }
  if (choices === "View department budgets") {
    viewBudget();
  }
  if (choices === "No Action") {
    connection.end()
  };
  //});
}
showDepartments = () => {
  console.log('Showing all departments...\n');
  const sql = `SELECT department.id AS id, department.name AS department FROM department`;

  connection.promise().query(sql, (err, rows) => {
    if (err) throw err;
    console.table(rows);
    promptStart();
  });
};
// promptStart()

const showDepartments = async () => {
  try {
    const sql = `SELECT department.id AS id, department.name AS department FROM department`;
    const response = await query('sql;')
    console.table(response)
  } catch (error) {
    console.error(error)
  }
}

//Show all Roles
showRoles = () => {
  console.log("Showing all roles...\n");

  const sql = "Select role.id, role.title, department_name AS department FROM role INNER JOIN department ON role.department_id = deparment.id";

  connection.promise().query(sql, (err, rows) => {
    if (err) throw err;
    console.table(rows);
    promptStart();
  })
};

// Show all Employees
showEmployees = () => {
  console.log('Showing all employees...\n');
  const sql = `SELECT employee.id, 
                      employee.first_name, 
                      employee.last_name, 
                      role.title, 
                      department.name AS department,
                      role.salary, 
                      CONCAT (manager.first_name, " ", manager.last_name) AS manager
                      FROM employee
                      LEFT JOIN role ON employee.role_id = role.id
                      LEFT JOIN department ON role.department_id = department.id
                      LEFT JOIN employee manager ON employee.manager_id = manager.id`;

  connection.promise().query(sql, (err, rows) => {
    if (err) throw err;
    console.table(rows);
    promptUser();
  });
};


// add Department







