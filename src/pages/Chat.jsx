import { useState } from "react";
import { useForm } from "react-hook-form";
// Component Import
import {
  WelcomeMessage,
  UserQuestion,
  GeneralResponse,
  FollowResponse,
  ErrorMessage,
} from "../components/Messages";
import { Logo } from "../components/General";
import { questionCategory } from "../assets/constants/Constants";
import { IconButton } from "@mui/material";
import { Send, ChatBubble } from "@mui/icons-material";
// Helpers Import
import { generateFineTuneResponse } from "../helpers/Chatbot.helpers";
// Style Import
import "../styles/chat.css";

function Chat() {
  const [userQuestion, setUserQuestion] = useState("");
  const [botResponse, setBotResponse] = useState("");
  const [conversation, setConversation] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const handleTrigger = () => {
    setIsVisible(!isVisible);
  };
  const [formData, setData] = useState("");
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
              name={data.user.name}
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
      const botResponse = await generateFineTuneResponse(userQuestion);
      setBotResponse(botResponse);
      setConversation((prev) => [
        ...prev,
        { role: "bot", content: <GeneralResponse message={botResponse} /> },
      ]);
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
    <div className="chatbot">
      <div className={` ${isVisible ? "chat-container" : "hidden"}`}>
        <section className="chat-header">
          <Logo height={40} />
          <div className="header-text">
            <h3>Carnegie Chat V1.2</h3>
            <h5>Fine Tuned Model...</h5>
          </div>
        </section>
        <section className="conversation-container">
          <div className="conversation">
            <WelcomeMessage />
            <div className="category-container">
              <Logo height={32} />
              <div className="category-msg">
                <p>
                  Before we get started, do you mind filling in the following?
                </p>
                <form onSubmit={handleSubmit(infoOnSubmit)}>
                  <label>
                    Name: <input type="text" {...register("user.name")} />
                  </label>

                  <label>
                    Email: <input {...register("user.email")} />
                  </label>
                  <label>
                    Category:
                    <select {...register("category")}>
                      {questionCategory.map((cat) => (
                        <option key={cat.value} value={cat.name}>
                          {cat.name}
                        </option>
                      ))}
                    </select>
                  </label>
                  <button type="submit">Next</button>
                </form>
              </div>
            </div>

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
  );
}

export default Chat;
