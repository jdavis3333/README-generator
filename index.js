const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
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
