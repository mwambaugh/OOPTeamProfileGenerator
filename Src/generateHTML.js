const generateManager = function (manager){
    return `
    <div class="container">
    <h1 class="display-4">Hi! My name is ${manager.name}</h1>
    <p class="lead">I am a talented Manager on this team.</p>
    <h3><span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My email is is ${manager.email}</li>
      <li class="list-group-item">My office extenstion number is ${manager.officeNumber}</li>
    </ul>
  </div>
    `;
}

const generateEngineer = function (engineer){
    return `
    <div class="container">
    <h1 class="display-4">Hi! My name is ${engineer.name}</h1>
    <p class="lead">I am a talented ${engineer.role} on this team.</p>
    <h3><span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${engineer.github}</li>
      <li class="list-group-item">My email is is ${engineer.email}</li>
    </ul>
  </div>
    `;
}

const generateIntern = function (intern){
    return `
    <div class="container">
    <h1 class="display-4">Hi! My name is ${intern.name}</h1>
    <p class="lead">I am a talented ${intern.role} on this team.</p>
    <p class="lead">I am currently attending ${intern.school} and will graduate June 2023.</p>
    <h3><span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${intern.github}</li>
      <li class="list-group-item">My email is is ${intern.email}</li>
    </ul>
  </div>
    `;
}

generateHTML = (data) => {

    pageArray = [];

    for (let index = 0; index < data.length; index++) {
        const employee = data[index];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            pageArray.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
    }

    if (role === 'intern') {
        const internCard = generateIntern(employee);

        pageArray.push(internCard);
    }
}

const employeeCards = pageArray.join('')
const genererateTeam = generateTeamPage(employeeCards);
return generateTeam;
}

const generateTeamPage = function (employeeCards){
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Team Generator</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
    <h1>Welcome to our Team!</h1>
    
    <div class="container">
     <div class "row" id= "teamCards">
     ${employeeCards}
     </div>
    </div>

</div>
</body>
</html>
    `;
}

module.exports = generateHTML;