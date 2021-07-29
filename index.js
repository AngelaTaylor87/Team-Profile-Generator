const inquirer = require('inquirer');
const { choices } = require('yargs');
inquirer 
  .prompt([ {
    type: 'input',
    name: 'name',
    message: 'What is the name of the manager?'
  },
  {
      type: 'input',
      name: 'id',
      message: 'What is the managers id?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is the managers email?'
  },
  {
    type: 'input',
    name: 'officeNumber',
    message: 'What is the managers office number?'
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