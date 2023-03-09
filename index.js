const inquirer = require('inquirer');
//require node: 
const fs = require('fs');
const generateHTML = require('./Src/generateHTML');

const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

const roleArray = ["Engineer", "Intern","Manager"];
const newEmployeeData = [];


const questions = async() => {
  const answers = await inquirer
.prompt([
{
    type: 'input',
    name: 'name',
    message: 'What is your name?',
},
{
  type: 'list',
  name: 'role',
  message: 'What is your job title?',
  choices: roleArray, 
},
    {
      type: 'input',
      name: 'id',
      message: 'What is your id?',
    },
      {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
      },
        ])

  if (answers.role === "Manager") {
    const managerRole = await inquirer
    .prompt([
        {
          type: 'input',
          name: 'officeNumber',
          message: 'What is the office number of the manager?',
          },
    ])
    const newManager = newManager (
      answers.name,
      answers.id,
      answers.email,
      managerRole.officeNumber
    );
    newEmployeeData.push(newManager);

  } else if (answers.role === "Engineer") {
    const GitHubData = await inquirer
    .prompt ([
      {
        type: 'input',
        name: 'username',
        message: 'What is the employee GitHub username?',
      },
    ])
    const newEngineer = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      answers.usernameData.username
    );
    newEmployeeData.push(newEngineer);
    
  } else if (answers.role === "Intern"){
    const internData = await inquirer
    .prompt ([
      {
        type: 'input',
        name: 'school',
        message: 'What is the name of the employee school?'
      },
    ])

    const newIntern = new Intern(
      answers.name,
      answers.id,
      answers.email,
      internData.school,
    );
    newEmployeeData.push(newIntern);
  }};

const addEmployeeData = await inquirer
.prompt ([
  {
    name:'addEmployee',
    type: 'list',
    choices: ['add a new Employee', 'create team'],
    message: "Would you like to continue?"
  }
])

if (addEmployeeData.addEmployee === "add a new Employee") {
  return promptQuestions()
} 
return createTeam();

function createTeam (){
    fs.writeFile('./index.html', generateHTML(newEmployeeData),
  );
  }