import { React, useState } from "react";
import { TextField, Button } from "@mui/material";
import { generateGPTResponse } from "./Chat.helpers";

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
    <>
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
      <Button sx={{ ml: 2 }} variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
    </>
  );
}
