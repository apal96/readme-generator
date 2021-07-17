// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const README = 
    `# Project Title
    
    One paragraph of project description goes here.
    
    ## Getting Started
    
    These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.
    
    ### Prerequisites
    
    What things you need to install the software and how to install them.
    
    
    ### Give examples
    
    
    ### Installing
    
    A step by step series of examples that tell you how to get a development environment running.
    
    Say what the step will be:
    
    
    ###Give the example
    
    
    And repeat
    ###until finished
    
    
    End with an example of getting some data out of the system or using it for a little demo.
    
    
    ## Built With
    
    * [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
    * [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
    * [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
    
    ## Deployed Link
    
    * [See Live Site](#)
    
    
    ## Authors
    
    * **YOUR NAME** 
    
    - [Link to Portfolio Site](#)
    - [Link to Github](https://github.com/)
    - [Link to LinkedIn](https://www.linkedin.com/)
    
    See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.
    
    ## License
    
    This project is licensed under the MIT License 
    
    ## Acknowledgments
    
    * Hat tip to anyone whose code, libraries, packages, or UI was used  / inspired from
    * Inspiration
    * etc
    `
        
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
