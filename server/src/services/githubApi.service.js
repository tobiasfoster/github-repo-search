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

async function getRepo(owner, repo) {
  try {
    const response = await octokit.rest.repos.get({
      owner: owner,
      repo: repo,
    });
    const readme = await getReadme(owner, repo);
    return { ...response.data, readme: readme };
  } catch (err) {
    throw err;
  }
}

async function getReadme(owner, repo) {
  try {
    const readme = await octokit.request(
      "GET /repos/{owner}/{repo}/contents/{path}",
      {
        owner: owner,
        repo: repo,
        path: "README.md",
      },
    );

    const content = readme.data.content;
    const readmeToUTF8 = Buffer.from(content, "base64").toString("utf-8");

    return readmeToUTF8;
  } catch (err) {
    throw err;
  }
}

module.exports = {
  getRepos,
  getRepo,
};
