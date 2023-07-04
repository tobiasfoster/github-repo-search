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

module.exports = { getRepos };
