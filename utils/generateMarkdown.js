// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return "https://opensource.org/licenses/" + license;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseBadge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);

  return licenseBadge + "<br />" + licenseLink;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  let readme = `
  # Title: ${response.title}
  
  ## Table Of Contents
  * [License](#license)
  * [Description](#description)
  * [Installations](#installations)
  * [Contributors](#contributors)
  * [Testing](#testing)
  * [Repo](#repo)
  * [Profile](#profile)
  * [Email](#email)
  * [Usage](#usage)
  
  ### License
  ${renderLicenseSection(response.license)}
  
  ### Description
  ${response.description}
  
  ### Installations
  ${response.installations}
  
  ### Contributors
  ${response.contributors}
  
  ### Testing
  ${response.testing}
  
  ### Repo
  ${response.repo}
  
  ### Profile
  [Github Profile](https://github.com/${response.profile})
  
  ### Email
  ${response.email}
  
  ### Usage
  ${response.usage}
`;
return readme;
}

module.exports = generateMarkdown;