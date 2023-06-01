// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: (value)=>(value ? true : 'Please enter a title.')
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.',
        validate: (value)=>(value ? true : 'Please enter a description.')
    
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please select a license for your project.',
        choices: ['MIT', 'Apache', 'None']
    },
    {
        type: 'input',
        name: 'table of contents',
        message: 'Please provide a table of contents if needed.',

    },
    {
        type: 'input',
        name: 'preview',
        message: 'Please provide a photo or video of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions.',
        validate: (value)=>(value ? true : 'Please enter installation instructions.')
    },
    {
        type: 'checkbox',
        name: 'Languages',
        message: 'Please select the languages used in your project.',
        choices: ['HTML', 'CSS', 'JavaScript','Ruby','node.js','python','C++','jQuery','Bootstrap','Express.js','react.js','MongoDB','MySQL']
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions on how to use your project.',

    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide instructions on how to contribute to your project.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide instructions on how to test your project.',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Please provide an email link to answer any questions an outside user may have.',
        validate: (value)=>(value ? true : 'Please enter an email.'),
        message: 'Please provide an github link to answer any questions an outside user may have.',
        validate: (value)=>(value ? true : 'Please enter an email.')
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please provide any accreditation or references for your project.',
    },
    {
        type: 'input',
        name: 'Author',
        message: 'Please provide your name.',
    },
]


// TODO: Create a function to write README file
 function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Success!'))
 }



// TODO: Create a function to initialize app
 function init() {
    inquirer.prompt(questions)
    .then((response) => {
        writeToFile('README.md', generateMarkdown(response));
    })
 }


// Function call to initialize app
init();