const githubApiService = require("../services/githubApi.service");

async function getRepos(req, res, next) {
  try {
    const { query, sortOrder, sortBy, perPage } = req.query;
    console.log(req.query);
    res.json(
      await githubApiService.getRepos(query, sortOrder, sortBy, perPage),
    );
  } catch (err) {
    console.error(`An error occured`, JSON.stringify(err));
    next(err);
  }
}

async function getRepo(req, res, next) {
  try {
    const { owner, repo } = req.query;
    res.json(await githubApiService.getRepo(owner, repo));
  } catch (err) {
    console.error(`An error occured`, err.message);
    next(err);
  }
}

module.exports = { getRepos, getRepo };
