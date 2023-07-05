# github-repo-search

A project that includes a front-end and back-end application to allow users to connect to the GitHub API and search for repositories.

## How to run the application

- Clone the repository (e.g. `gh repo clone tobiasfoster/github-repo-search`)
- Navigate into the **server** directory
- At the root of the directory add a `.env` file (or rename the `.env.example` file provided) and provide the necessary details to the following:
  - **GITHUB_PAT** - this should be your own GitHub personal access token and will be used to authenticate requests made to the GitHub api. For details on how to obtain a token, see details [here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic).
  - **PORT** - this is the port number the server will run on, on your local machine. If no Port number is provided, it will default to **3000**.
- Run `npm install`
- Run `npm run dev`
- Navigate to the root of the project and then navigate into the **web** directory
- At the root of the directory add a `.env` file (or rename the `.env.example` file provided) and provide the necessary details to the following:
  - **VITE_API_PORT** - this will be the same value as the Port value used in the server configuration. If you did not set a Port in the server, use **3000** for this value
  - **VITE_API_ORIGIN** - as the server is being run locally, this can be set to **http://localhost**
- Run `npm install`
- Run `npm run dev`
- Go to http://localhost:5137 in your browser to access the web application

## Considerations

Given that requests to the GitHub API necessitate an authentication token, I decided to create a proxy server which would route requests to the API to avoid having to include said token in the front-end's build thereby exposing it to potential malicious actors. This way, the token is obfuscated from end users.

I used the _Express_ library to scaffold the server as it's tried-and-tested, well-maintained and facilitates fairly rapid build-out of a working server.

_React_ was used as the front-end as it's the UI library with which I am most familiar and comfortable and comes with the added benefit of having one of the most active and reliable communities surrounding it, meaning there is often a library available to solve most non-trivial problems, therefore accelerating development. The web app was scaffolded with _Vite_, primarily for its easy setup and its speed. _TypeScript_ was also used to provide an extra layer of robustness to the application as well as enhancing the development experience. _Tailwindcss_ was added as a CSS framework for the application because its extensive utility classes help speed up building a UI enormously, as well as providing out-of-the-box features to help standardise an application's theme, should the need arise. I avoided using a specific component library due to the overhead and the app's scale not needing such.

## Hurdles

The _Octokit_ library from GitHub helped speed up the integration with their API, but I found the API's general documentation quite unwieldy, experiencing a bit of difficulty in finding the right information and the right way to interact with the API.

The soft time limit meant there was little time to consider different options and approaches, but given the small scale of the application this was not a huge imposition, though it did mean that some elements were not implementable, at least not in a meaningful way.

Adding the server layer constrained my available time, but I felt this to be a necessary inclusion.

## Further improvements

The UI, while functional, could certainly be improved, with a more coherent theming applied to the overall application. Improvements could be made to make the app more responsive to varying device sizes.

Tests could and should be added to both the front-end and back-end.

When navigating from a repo in the 'Search' page to the 'Detail' view, upon returning back to the 'Search' page, the user is presented with a blank list and must enter their search query again. This isn't ideal, and the search state should persist between navigation.

Paginating results wasn't implemented - but should be. As it stands users can choose their number of results from three options: 10, 25 and 50. The latter two of which result in a long scroll, to the detriment of the user experience. The RepoCard component is also potentially too large and could be shortened to allow more visible content in the window.
