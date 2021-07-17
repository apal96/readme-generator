// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license){
    return " ";
  }else{

  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license){
    return " ";
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license){
    return " ";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const README = `# ${data.title}
  ## Project Description
  ${data.description}

  ## Table of Contents
  1. [Getting Started](#getting-started)
  2. [Installation](#Installation)
  3. [Usage](#Usage)
  4. [Built With](#Built-with)
  5. [Deployed Link](#Deployed-Link)
  6. [License](#License)
  7. [Acknowledgments](#Acknowledgments)
  8. [Tests](#Tests)
  9. [Contributors](#Contributors)

  ## Getting Started
  
  These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.
  
  ### Installation
  ${data.installation}
  
  ### Usage
  ${data.usage}
  
  ## Built With

  ${data.builtWith}
  

  
  ## Deployed Link
  
  * [${data.deployLink}](#)
  

  
  ## License
  
  This project is licensed under the ${data.licenses} license.
  
  ## Acknowledgments
  ${data.acknowledgements}

  ## Tests
  ${data.tests}
  
  ## Contributors
  
  **${data.author}** 
  
  - Portfolio: [${data.portfolio}](#)
  - Github: [${data.github}](https://github.com/)
  - LinkedIn: [${data.linkedIn}](https://www.linkedin.com/)
  - Email: [${data.email}](#)
  

 
  `

        
  // return `# ${data.title}`
  return README;

;
}

module.exports = generateMarkdown;
