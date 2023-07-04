import { FC } from "react";
import { RepoResponse } from "../../types/githubApi";
import RepoCard from "../shared/RepoCard";

const RepoList: FC<{ repoResponse: RepoResponse[] }> = ({ repoResponse }) => {
  return (
    <ul>
      {repoResponse.map((repo) => {
        return (
          <li key={repo.id} className="my-4">
            <RepoCard {...repo} displayType="truncated" />
          </li>
        );
      })}
    </ul>
  );
};

export default RepoList;
