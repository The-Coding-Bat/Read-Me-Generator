// TODO: Include packages needed for this application
const fs = require('fs'); 
const inquirer = require('inquirer'); 

// Connected to generateMarkdown file
const generatePage = require('./utils/generateMarkdown.js');

const questions = () => {
    // using inquirer to prompt questions to user 
    return inquirer.prompt([
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false; 
            }
        } 
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false; 
            }
        }

    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your project name!');
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a description of your project.',
        validate: descInput => {
            if (descInput) {
                return true;
            } else {
                console.log('Please enter a description of your project!');
                return false; 
            }
        }
    }, 
    {
        type: 'input',
        name: 'install',
        message: 'What are the steps to install your project?',
        validate: installation => {
            if (installation) {
                return true;
            } else {
                console.log('Please enter how to install the project!');
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this app?',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter how to use the app!');
                return false; 
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'GNU'],
        default: ["MIT"],
    },
    {
        type: 'input',
        name: 'test', 
        message: 'What command should be used to test the app?',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'How can you contribute to this repo?'
    }
]);
};

// function to write README file using file system 
const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        // Is there an error? 
        if (err) {
            console.log(err);
            return;
        // When the ReadMe is successful.
        } else {
            console.log("Your README has been successfully created!")
        }
    })
}; 

// Call for questions function
questions()
// User Anwers
.then(answers => {
    return generatePage(answers);
})
.then(data => {
    return writeFile(data);
})
// Error Catch
.catch(err => {
    console.log(err)
})