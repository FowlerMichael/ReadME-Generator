// TODO: Include packages needed for this application


// TODO: Create an array of questions for user input
const fs = require('fs');
const inquirer = require('inquirer');


const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.',
    },
    {
        type: 'input',
        name: `table of contents`,
        message: 'Please provide a table of contents.',
    },
    
   
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('Success!');
    });

}

// TODO: Create a function to initialize app
function init() {
    console.log("Welcome to the README Generator!");
    writeToFile("README.md", questions);
    console.log("README.md created!");
    return;

}

// Function call to initialize app
init();