import { ChangeEvent, useRef, useState, KeyboardEvent } from "react";
import { SortOptions, SortOrder } from "../types/sort";
import useGithubApi from "../hooks/useGithubApi";
import Input from "../components/shared/Input";
import Select from "../components/shared/Select";
import Button from "../components/shared/Button";
import {
  PER_PAGE_OPTIONS,
  SORT_BY_OPTIONS,
  SORT_ORDER_OPTIONS,
} from "../models/selectOptions";
import RepoList from "../components/search/RepoList";
import Loader from "../components/shared/Loader";

function Search() {
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOptions>("stars");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [resultsPerPage, setResultsPerPage] = useState<number>(10);
  const { getRepos, getReposResponse, error, loading } = useGithubApi();
  const searchButtonRef = useRef<HTMLButtonElement>(null);

  const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearchInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query.trim().length > 0) {
      searchButtonRef.current?.click();
      searchButtonRef.current?.focus();
    }
  };

  const handleSortOrderChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as SortOrder;
    setSortOrder(value);
  };

  const handleSortByChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as SortOptions;
    setSortBy(value);
  };

  const handleResultsPerPageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as unknown as number;
    setResultsPerPage(value);
  };

  const handleSearch = () => {
    getRepos(query.trim(), sortOrder, sortBy, resultsPerPage);
  };

  return (
    <main className="p-8 2xl:p-24">
      <h1 className="text-2xl font-semibold mb-2">
        Search GitHub Repositories
      </h1>
      <div className="flex gap-2">
        <Input
          classes={["w-4/12"]}
          id="search"
          changeHandler={handleQueryChange}
          value={query}
          placeholder="Search GitHub repositories"
          onKeyDown={handleSearchInputKeyDown}
        />
        <Select
          classes={["w-2/12"]}
          changeHandler={handleSortByChange}
          id="sortBy"
          value={sortBy}
          options={SORT_BY_OPTIONS}
        />
        <Select
          classes={["w-2/12"]}
          changeHandler={handleSortOrderChange}
          id="sortOrder"
          value={sortOrder}
          options={SORT_ORDER_OPTIONS}
        />
        <Select
          classes={["w-2/12"]}
          changeHandler={handleResultsPerPageChange}
          id="sortOrder"
          value={resultsPerPage}
          options={PER_PAGE_OPTIONS}
        />
        {query.trim().length > 0 && (
          <Button
            id="searchBtn"
            clickHandler={handleSearch}
            text="Search"
            ref={searchButtonRef}
          />
        )}
        {loading && <Loader size="small" />}
      </div>
      <div>
        <RepoList repoResponse={getReposResponse} />
        {!error && getReposResponse.length === 0 && (
          <p className="text-center mt-4">No results to show</p>
        )}
        {error && (
          <p className="text-center mt-4 text-red-500">
            Sorry, an error occurred. Please try again.
          </p>
        )}
      </div>
    </main>
  );
}

export default Search;
