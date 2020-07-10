const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
    {
        type: "input",
        message: "What is the Title of your project?",
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
        type: "input",
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
        name: "installation",
    },
    {
        type: "input",
        message: "Provide instructions and examples for use.",
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
        message: "If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so.",
        name: "contributors",
    },
    {
        type: "input",
        message: "If you have writtend tests for your application, provide examples on how to run them.",
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
* [Installation](##installation)
* [Usage](##Usage)
* [License](##License)
* [Contributing](##Contributing)
* [Tests](##Tests)
* [Questions](##Questions)

### Installation
${response.installation}

### Usage
${response.usage}

### Contributing
${response.contributors}

### Tests
${response.usage}

### Questions

### GitHub: ${response.githubName}  

### License
This project is licensed under the ![GitHub license](https://img.shields.io/badge/license-${response.badge}-blue.svg).


        `
            fs.writeFileSync("newREADME.md", readmeText, function () {
                console.log("readme generated")
            })
        })
}
getUserInputs();