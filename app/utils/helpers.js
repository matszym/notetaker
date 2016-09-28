const axios = require('axios');

function getRepos(username) {
  return axios
  .get(`https://api.github.com/users/${username}/repos`);
};

function getUserInfo(username) {
  return axios
  .get(`https://api.github.com/users/${username}`);
}

module.exports = {
  getGithubInfo: username => axios.all([getRepos(username), getUserInfo(username)])
  .then(arr => {
    return {
      repos: arr[0].data,
      user: arr[1].data
    };
  })
};