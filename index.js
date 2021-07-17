// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const generateMarkdown = require('./utils/generateMarkdown');
//console.log("Hey")
// TODO: Create an array of questions for user input
const questions = ["What is the project title?","Write a short description of the project","What are the prerquisites?","How do you get the development enviroment running?","What is your program built with?","Who are the authors?","What is your Portfolio URL?","What is your Github URL?","What is your LinkedIn URL?"];

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
            name:'prerequisited'
        },
        {
            type:'input',
            message:questions[3],
            name:'development'
        },
        {
            type:'input',
            message:questions[4],
            name:'builtWith'
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
            name:'linkedIn'
        },
        {
            type:'input',
            message:questions[8],
            name:'github'
        }
    
    ]).then((response)=>{
        // generateMarkdown(response);
        console.log(response)
        const readMEdata = response.author;
         writeToFile('readMe.md',readMEdata);
    }
   


    )
};

// Function call to initialize app
init();
