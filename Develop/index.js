const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

// Main function
function init(questionsArr) {
    console.log(`
    
    ===================
    Let's Mage a README
    ===================

    `)
    return inquirer.prompt(questionsArr)
        .then(answers => {
            return generateMarkdown(answers)
        })
        .then(markdown => {
            const fileName = markdown
                .toLowerCase()
                .split('# ')[1]
                .split('!')[0]
                .replace(/\s+/g, '')
            writeToFile(fileName, markdown)
        }).catch(err => {
            console.log(err)
        })
}

// array of questions for user
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the name of the project? (Required)',
    validate: titleInput => {
        if (titleInput) {
            return true
        } else {
            console.log('Please enter a project title')
        }
    }
},
{
    type: 'input',
    name: 'description',
    message: 'Please provide a description of your project (Required)',
    validate: descriptionInput => {
        if (descriptionInput) {
            return true
        } else {
            console.log('Please provide a description')
        }
    }
}
{
    type: 'input',
    name: 'repo',
    message: 'Please provide a link to your projects repository',
    validate: repoInput => {
        if (repoInput) {
            return true
        } else {
            console.log('Please provide a link to your projects reository')
        }
    }
},
{
    type: 'input',
    name: 'liveURL',
    message: 'Please provide a link to the live website of your project (Required)',
    validate: liveURLInput => {
        if (liveURLInput) {
            return true
        } else {
            console.log('Please provide a link to your project.')
        }
    }
},
{
    type: 'input',
    name: 'install',
    messgage: 'Provide instructions on how to install your project (Required',
    validate: installInput => {
        if (installInput) {
            return true
        } else {
            console.log('Please provide instal instructions')
        }
    }
},
{
    type: 'input',
    name: 'usage',
    message: 'Provide usage instrucitons and/or examples (Required)',
    validate: usageInput=> {
        if (usageInput) {
            return true
        } else {
            console.log('Please provide some information on the usage of your project')
        }
    }
},
{
    type: 'confirm',
    name: 'confirmVideo',
    message: 'Do you have a demo video you would like to add to this README?',
    default: false
},
{
    type: 'input',
    name: 'video',
    message: 'Enter the video URL',
    when: ({ confirmVideo }) => confirmVideo
},
{
    type: 'list',
    name: 'license',
    message: 'Which license applies to your project? (Required)',
    choices: ['Apache 2.0', 'GNUGPLv3', 'MIT', 'ISC'],
    validate: licenseInput => {
        if (licenseInput) {
            return true
        } else {
            console.log('Please choose a license')
        }
    }
},
{
    type: 'input',
    name: 'contribution',
    message: 'Please provide contributing guidelines (Required)',
    validate: contributingInput=> {
        if (contributingInput) {
            return true
        } else {
            console.log('Please list any contributors to your project')
        }
    }
},
{
    type: 'input',
    name: 'tests',
    message: 'Provide any testing instructions the user should know (Required)',
    validate: testingInput=> {
        if (testingInput) {
            return true
        } else {
            console.log('Please provide testing instructions')
        }
    }
},
{
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username (Required)',
    validate: githubInput=> {
        if (githubInput) {
            return true
        } else {
            console.log('Please provide your GitHub username')
        }
    }
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email address? (Required)',
    validate: emailInput => {
        if (emailInput) {
            return true
        } else {
            console.log('Please enter your email address')
        }
    }
},

]

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('../Output/README.mb', markdown, function(err) {
        if (err) {
            return console.log(err)
        }
    })
    return console.log('README created. See Output to view the generated file.')
}
// function call to initialize program
init(questions)
