// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`
}

module.exports = generateMarkdown
function generateBadge(license) {
  if (license === 'Apache 2.0') {
    const badge =  'https://img.shields.io/badge/License-Apache%202.0-brightgreen'
    return badge;
  } else if (license === 'GNU GPLv3') {
    const badge = 'https://img.shields.io/badge/License-GNU%20GPLV3-brightgreen'
    return badge;
  } else if (license === 'MIT') {
    const badge = 'https://img.shields.io/badge/License-MIT-brightgreen'
    return badge;
  } else if (license === 'ISC') {
    const badge = 'https://img.shields.io/badge/License-ISC-brightgreen'
    return badge;
  }
}

function addVideo(data) {
  if (data.video) {
    return `Click [here](${data.video}) for a video demo`
  } else if (!data.video) {
    return ``
  }
}

function generateMarkdown(data) {
  const {license, ...questions} = data

  generateBadge(license)

  return `# ${questions.title} ![${license} Badge](${generateBadge(license)})
  ## Links
  Repository Link: ${questions.repo}
  Live URL Link: ${questions.liveURL}
  ## Description
  ${questions.description}
  # Table Of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contirbuting)
  * [License](#license)
  * [Testing](#testing)
  * [Questions](#questions)
  ## Installlation
  ${questions.install}
  ## Usage
  ${questions.usage}
  ${addVideo(data)}
  ## License
  This project is covered under the following license(s):
  ${license}
  ## Contributing
  ${questions.contibuting}
  ## Testing
  ${questions.tests}
  ## Questions 
  GitHub Profile: [${questions.github}](https://github.com/${questions.github})
  Questions? Contact Me at <${questions.email}>
  `
}

module.exports = generateMarkdown
