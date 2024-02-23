# CCHIE Admin Dashboard / Chat Interface

## Getting Started

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

Once the files have been cloned from GitHub or downloaded via .zip files, within VSCode, run the following commands.

1. Get an OpenAI API Key at [https://platform.openai.com/]
2. Clone the repo (or download .zip file)
   ```sh
   git clone https://github.com/blackmoc/CCHIE_Application.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Create a `.env` file and enter your API Key.
   ```js
   const VITE_OPENAI_API_KEY = "ENTER YOUR API";
   ```
5. Start the application
   ```sh
   npm run dev
   ```

This will install all necessary packages and open the application via localhost.

Note: You have access to query GPT 3.5 ONLY and not the fine tuned model.

## Resources

- [React.js](https://react.dev/)
- [Material UI](https://mui.com/material-ui/getting-started/)
- [Material UI Icons](https://mui.com/material-ui/material-icons/)
- [React Router](https://reactrouter.com/en/main)
- [OpenAI](https://openai.com/)
