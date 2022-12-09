

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
const fs = require('fs');

inquirer
.prompt([
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
      },
])

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