// TODO: Create a function that returns a license badge based on which license is passed in

const { get } = require("http");

// If there is no license, return an empty string
function renderLicenseBadge (license) {
  if (license) {
    return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](LICENSE)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink (license) {
  if (license === 'MIT') {
    return `https://opensource.org/licenses/MIT`;
    
  }
  else if (license === 'GPLv2') {
    return `https://www.gnu.org/licenses/gpl-3.0`;
  }
  else if (license === 'Apache 2.0') {
    return `https://opensource.org/licenses/Apache-2.0`;
  }

  return '';

}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function getLicenseSection(license) {
  if (license) {
    return `## License

This project is licensed under the ${license} license. See the [LICENSE](LICENSE) file for details.`;
  }

  return '';
};


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  <hr>

  ## Description
  ${data.description}
  <hr>

  ## Table of Contents
  * [Installation](#installation)
  * [preview](#preview)
  * [License](#license)
  * [Frameworks and Libraries](#frameworks-and-libraries)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [Credits](#credits)
  <hr>

  ## Preview
   ${data.preview}
   <hr>

  ## Installation
   ${data.installation}
   <hr>

   ${getLicenseSection(data.license)}
   ${renderLicenseBadge(data.license)}
   ${renderLicenseLink(data.license)}
   <hr>

  ## Frameworks and Libraries
   ${data.Languages}
   <hr>

  ## Usage
  ${data.usage}
  <hr>

  ## Contributing
  ${data.contributing}
  <hr>

  ## Tests
  ${data.tests}
  <hr>

  ## Questions
  ${data.questions}
  <hr>


  ## Credits
   ${data.credits}
   <hr>

  ## Author
   ${data.Author}

`;
}

module.exports = generateMarkdown;