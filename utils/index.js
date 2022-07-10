// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

console.log('Note: please install inquirer at version 6.5.0 (use command `npm install inquirer@6.5.0` to ensure program runs correctly.');

// // TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Enter your Github username",
        name: "Username"
    },
    {
        type: "input",
        message: "Enter the name of your Github repository",
        name: "reponame"
    },
    {
        type: "input",
        message: "Enter the title of your project",
        name: "Project title"
    },
    {
        type: "input",
        message: "Give a description of your project",
        name: "Description"
    },
    {
        type: "input",
        message: "Enter any installation steps required for your project, if applicable",
        name: "Installation"
    },
    {
        type: "input",
        message: "Enter instructions and examples for the usage of your project",
        name: "Usage"
    },
    {
        type: "input",
        message: "Enter instructions detailing how other developers can contribute to your project",
        name: "Contribution"
    },
    {
        type: "input",
        message: "Provide information on any tests written for this project and how they can be used",
        name: "Testing"
    },
    {
        type: "list",
        message: "Choose a license for your project",
        choices: ["MIT license", "Mosilla Public license"],
        name: "License"
    }

];

inquirer.prompt(questions)
.then((data) => {
    const filename = `README.md`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });


// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, err => {
//         if (err) {
//             console.log(err)
//         } else {
//             console.log("Success!")
//         }
//     })
// }

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();


















// inquirer.prompt([
//     {
//         type: 'input',
//         message: 'Enter your Github username',
//         name: 'userName'
//     },
//     {
//         type: 'input',
//         message: "Enter your Github repo's name",
//         name: "repoName"
//     },
//     {
//         type: 'input',
//         message: "Enter a description of your repo",
//         name: "repoDesc"
//     }
// ])
// .then((data) => {
//     console.log(data)
//     console.log('...Program complete')
// })
