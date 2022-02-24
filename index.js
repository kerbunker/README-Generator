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
        type: 'input',
        name: 'credit',
        message: 'Enter any credit information you would like to provide'
    },
    {
        type: 'list',
        name: 'license',
        message: "Choose a license for your project.",
        choices: [ 'GNU', 'Apache', 'MIT', 'None']
    },
    {
        type: 'confirm',
        name: 'confirmTest',
        message: 'Would you like to enter any testing data?',
        default: false
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Enter any testing instructions',
        when: (answer) => (answer.confirmTest)
    },
    {
        type: 'input',
        name: 'github',
        message: "What is your GitHub username? (required)",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log("Please enter your gihub username");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email address? (required)",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter your email");
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
    console.log("Your README for has been created");
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
        let fileData = generateMarkdown(data);
        writeToFile('./dist/README.md', fileData);
    })
    .catch(err => {
        throw err;
    });
};

// Function call to initialize app
init();
