import { useEffect } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import useGithubApi from "../hooks/useGithubApi";
import Loader from "../components/shared/Loader";
import RepoCard from "../components/shared/RepoCard";

function Detail() {
  const [searchParams] = useSearchParams();
  const { getRepo, getRepoResponse, error, loading } = useGithubApi();

  useEffect(() => {
    const owner = searchParams.get("owner");
    const repo = searchParams.get("repo");

    if (owner && repo) {
      getRepo(owner, repo);
    }
  }, []);

  return (
    <main className="p-4 md:p-16">
      <div className="mb-4">
        <NavLink to={"/search"}>&larr; Return to search</NavLink>
      </div>
      {loading && (
        <div className="flex h-full items-center justify-center">
          <Loader size="large" />
        </div>
      )}
      {!loading && getRepoResponse && (
        <div>
          <RepoCard {...getRepoResponse} displayType="full" />
        </div>
      )}
      {error && (
        <p className="text-center text-red-500">Sorry, an error occurred.</p>
      )}
    </main>
  );
}

export default Detail;
