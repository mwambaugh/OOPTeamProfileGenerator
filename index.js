const inquirer = require('inquirer');
//require node: 
const fs = require('fs');
const generateHTML = require('./Src/generateHTML');

const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

const roleArray = ["Engineer", "Intern","Manager"];
const teamArray = [];

// TODO: Create an array of questions for user input
// start with manager = bc only one //start assuming man. is first user/ input, then ask to add other ppl.
const addManager =() => {
 inquirer.prompt([
{
    type: 'input',
    name: 'name',
    message: 'What is the name of the manager?',
},
    {
      type: 'input',
      name: 'id',
      message: 'What is the id of the manager?',
    },
      {
      type: 'input',
      name: 'email',
      message: 'What is the email address of the manager?',
      },
        {
          type: 'input',
          name: 'officeNumber',
          message: 'What is the office number of the manager?',
          },
        ])
          .then(answers => {
            answers = newManager (answers.name, answers.id, answers.email, answers.officeNumber)
            teamArray.push(answers);
          })
        };

  const addEmployee =() => {
    return inquirer.prompt([    
  {
    type: 'list',
    name: 'role',
    message: 'What is your job title?',
    choices: roleArray, 
  },
  {
    type: 'input',
    name: 'name',
    message: 'What is the employee name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the employee id number?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is the employee email addesss?', 
        },
        {
          type: 'input',
          name: 'username',
          message: 'What is the employee GitHub username?',
        },
        {
          type: 'input',
          name: 'school',
          message: 'What is the name of the employee school?',
          when: (input) => input.role === "Intern",
        },
]);

//function for role data  
.then((answers) => {
  const htmlPageContent = generateHTML(answers);
if (answer.employeeRole)
  fs.writeFile('index.html', htmlPageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created index.html!')
  );
})};



//VALIDATION MIGHT LOOK LIKE THIS: FROM GAME.JS FROM MINI PROJ WEEK 10
// // Asks the user if they want to play again after running out of guessesLeft
// askToPlayAgain() {
//     inquirer
//       .prompt([
//         {
//           type: "confirm",
//           name: "choice",
//           message: "Add another employee?"
//         }
//       ])
//       .then(val => {
//         // If the user says yes to another employee, add team member again, otherwise quit the game
//         if (val.choice) {
//           this.play();
//         } else {
//           this.quit();
//         }
//       });
//   }