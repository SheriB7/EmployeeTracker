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
viewAllRoles()

//view employees
const viewAllEmployees = async () => {
  try {
    const response = await query('select * FROM employee;')
    console.table(response)
  } catch (error) {
    console.error(error)
  }
}
viewAllEmployees()

//view departments
const viewAllDepartments = async () => {
  try {
    const response = await query('select * FROM employee;')
    console.table(response)
  } catch (error) {
    console.error(error)
  }
}
viewAllDepartments()

//first action

function promptStart() {
  inquirer
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




    .then((answers) => {
      const { choices } = answers;
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
    });
}
showDepartments = () => {
  console.log('Showing all departments...\n');
  const sql = `SELECT department_id AS id, department_name AS department FROM department`;

  connection.promise().query(sql, (err, rows) => {
    if (err) throw err;
    console.table(rows);
    // promptStart();
  });
};
promptStart()


//Roles
showRoles = () => {
  console.log("Showing all roles...\n");

  const sql = "Select role_id, role_title, department_name AS department FROM role INNER JOIN department ON role.department_id = deparment.id";

  connection.promise().query(sql, (err, rows) => {
    if (err) throw err;
    console.table(rows);
    promptStart();
  })
};



