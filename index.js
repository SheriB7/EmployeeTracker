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
          // "View All Employees By Manager",
          // "Add an Employee?",
          "Add a Role",
          "Add a department",
          // "Update Employee",
          "No Action"
        ]
      }
    ])


  const { choices } = data;
  // console.log(choices)
  if (choices === "View ALL Departments") {
    // console.log(choices)
    return showDepartments();
  }
  if (choices === "View All Roles?") {
    return showRoles();
  }
  if (choices === "View All Employees?") {
    return showEmployees();
  }
  if (choices === "Add a department") {
    return addDepartment();
  }
  if (choices === "Add a Role") {
    return addRole();
  }
  if (choices === "Add an Employee?") {
    return addEmployee();
  }
  if (choices === "Update Employee") {
    return updateEmployee();
  }
  if (choices === "Update an employee managers") {
    return updateManager();
  }
  if (choices === "View employees by manager") {
    return employeeDepartment();
  }
  if (choices === "Delete a department") {
    return deleteDepartment();
  }
  if (choices === "Delete a role") {
    return deleteRole();
  }
  if (choices === "Delete an employee") {
    return deleteEmployee();
  }
  if (choices === "View department budgets") {
    return viewBudget();
  }
  if (choices === "No Action") {
    return db.end()
  };
  //});
}
// showDepartments = () => {
//   console.log('Showing all departments...\n');
//   const sql = `SELECT department.id AS id, department.name AS department FROM department`;

//   connection.promise().query(sql, (err, rows) => {
//     if (err) throw err;
//     console.table(rows);
//     promptStart();
//   });
// };
// promptStart()

const showDepartments = async () => {
  try {
    const sql = `SELECT department.id AS id, department.name AS department FROM department`;
    const response = await query(sql)
    console.table(response)
    promptStart()
  } catch (error) {
    console.error(error)
  }
}

//Show all Roles
const showRoles = async () => {
  console.log("Showing all roles...\n");

  const sql = "Select role.id, role.title, department.name AS department FROM role INNER JOIN department ON role.department_id = department.id";

  const response = await query(sql)
  console.table(response)
  promptStart()
};

// Show all Employees
const showEmployees = async () => {
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

  const response = await query(sql)
  console.table(response)
  promptStart()
};


// add Department


const addDepartment = async () => {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "addDept",
      message: "What department name?",
      // validate: addDept => {
      //   if (addDept) {
      //     return true;
      //   } else {
      //     console.log("Enter a department");
      //     return false;
      //   }
      // }
    }
  ])
  const sql = "INSERT INTO department (name) VALUES (?)"
  await query(sql, answers.addDept)
  showDepartments()
}

// add Role
const addRole = async () => {
  const sql1 = `SELECT department.id AS value, department.name AS name FROM department`;
    const choices = await query(sql1)
    //console.log(response)
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Role name"
    },
    {
      type: "input",
      name: "salary",
      message: "Enter salary"
    },
    {
      type: "list",
      name: "department_id",
      message: "Which department will this role be assigned to?",
      choices: choices
    },

  ])
  // console.log(answers)
  const sql2 = "INSERT INTO role (title, salary, department_id) VALUES(?,?,?)"
  await query(sql2, [answers.title, answers.salary, answers.department_id])
  showRoles()
}

promptStart()





