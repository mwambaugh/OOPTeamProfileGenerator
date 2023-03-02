

// employee = 
// name:
// id: 
// email: 
// getName();
// getId()
// getEmail()
// getRole()
// return 'Employee'

const { default: inquirer } = require("inquirer")

// extended from employee: 
// manager =
// officeNumber 
// getRole () override to return 'Manager'

// extended from employee: 
// // engineer = 
// github return 'github username'
// getGitHub() 
// getRole // override to return 'Engineer'

// extended from employee:
// // intern 
// school 
// getSchool()
// getRole() // override to return 'Intern' 

// Finally, although it’s not a requirement, you should consider adding validation to ensure that user input provided is in the proper expected format. 

const inquirer = require(inquirer);
//require node: 
const fs = require('fs');

const roleArray = ["Manager", "Engineer", "Intern",]

// TODO: Create an array of questions for user input
inquirer
.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
  
      },
      {
        type: 'input',
        name: 'phone',
        message: 'What is your office (extension) number?',
  
      },
    {
        type: 'list',
        name: 'role',
        message: 'What is your job title?',
        choices: roleArray, 
      },
      {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'school',
        message: 'What school are you currently attending?',
      },

])

.then((answers) => {
  const htmlPageContent = generateHTML(answers);

  fs.writeFile('index.html', htmlPageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created index.html!')
  );
});



//VALIDATION MIGHT LOOK LIKE THIS: FROM GAME.JS FROM MINI PROJ WEEK 10
// // Asks the user if they want to play again after running out of guessesLeft
// askToPlayAgain() {
//     inquirer
//       .prompt([
//         {
//           type: "confirm",
//           name: "choice",
//           message: "Play Again?"
//         }
//       ])
//       .then(val => {
//         // If the user says yes to another game, play again, otherwise quit the game
//         if (val.choice) {
//           this.play();
//         } else {
//           this.quit();
//         }
//       });
//   }