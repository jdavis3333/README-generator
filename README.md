# README-generator

The goal of this project was to create a command-line application and a README.md from user's input.

### Prerequisites

* Visual Studio Code https://code.visualstudio.com/

### Execution

* Application in action

https://www.youtube.com/watch?v=PODDtwNLrro

* Generated questions to prompt user
```
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
```
* Created axios call to retrieve user data from GitHub
```
        return axios.get(`https://api.github.com/users/${userData.githubName}`)
            .then(function (axiosResponse) {
                console.log(axiosResponse)
```            
* Template to get user input and write to markdown file

```
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

```

## Built With

* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Deployed Link

* https://jdavis3333.github.io/README-generator/


## Authors

* Joe Davis

- [Link to Portfolio](https://jdavis3333.github.io/updated-portfolio/)
- [Link to Github](https://github.com/)
- [Link to LinkedIn](https://www.linkedin.com/)


## License

This project is licensed under the ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg).

