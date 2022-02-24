// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  return `![License: ${license}](https://img.shields.io/badge/License-${license}-green)`;


}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  return `-[License](#license)
  `;
}

function renderTestingLink(testing) {
  if (!testing) {
    return '';
  }
  return `-[Tests](#tests)
  `;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  return `

  ## License

  This project falls under the ${license} license. For more information on this license please visit [https://choosealicense.com/](https://choosealicense.com/).

  `;
}

function renderTestsSection(testing) {
  if (!testing) {
    return '';
  }
  return `
  
  ## Tests
  
  ${testing}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectTitle}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.projectDescription}

  ---

  ## Table of Contents
  -[Installation](#installation)
  -[Usage](#usage)
  ${renderLicenseLink(data.license)}-[Contributing](#Contributing)
  ${renderTestingLink(data.testing)}-[Questions](#questions)
  

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}
  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.credit}
  ${renderTestsSection(data.testing)}

  ## Questions

  If you have any questions, please contact me through [github](https://github.com/${data.github}) or send me an email at: <${data.email}>.

`;
}

module.exports = generateMarkdown;
