//Dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");

//Connection
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "GTfulltime24",
    database: "employee_db"
});

//Connect
connection.connect((err) => {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    init()
})

//Init Function
function init() {
    inquirer.prompt([
        {
            name: "answer",
            message: "How would you like to begin?",
            type: "list",
            choices: ["View All Employees", "View All Departments", "View All Roles", "Add a Department", "Add a Role", "Add an Employee", "Update Employee"]
        }
    ]).then(({answer}) => {
        if (answer === "View All Employees") {
            viewAllEmployees();
        } else if (answer === "View All Departments") {
            viewAllDepartments()
        } else if (answer === "View All Roles") {
            viewAllRoles()
        }
    })
}

//View all Employees
function viewAllEmployees() {
    connection.query(
        `select employee.first_name, employee.last_name, employee.manager, roles.title, roles.salary, department.name
        from roles
        inner join employee on employee.role_id = roles.id
        inner join department on roles.department_id = department.id`, (err, res) => {
            if (err) throw err;
            console.table(res);
        })
}

//View All Departments
function viewAllDepartments() {
    connection.query(
        `select * from department`, (err, res) => {
            if (err) throw err;
            console.table(res)
        })
}

//View All Roles
function viewAllRoles() {
    connection.query(
        `select * from roles;`, (err, res) => {
            if (err) throw err;
            console.table(res)
        })
}