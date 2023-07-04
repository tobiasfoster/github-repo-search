const octokit = require("../config/octokit.config");

async function getRepos(
  query,
  sortOrder = "desc",
  sortBy = "stars",
  perPage = 10,
) {
  try {
    const response = await octokit.rest.search.repos({
      q: query,
      sort: sortBy,
      order: sortOrder,
      per_page: perPage,
    });

    return response.data.items;
  } catch (err) {
    throw err;
  }
}

module.exports = {
  getRepos,
};
