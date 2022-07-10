// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

function generateMarkdown(data) {
  var contents = (`# ${data.projectname} \n
  ## Description \n
  ${data.description} \n
  ## Project Installation \n
  ${data.installation} \n
  ## Usage \n
  ${data.usage} \n
  ## Contribution \n
  ${data.contribution} \n
  ## Testing \n
  ${data.testing} \n
  ## License \n
  ${data.license} \n
  ## Link to Github account: https:github.com/${data.username} \n
`)
  return contents;
}

module.exports = { generateMarkdown };