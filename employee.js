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
            choices: ["View All Employees", "View All Departments", "View All Roles", "Add a Department", "Add a Role", "Add an Employee", "Update Employee", "Exit"]
        }
    ]).then(({answer}) => {
        if (answer === "View All Employees") {
            viewAllEmployees();
        } else if (answer === "View All Departments") {
            viewAllDepartments();
        } else if (answer === "View All Roles") {
            viewAllRoles();
        } else if (answer === "Add a Department") {
            addDepartment();
        } else if (answer === "Add a Role") {
            addRole();
        } else if (answer === "Add an Employee") {
            addEmployee();
        } else if (answer === "Update Employee") {
            updateEmployee()
        } else if (answer === "Exit") {
            connection.end();
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

//Add department
function addDepartment() {
    inquirer.prompt([
        {
            name: "department",
            type: "input",
            message: "What's the name of the department you want to add?",        
        }
    ]).then(({department}) => {
        connection.query(
            "insert into department set ?", 
            {
                name: department
            }, 
            (err) => {
                if (err) throw err;
                console.log("added department")
            }
        )
    })
}

//Add a role
function addRole() {
    inquirer.prompt([
        {
            name: "title",
            message: "What's the title of the role?",
            type: "input"
        },
        {
            name: "salary",
            message: "What's the salary?",
            type: "input"
        },
        {
            name: "department_id",
            message: "What's the id of the department?",
            type: "input"
        },
    ]).then(({title, salary, department_id}) => {
        connection.query(
            "insert into roles set ?",
            {
                title: title,
                salary: salary,
                department_id: department_id
            },
            (err) => {
                if (err) throw err;
                console.log("added new role")
            })
    })
}

//Add an employee
function addEmployee() {
    inquirer.prompt([
        {
            name: "firstName",
            message: "What's your first name?",
            type: "input"
        },
        {
            name: "lastName",
            message: "What's your last name?",
            type: "input"
        },
        {
            name: "role_id",
            message: "What's your role id?",
            type: "input"
        },
        {
            name: "manager",
            message: "Who's your manager?",
            type: "input"
        },
    ]).then(({firstName, lastName, role_id, manager}) => {
        connection.query(
            "insert into employee set ?",
            {
                first_name: firstName,
                last_name: lastName,
                role_id: role_id,
                manager: manager
            },
            (err) => {
                if (err) throw err;
                console.log("successfully")
            }
        )
    })
}

//Update Employee
function updateEmployee() {
    inquirer.prompt([
        {
            name: "role_id",
            message: "What's the role_id of the employee you want to update?",
            type: "input"
        },
        {
            name: "id",
            message: "What's their employee id?",
            type: "input"
        }
    ]).then(({role_id, id}) => {
        connection.query(
            "update employee set ? where ?",
            {
                role_id: role_id,
                id: id
            }, 
            (err) => {
                if (err) throw err;
                console.log("updated employee")
            }
        )
    })
}
