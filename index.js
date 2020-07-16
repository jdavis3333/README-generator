const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
let userData = {}

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
        message: "What is your email address?",
        name: "email",
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
        message: "If you have written tests for your application, provide examples on how to run them.",
        name: "tests",
    },


];
function getUserInputs() {
    inquirer.prompt(questions)
        .then(function (response) {
            console.log(response);
            userData = response;
            return axios.get(`https://api.github.com/users/${userData.githubName}`)
            .then(function (axiosResponse) {
                console.log(axiosResponse)
            var readmeText = `
# Project Title: ${response.title} 

## Project description
${userData.description} 

## Table of Contents
* [Installation](##installation)
* [Usage](##Usage)
* [License](##License)
* [Contributing](##Contributing)
* [Tests](##Tests)
* [Questions](##Questions)

### Installation
${userData.installation}

### Usage
${userData.usage}

### Contributing
${userData.contributors}

### Tests
${userData.tests}

### Questions
![GitHub Avatar](${axiosResponse.data.avatar_url})
* Email: <${userData.email}>

### License
This project is licensed under the ![GitHub license](https://img.shields.io/badge/license-${userData.badge}-blue.svg).
        `
            fs.writeFileSync("newREADME.md", readmeText, function () {
                console.log("readme generated")
            })
        })
})
}
getUserInputs();