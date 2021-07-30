const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const { choices } = require('yargs');
const teamArray = []



inquirer 
  .prompt([ {
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
  {
      type: 'list',
      name: 'role',
      message: 'Select a team member role you would you like to add.',
      choices: [
          'Engineer',
          'Intern'
      ]


  } 
  ])
  
  

  .then((answers) => {
      console.log(`${answers.name} works in office ${answers.officeNumber}`);
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
  