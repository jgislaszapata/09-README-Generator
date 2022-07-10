// TODO: Include packages needed for this application
const generate = require('./generateMarkdown');
const fs = require('fs');
const inquirer = require('inquirer');

console.log('Note: please install inquirer at version 6.5.0 (use command `npm install inquirer@6.5.0` to ensure program runs correctly.');

// // TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Enter your Github username",
        name: "username",
        default: "jgislaszapta"
    },
    {
        type: "input",
        message: "Enter the title of your project",
        name: "projectname",
        default: "09-README-Generator"
    },
    {
        type: "input",
        message: "Give a description of your project",
        name: "description",
        default: "This application is a README.md file generator that creates a professional README based on user input."
    },
    {
        type: "input",
        message: "Enter any installation steps required for your project, if applicable",
        name: "installation",
        default: "User will begin by cloning the repo and then installing the inquirer dependancy at version 6.5.0."
    },
    {
        type: "input",
        message: "Enter instructions and examples for the usage of your project",
        name: "usage"
    },
    {
        type: "input",
        message: "Enter instructions detailing how other developers can contribute to your project",
        name: "contribution"
    },
    {
        type: "input",
        message: "Provide information on any tests written for this project and how they can be used",
        name: "testing",
        default: "No tests were written for this application."
    },
    {
        type: "list",
        message: "Choose a license for your project",
        choices: ["MIT license", "Mosilla Public license"],
        name: "license"
    }

];

// TODO: Create a function to write README file
function writeToFile(filename, data) {
    const content = generate.generateMarkdown(data);

    fs.writeFile(filename, content, err => 
      err ? console.log(err) : console.log("Success!"));
    }

// // TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data => {
        const filename = "README.md"
        writeToFile(filename, data);
    });
}

// // Function call to initialize app
init();