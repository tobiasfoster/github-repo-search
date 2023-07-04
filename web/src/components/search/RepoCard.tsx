import React from "react";
import { NavLink } from "react-router-dom";
import { RepoResponse } from "../../types/githubApi";
import truncateText from "../../utils/truncateText";
import CountLabel from "../shared/CountLabel";
import "./search.component.css";

const RepoCard: React.FC<Partial<RepoResponse>> = ({
  owner,
  name,
  description,
  stargazers_count,
  open_issues_count,
  forks_count,
  watchers_count,
  updated_at,
  html_url,
}) => {
  return (
    <div className="flex justify-between border-2 border-gray-600 rounded-md p-2 hover:bg-gray-800">
      <div className="flex flex-col items-start">
        <div className="flex justify-start gap-2 items-center mb-2">
          <img
            className="img-github-avatar"
            src={owner?.avatar_url}
            alt="github-avatar"
          />
          <h1 className="font-bold text-xl">{owner?.login}</h1>
        </div>
        <div className="flex items-center gap-4">
          <h2 className="font-semibold text-lg">{name}</h2>
          <a
            className="text-sm"
            target="_blank"
            referrerPolicy="no-referrer"
            href={html_url}
          >
            View on GitHub
          </a>
        </div>
        <div className="flex gap-4 items-center">
          <h3 className="text-sm text-orange-400">
            Last Updated: {new Date(updated_at!).toLocaleDateString("en-GB")}
          </h3>
        </div>
        <p className="text-left mt-2">{truncateText(description)}</p>
        <NavLink
          className={"mt-2"}
          to={`/detail?owner=${owner?.login}&repo=${name}`}
        >
          View more
        </NavLink>
      </div>
      <div className="flex flex-col gap-2 text-right min-w-[20%]">
        <h3>
          Stars: <CountLabel count={stargazers_count} />
        </h3>
        <h3>
          Open Issues: <CountLabel count={open_issues_count} />
        </h3>
        <h3>
          Forks: <CountLabel count={forks_count} />
        </h3>
        <h3>
          Watchers: <CountLabel count={watchers_count} />
        </h3>
      </div>
    </div>
  );
};

export default RepoCard;
