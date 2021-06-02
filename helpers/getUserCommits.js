const axios = require("axios")


// Requests goes here

exports.getUserCommits = (req, res) => {
  axios.get('https://api.github.com/users/EdnGG/repos')
    .then((res) => {
    console.log(res.data.git_commits_url)
  })
  res.send('hey there', JSON.stringify(res.data))
}