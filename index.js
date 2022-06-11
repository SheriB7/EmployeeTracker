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

function Launch() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        name: "choices",
        choices: [
          "View All Employees?",
          "View All Employee's By Role?",
          "View All Employees By Departments",
          "Update Employee",
          "Add Employee?",
          "Add Role",
          "Add Department?"
        ]
      }
    ])
//     //using the value and
//     .then((value) => {
//       console.log(value)
// })

// Launch()

.then((answers) => {
  const {choices} = answers;
  if(choices === "View all departments") {
    showDepartments();
  }
  if(choices === "View all roles") {
    showRoles();
  }
  if(choices === "View all employes") {
    showEmployes();
  }
  if(choices === "Add a department") {
    showDepartment();
  }
  if(choices === "Add a role") {
    showRoll();
  }
  if(choices === "Add a employee") {
    showEmployee();
  }
  if (choices === "Update an employee role") {
    updateEmployee();
  }
  if (choices === "Update an employee manager") {
    updateManager();
  }
  if (choices === "View employees by department") {
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




    // {
    //     type: 'input',
    //     message: 'What is your first name?',
    //     name: 'first',
    //   },
    //   {
    //     type: 'input',
    //     message: 'What is your last name?',
    //     name: 'last',
    //   },

    // ])


