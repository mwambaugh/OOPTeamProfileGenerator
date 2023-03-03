const generateManager = function (manager){
    return `
    
    `;
}

const generateEngineer = function (engineer){
    return `
    
    `;
}

const generateIntern = function (intern){
    return `
    `
    ;
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

            pageArray.push(EngineerCard);
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
    
    `;
}

module.exports = generateHTML;