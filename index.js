const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "enter github name",
        name: "githubName"
    },
    {
        type: "list",
        message: "",
        name: "badge",
        choices: ["MIT", "ISC", "GPL", "BSD"]
    },

];
function getUserInputs(){
    inquirer.prompt(questions)
    .then(function(response){
        console.log(response);
        var readmeText = `
# Project title: ${response.title} 
## Project description
${} 
## Table of Contents
${}
### Installation
${}
### Usage
${}
### License
![GitHub license](https://img.shields.io/badge/license-${response.badge}-blue.svg)
### Contributing
${}
### Tests
${}
###Questions
### GitHub: ${response.githubName}  


        `
        fs.writeFileSync("newREADME.md", readmeText, function(){
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
