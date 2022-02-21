console.log('hello node');
const inquirer = require('inquirer');
const db = require('./db/connection');

const questions = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'whatToDo',
            message: 'What would you like to do?',
            choices: [
            {name: 'View all employees', value: 'view_employees'},
            {name: 'View all departments', value: 'view_departments'},
            {name: 'View all roles', value: 'view_roles'},
            {name: 'Add an employee', value: 'add_employee'},
            {name:'Add a role', value:'add_role'},
            {name:'Add a department', value:'add_department'},
            {name:'Update an employee role', value: 'update_employee_role'}
            ]
        },
        {
            type: 'input',
            name: 'employeeFirstName',
            message: 'What is the first name of the new employee?',
            when: ({whatToDo}) =>{
                if(whatToDo === 'add_employee'){
                return true;
                } else {
                return false;
                }
            }

        },
        {
            type: 'input',
            name: 'employeeLastName',
            message: 'What is the last name of the new employee?',
            when: ({whatToDo}) =>{
                if(whatToDo === 'add_employee'){
                return true;
                } else {
                return false;
                }
            }

        },
        {
            type: 'input',
            name: 'employeeRoleId',
            message: 'What is the role ID of the new employee?',
            when: ({whatToDo}) =>{
                if(whatToDo === 'add_employee'){
                return true;
                } else {
                return false;
                }
            }

        },
        {
            type: 'input',
            name: 'employeeMangerId',
            message: 'What is the Manager ID of the new employee?',
            when: ({whatToDo}) =>{
                if(whatToDo === 'add_employee'){
                return true;
                } else {
                return false;
                }
            }

        },
        {
            type: 'input',
            name: 'roleTitle',
            message: 'What is the new role title?',
            when: ({whatToDo}) =>{
                if(whatToDo === 'add_role'){
                return true;
                } else {
                return false;
                }
            }

        },
        {
            type: 'input',
            name: 'roleSalary',
            message: 'What is the new role salary (upto 7 dollar figures and 2 cent figures)?',
            when: ({whatToDo}) =>{
                if(whatToDo === 'add_role'){
                return true;
                } else {
                return false;
                }
            }

        },
        {
            type: 'input',
            name: 'roleDepartmentId',
            message: 'What is the new role department ID?',
            when: ({whatToDo}) =>{
                if(whatToDo === 'add_role'){
                return true;
                } else {
                return false;
                }
            }

        },
        {
            type: 'input',
            name: 'departmentName',
            message: 'What is the new department name?',
            when: ({whatToDo}) =>{
                if(whatToDo === 'add_department'){
                return true;
                } else {
                return false;
                }
            }

        },
        {
            type: 'input',
            name: 'updateEmployeeRoleEmployeeId',
            message: 'What is the ID of the employee you wish to change the role of?',
            when: ({whatToDo}) =>{
                if(whatToDo === 'update_employee_role'){
                return true;
                } else {
                return false;
                }
            }

        },
        {
            type: 'input',
            name: 'updateEmployeeRoleId',
            message: 'What is the new role ID of the employee?',
            when: ({whatToDo}) =>{
                if(whatToDo === 'update_employee_role'){
                return true;
                } else {
                return false;
                }
            }

        }
      ])
    };

questions()
.then(answer =>{
    // console.log('I am here');
    switch (answer.whatToDo){
        case 'view_employees':
            console.log('I am in view employee');   
            db.query(
            'SELECT * FROM employee;',(err,row) =>{
            if (err){
                console.log('ERROR')
            };
        console.table(row)});
        break;    
        case 'view_departments':
            console.log('I am in view departments');   
            db.query(
            'SELECT * FROM department;',(err,row) =>{
                if (err){
                    console.log('ERROR')
                };
        console.table(row)});
        break;
        case 'view_roles':
            // console.log('I am in view departments');   
            db.query(
            'SELECT * FROM role;',(err,row) =>{
                if (err){
                    console.log('ERROR')
                };
        console.table(row)});
        break;
        case 'add_employee':
            const newEmployeeAnswersArray = [answer.employeeFirstName, answer.employeeLastName, answer.employeeRoleId, answer.employeeMangerId ];
            console.log(newEmployeeAnswersArray);
            db.query(
            'INSERT INTO `employee`(first_name,last_name,role_id,manager_id) VALUES (?,?,?,?);', newEmployeeAnswersArray ,(err,row) =>{
                if (err){
                    console.log('ERROR')
                };
        console.table(row)});
        break;
        case 'add_role':
            const newRoleAnswersArray = [answer.roleTitle, answer.roleSalary, answer.roleDepartmentId ];
            console.log(newRoleAnswersArray);
            db.query(
            'INSERT INTO `role`(title, salary, department_id) VALUES (?,?,?);', newRoleAnswersArray ,(err,row) =>{
                if (err){
                    console.log('ERROR')
                };
        console.table(row)});
        break;
        case 'add_department':
            const newDepartmentAnswersArray = [answer.departmentName];
            console.log(newDepartmentAnswersArray);
            db.query(
            'INSERT INTO `department`(name) VALUES (?);', newDepartmentAnswersArray ,(err,row) =>{
                if (err){
                    console.log('ERROR')
                };
        console.table(row)});
        break;
        case 'update_employee_role':
            const updatedEmployeeRoleAnswersArray = [answer.updateEmployeeRoleId, answer.updateEmployeeRoleEmployeeId ];
            // console.log(updatedEmployeeRoleAnswersArray);
            db.query(
            'UPDATE employee set role_id = ? WHERE id= ?;', updatedEmployeeRoleAnswersArray ,(err,row) =>{
                if (err){
                    console.log('ERROR')
                };
        console.table(row)});
        default:}
        })