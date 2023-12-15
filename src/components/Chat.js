import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import BotResponse from "./BotResponse";
import UserQuestion from "./UserQuestion";

//require("dotenv").config();

const generateGPTResponse = async (user_question) => {
  //const API_KEY = process.env.OPENAI_API_KEY;
  const API_KEY = "";
  const API_URL = "https://api.openai.com/v1/chat/completions";
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      //gpt-3.5-turbo
      //ft:gpt-3.5-turbo-1106:personal::8KtCSryL
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "This factual chatbot provides an exact response based solely on data with sources. Make sure that all responses fit within the max tokens and end as a full sentence.",
        },
        {
          role: "user",
          content: user_question,
        },
      ],
      temperature: 1,
      max_tokens: 100,
      top_p: 0.75,
      frequency_penalty: 0.1,
      presence_penalty: 0,
    }),
  };
  const response = await fetch(API_URL, requestOptions);
  const data = await response.json();
  return data["choices"][0]["message"]["content"];
};

export default function Chat() {
  const [response, setResponse] = useState("");
  const [userQuestion, setUserQuestion] = useState("");
  const [conversation, setConversation] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(userQuestion);
    try {
      setConversation((prevConversation) => [
        ...prevConversation,
        { role: "user", content: userQuestion },
      ]);
      const botResponse = await generateGPTResponse(userQuestion);
      console.log(botResponse);
      setConversation((prevConversation) => [
        ...prevConversation,
        { role: "system", content: botResponse },
      ]);
      setResponse(botResponse);
    } catch (error) {
      console.error("Error fetching GPT response:", error);
    }
  };
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Typography
        sx={{ textAlign: "center", fontWeight: "bold", fontSize: 20, mt: 2 }}
        key={"chat header"}
      >
        CCHIE Chat w/ React
      </Typography>
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        autoComplete="off"
        sx={{ mt: 1, maxWidth: 650 }}
      >
        <TextField
          sx={{ ml: 2, mt: 2, mb: 2, mr: 2 }}
          margin="none"
          required
          id="user_question"
          placeholder="Enter a question...."
          multiline
          fullWidth
          maxRows={5}
          value={userQuestion}
          onChange={(event) => {
            setUserQuestion(event.target.value);
          }}
        />
      </Box>
      <Button
        sx={{ ml: 2, maxWidth: 100 }}
        variant="contained"
        onClick={handleSubmit}
      >
        Submit
      </Button>
      <Button
        sx={{ bgcolor: "orange", ml: 2, color: "white", maxWidth: 100 }}
        variant="contained"
      >
        Clear
      </Button>

      <Box mt={3} ml={5}>
        {conversation.map((message) => (
          <Typography component="div" mt={1}>
            {message.role === "user" ? (
              <UserQuestion message={[message.content]} />
            ) : (
              <BotResponse message={[message.content]} />
            )}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}
