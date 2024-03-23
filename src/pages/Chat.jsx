import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
// Component Import
import {
  WelcomeMessage,
  UserQuestion,
  GeneralResponse,
  FollowResponse,
  ErrorMessage,
} from "../components/Messages";
import { Logo } from "../components/General";
import { IconButton } from "@mui/material";
import { Send, ChatBubble } from "@mui/icons-material";
// Helpers Import
import { generateGPTResponse } from "../helpers/Chatbot.helpers";
// Style Import
import "../styles/chat.css";
import Sidebar from "../components/Sidebar";

function Chat() {
  const [userQuestion, setUserQuestion] = useState("");
  const [botResponse, setBotResponse] = useState("");
  const [conversation, setConversation] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const handleTrigger = () => {
    setIsVisible(!isVisible);
  };
  const [formData, setData] = useState("");
  const fetchPythonResponse = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/gpt3", {
        question: userQuestion,
      });
      const botResponse = response.data;
      console.log(botResponse);
      setBotResponse(botResponse);

      setConversation((prev) => [
        ...prev,
        { role: "bot", content: <GeneralResponse message={botResponse} /> },
      ]);
    } catch (error) {
      console.error("Error fetching response:", error);
    }
  };
  const fetchGPTResponse = async () => {
    try {
      const botResponse = await generateGPTResponse(userQuestion);
      console.log("Question:", userQuestion, "\nResponse:", botResponse);
      setBotResponse(botResponse);

      setConversation((prev) => [
        ...prev,
        { role: "bot", content: <GeneralResponse message={botResponse} /> },
      ]);
    } catch (error) {
      console.error("ERRRROR:", error);
    }
  };
  const infoOnSubmit = (data) => {
    setData(JSON.stringify(data));
    console.log(formData);
    try {
      setConversation((prev) => [
        ...prev,
        {
          role: "bot",
          content: (
            <FollowResponse
              key="follow-resp"
              // name={data.user.name}
              category={data.category}
            />
          ),
        },
      ]);
    } catch (error) {
      console.error("Errrrror:", error);
    }
  };
  const onSubmit = async () => {
    try {
      setConversation((prev) => [
        ...prev,
        { role: "user", content: <UserQuestion message={userQuestion} /> },
      ]);
      // fetchPythonResponse();
      fetchGPTResponse();
    } catch (error) {
      console.error("Errrrorrrrr:", error);
      setConversation((prev) => [
        ...prev,
        { role: "error", content: <ErrorMessage /> },
      ]);
    }
  };
  const { register, handleSubmit } = useForm();
  return (
    <>
      <Sidebar />
      <div className="concept-chat">
        <div className="concept-container">
          <section className="input-container">
            <div className="welcome-text">
              <h3>
                Welcome to Carnegie Classifications for Institutions of Higher
                Education!
              </h3>
              <p className="sub">
                By submitting, you consent to the use of your question in the
                development of our artificial intelligience based interface.
              </p>
            </div>
            <form className="form">
              <label>
                Name
                <input type="text" id="name" />
              </label>
              <label>
                Email Address
                <input type="email" id="email" />
              </label>
              <label>
                Question
                <textarea type="text" id="question" />
              </label>
              <button type="submit">Send</button>
            </form>
          </section>
        </div>
        <div className="bottom-elem">
          <IconButton>
            <ChatBubble className="trigger-button" fontSize="inherit" />
          </IconButton>
        </div>
      </div>
      <div className="chatbot">
        <div className={` ${isVisible ? "chat-container" : "hidden"}`}>
          <section className="chat-header">
            <Logo height={40} />
            <div className="header-text">
              <h3>Carnegie Chat V1.2</h3>
              <h5>GPT 3.5 Model...</h5>
            </div>
          </section>
          <section className="conversation-container">
            <div className="conversation">
              <WelcomeMessage />
              {conversation.map((text, index) => (
                <div key={index}>{text.content}</div>
              ))}
            </div>
          </section>
          <hr className="conversation-hr" />
          <form
            className="user-input"
            onSubmit={handleSubmit(onSubmit)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleSubmit(onSubmit);
              }
            }}
          >
            <textarea
              value={userQuestion}
              onChange={(e) => setUserQuestion(e.target.value)}
              placeholder="Ask a question..."
            />
            <IconButton
              size="inherit"
              aria-label="send"
              fontSize="small"
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
        <div className="bottom-elem">
          <IconButton onClick={handleTrigger}>
            <ChatBubble className="trigger-button" fontSize="inherit" />
          </IconButton>
        </div>
      </div>
    </>
  );
}

export default Chat;
