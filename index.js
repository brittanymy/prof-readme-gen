// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
// TODO: Create an array of questions for user input
const questions = [
{
    type:"input",
    message:"Enter Project Title",
    name:"title"
},
{
    type:"input",
    message:"Enter Project Description",
    name:"description"
},
{
    type:"input",
    message:"Enter Project Contributors",
    name:"contributors"
},
{
    type:"input",
    message:"Enter Project Installation",
    name:"installation"
},
{
    type:"input",
    message:"Enter Project Testing Requirements",
    name:"testing"
},
{
    type:"input",
    message:"Enter Project Github Repo",
    name:"repo"
},
{
    type:"input",
    message:"Enter Project Github Profile",
    name:"profile"
},
{
    type:"input",
    message:"Enter Project Email",
    name:"email"
},
{
    type:"input",
    message:"Enter Project Usage",
    name:"usage"
},
{
    type:"list",
    message:"Enter Project License",
    name:"license",
    choices:["MIT","ISC","APACHE2.0","GPL","None"]
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions)
.then(response => {
    console.log(response)
    var readme= `
# Title: ${response.title}

## Table Of Contents
* [License](#license)
* [Description](#description)
* [Installation](#installation)
* [Contributors](#contributors)
* [Testing](#testing)
* [Repo](#repo)
* [Profile](#profile)
* [Email](#email)
* [Usage](#usage)


### License
$
![GitHub license](https://img.shields.io/badge/license-${response.license}-blue.svg)
[For Information regarding license](https://github.com/readme/guides/open-source-licensing)

### Description
${response.description}

### Installation
${response.installation}

### Contributors
${response.contributors}

### Testing
${response.testing}

### Repo
${response.repo}

### Profile
${response.profile}

### Email
${response.email}

### Usage
${response.usage}
    `
    console.log(readme)
})


}

// Function call to initialize app
init(); 