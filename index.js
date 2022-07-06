// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
console.log('Program started...');

inquirer.prompt([
    {
        type: 'input',
        message: 'Enter your Github username',
        name: 'userName'
    },
    {
        type: 'input',
        message: "Enter your Github repo's name",
        name: "repoName"
    },
    {
        type: 'input',
        message: "Enter a description of your repo",
        name: "repoDesc"
    }
])
.then((data) => {
    console.log(data)
    console.log('...Program complete')
})
// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
