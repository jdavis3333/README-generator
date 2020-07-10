const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "What is your github username?",
        name: "githubName",
    },
    {
        type: "input",
        message: "Provide a brief description of the project",
        name: "description",
    },
    {
        type: "",
        message: "Table of contents",
        name: "table",
    },
    {
        type: "input",
        message: "A step by step series of examples that tell you how to get a development env running",
        name: "installation",
    },
    {
        type: "input",
        message: "provide instructions on how the application is to be used",
        name: "usage",
    },
    {
        type: "list",
        message: "Type of license?",
        name: "badge",
        choices: ["MIT", "ISC", "GPL", "BSD"],
    },
    {
        type: "input",
        message: "List any other contributors to this project",
        name: "contributors",
    },
    {
        type: "input",
        message: "Tests?",
        name: "tests",
    },


];
function getUserInputs() {
    inquirer.prompt(questions)
        .then(function (response) {
            console.log(response);
            var readmeText = `
# Project title: ${response.title} 
## Project description
${response.description} 
## Table of Contents
${response.table}
### Installation
${response.installation}
### Usage
${response.usage}
### License
This project is licensed under the ![GitHub license](https://img.shields.io/badge/license-${response.badge}-blue.svg).
### Contributing
${response.contributors}
### Tests
${response.usage}
###Questions
### GitHub: ${response.githubName}  


        `
            fs.writeFileSync("newREADME.md", readmeText, function () {
                console.log("readme generated")
            })
        })
}
getUserInputs();
// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();
