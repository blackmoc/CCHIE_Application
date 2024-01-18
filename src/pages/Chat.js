import React, { useState } from "react";
import { generateFineTuneResponse } from "../helpers/Chat.helpers";
import "../styles/chat.css";
import logosrc from "../assets/images/logo.png";
import { IconButton } from "@mui/material";
import { Send } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { UserQuestion, BotResponse } from "../components/Messages";
import { ChatBubble } from "@mui/icons-material";

function Chat() {
  const [userQuestion, setUserQuestion] = useState("");
  const [botResponse, setBotResponse] = useState("");
  const [chatMessages, setChatMessages] = useState([
    {
      content:
        "Welcome to Carnegie Classifications for Institutions for Higher Education. How can we assist you today?",
      role: "bot",
    },
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userQuestion);
    try {
      setChatMessages((prev) => [
        ...prev,
        { role: "user", content: userQuestion },
      ]);
      const botResponse = await generateFineTuneResponse(userQuestion);
      setBotResponse(botResponse);
      console.log(botResponse);
      setChatMessages((prev) => [
        ...prev,
        { role: "bot", content: botResponse },
      ]);
    } catch (error) {
      console.error("Errorrrrrrrrrrrr", error);
    }
  };
  const [isVisible, setIsVisible] = useState(false);
  const handleTrigger = () => {
    setIsVisible(!isVisible);
  };
  const handleClear = () => {};
  return (
    <div className="chatbot">
      <div className={` ${isVisible ? "chat-container" : "hidden"}`}>
        <section className="chat-header">
          <img
            alt="Carnegie Chatbot Logo"
            src={logosrc}
            height={"40px"}
            className={"header-logo"}
          />
          <div className="header-text">
            <h3>Carnegie Chat V1.2</h3>
            <h5>Fine Tuned Model...</h5>
          </div>
        </section>
        <section className="conversation-container">
          <div className="conversation">
            {chatMessages.map((text, index) => (
              <div key={index}>
                {text.role === "user" ? (
                  <UserQuestion message={[text.content]} />
                ) : (
                  <BotResponse message={[text.content]} />
                )}
              </div>
            ))}
            <hr />
            <form className="user-input" onSubmit={handleSubmit}>
              <textarea
                value={userQuestion}
                onChange={(e) => setUserQuestion(e.target.value)}
                placeholder="Ask a question..."
              />
              <IconButton
                size="inherit"
                aria-label="send"
                sx={{
                  "&:hover": {
                    color: "#3F7CBF",
                    background: "none",
                  },
                }}
                type="submit"
              >
                <Send />
              </IconButton>
            </form>
          </div>
        </section>
      </div>
      <div className="bottom-elem">
        <IconButton
          sx={{
            backgroundColor: "rgba(0, 81, 134, 1)",
            borderRadius: "50%",
            padding: "15px",
            color: "white",
          }}
          className="trigger-button"
          onClick={handleTrigger}
        >
          <ChatBubble fontSize="inherit" />
        </IconButton>
        <Link className="signin-link" to={"/signin"}>
          Admin
        </Link>
        <button onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
}

export default Chat;
