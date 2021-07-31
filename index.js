const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');

const memberArray = [];


const addManager =  () => {
    return inquirer
        .prompt([{
            type: 'input',
            name: 'name',
            message: 'What is the team manager name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the team manager id?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the manager email?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the manager office number?'
        },
        ])
        .then((managerProfile) => {
    const {
        name, id, email, officeNumer,
    } = managerProfile;
    const manager = new Manager(name, id, email, officeNumer);
    memberArray.push(manager);
});
};

const addEmployee =  () => {
    return  inquirer
        .prompt([{
            type: 'list',
            message: 'Choose employee role?',
            choices: [
                'Intern',
                'Engineer'
            ],
            name: 'role',
        },
        {
            type:'input',
            name:'name',
            message:'What is this team members name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the team members id?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the team members email?'
        },
        {
            when: (data) => data.role === 'Engineer',
            type:'input',
            name:'github',
            message:'What is this engineers github?',
            },
        {
            when: (data) => data.role === 'Intern',
            type: 'input',
            name: 'school',
            message: 'What school does the intern attend?'
        },
        ])
        

};

addManager()
.then(addEmployee)
