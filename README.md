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

## Testing the Flask App

You can test the Flask app by sending a POST request to the `/apicall` endpoint.

### Using Curl

Using curl, you can open a new terminal window and execute the following command:

```sh
curl -X POST -H "Content-Type: application/json" -d '{"user_question":"Why is the sky blue?"}' http://127.0.0.1:5000/apicall
```

## Resources

- [React.js](https://react.dev/)
- [Material UI](https://mui.com/material-ui/getting-started/)
- [Material UI Icons](https://mui.com/material-ui/material-icons/)
- [React Router](https://reactrouter.com/en/main)
- [OpenAI](https://openai.com/)
