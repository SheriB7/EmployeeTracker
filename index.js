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
const viewAllRoles = async() => {
  try {
   const response = await query("select * FROM role;") 
   console.table(response)
  } catch (error) {
    console.error(error)    
  }
}
viewAllRoles()