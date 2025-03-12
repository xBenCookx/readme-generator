// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input


// TODO: Create a function to write README file


// TODO: Create a function to initialize app


// Function call to initialize app


import fs from 'fs';
import inquirer from 'inquirer';
import colors from 'colors';
import generateMarkdown from './utils/generateMarkdown.js';

const questions = [
  {
    type: 'input',
    name: 'title',
    message: colors.brightBlue('What is the title of your project?'),
  },
  {
    type: 'input',
    name: 'description',
    message: colors.brightGreen('Provide a description of your project:'),
  },
  {
    type: 'input',
    name: 'installation',
    message: colors.brightBlue('What are the installation instructions?'),
  },
  {
    type: 'input',
    name: 'usage',
    message: colors.brightGreen('What is the usage information?'),
  },
  {
    type: 'input',
    name: 'contributing',
    message: colors.brightBlue('What are the contribution guidelines?'),
  },
  {
    type: 'input',
    name: 'tests',
    message: colors.brightGreen('What are the test instructions?'),
  },
  {
    type: 'list',
    name: 'license',
    message: colors.brightBlue('Choose a license for your project:'),
    choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
  },
  {
    type: 'input',
    name: 'github',
    message: colors.brightGreen('Enter your GitHub username:'),
  },
  {
    type: 'input',
    name: 'email',
    message: colors.brightBlue('Enter your email address:'),
  },
];

function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      console.log(colors.brightBlue('Generating your README file...'));
      const markdownContent = generateMarkdown(answers); // Use imported function

      fs.writeFile('README.md', markdownContent, (err) =>
        err
          ? console.error(colors.red('Error writing file:', err))
          : console.log(colors.green('README.md generated successfully!'))
      );
    })
    .catch((error) => {
      console.error(colors.red('Error during initialization:', error));
    });
}

init();
