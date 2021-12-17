// import data from packages needed
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: "What is your project title? (Required)",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your project title');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: "Enter a description of your project (required)",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log("Please enter a description for your project.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: "How would someone install your project? (Required)",
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log("Please provide a step by step description of how to install your project");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe how a user would use your project (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log("Please describe how this project should be used");
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmCredit',
        message: 'Would you like to credit any others for work on your project?',
        default: false
    },
    {
        type: 'input',
        name: 'credit',
        message: 'Enter any credit information you would like to provide',
        when: ({ confirmCredit }) => {
            if (confirmCredit) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "What is your GitHub username? (required)"
    }
];
const promptUser = () => {
    return inquirer.prompt(questions)
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
