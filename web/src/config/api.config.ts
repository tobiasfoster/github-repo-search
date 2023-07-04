export const API_ORIGIN = import.meta.env.VITE_API_ORIGIN;
export const API_PORT = import.meta.env.VITE_API_PORT;

export const apiRoutes = {
  GET_REPOS: `${API_ORIGIN}:${API_PORT}/api/getRepos`,
  GET_REPO: `${API_ORIGIN}:${API_PORT}/api/getRepo`,
};
