// function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.title}
    License: ${data.license}
    
    ## Description 
    ${data.description}
    ## Table of Contents
    * [Usage](#Usage)
    * [Installation](#Installation)
    * [License](#License)
    * [Tests](#Tests)
    * [Contributing](#Contributing)
    * [Questions](#Questions)
    
    ## Usage 
    ${data.usage}
    ## Installation 
    ${data.install}
    ## License 
    This project is license under ${data.license}
    ## Tests
    ${data.test}
    ## Contributing 
    ${data.contributors}
    ## Questions
    If you have any questions about this projects, please contact me  at ${data.email}. https://github.com/${data.username}.
  `;
  }

module.exports = generateMarkdown;
