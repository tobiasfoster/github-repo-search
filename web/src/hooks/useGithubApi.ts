import { useState } from "react";
import { RepoResponse } from "../types/githubApi";
import { apiRoutes } from "../config/api.config";

function useGithubApi() {
  const [getReposResponse, setGetReposResponse] = useState<RepoResponse[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  async function getRepos(
    query: string,
    sortOrder: string,
    sortBy: string,
    perPage: number,
  ) {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        `${apiRoutes.GET_REPOS}?query=${query}&sortOrder=${sortOrder}&sortBy=${sortBy}&perPage=${perPage}`,
      );
      const data = (await response.json()) as RepoResponse[];
      setGetReposResponse(data);
    } catch (err) {
      const error = new Error(
        "An error occurred retrieving Repositories from GitHub",
      );
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  return { getRepos, getReposResponse, error, loading };
}

export default useGithubApi;
