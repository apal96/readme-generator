// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// const generateMarkdown = require('./utils/generateMarkdown');
//console.log("Hey")
// TODO: Create an array of questions for user input
const questions = ["What is the project title?","Write a short description of the project","Are there any installation instructions?","What is the usage?","Are there any licenses?","Who are the contributors?","What is your Portfolio URL?","What is your Github URL?","What is your LinkedIn URL?","Are there any acknowledgements you would like to include?","What is the deployed link for your site?","Are there any tests?","What languages did you use to build your project?"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!'));
   
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type:'input',
            message:questions[0],
            name:'title'
        },
        {
            type:'input',
            message:questions[1],
            name:'description'
        },
        {
            type:'input',
            message:questions[2],
            name:'installation'
        },
        {
            type:'input',
            message:questions[3],
            name:'usage'
        },
        {
            type:'input',
            message:questions[4],
            name:'licenses'
        },
        {
            type:'input',
            message:questions[5],
            name:'author'
        },
        {
            type:'input',
            message:questions[6],
            name:'portfolio'
        }, {
            type:'input',
            message:questions[7],
            name:'github'
        },
        {
            type:'input',
            message:questions[8],
            name:'linkedIn'
        },{
            type:'input',
            message:questions[9],
            name:'acknowledgements'
        },{
            type:'input',
            message:questions[10],
            name:'deployLink'
        },{
            type:'input',
            message:questions[11],
            name:'tests'
        },{
            type:'checkbox',
            message:questions[12],
            name: 'builtWith',
            choices: ['HTML', 'Javascript','CSS' ]
        }
    
    
    ]).then((response)=>{
        // generateMarkdown(response);
        console.log(response)
        // generateMarkdown(response);
         writeToFile('readMe.md',generateMarkdown(response));
    }
   


    )
};

// Function call to initialize app
init();
