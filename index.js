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
            {name:'Add a department', value:'add_department'}
            ]
          },
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
            // console.log('I am in view departments');   
            db.query(
            'SELECT * FROM role;',(err,row) =>{
                if (err){
                    console.log('ERROR')
                };
        console.table(row)});
        break;
        default:}
        })