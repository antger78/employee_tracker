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
            {name: 'View all employees', 
            value: 'view_employees'},
            // add in every function a user can do
            // {}
            ]
          },
      ])
    };

questions()
.then(answer =>{
    console.log('I am here');
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
default:}
        })