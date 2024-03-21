//Component Imports
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";
//Package Imports
//Style Imports
import "../styles/dashboard.css";
//Function Imports
import { generateGPTResponse } from "../helpers/Chatbot.helpers";
//Other Imports
import { useState } from "react";

function Dashboard() {
  const [question, setQuestion] = useState("");
  const [responseA, setResponseA] = useState("");
  const [responseB, setResponseB] = useState("");
  const [responseC, setResponseC] = useState("");
  const handleSubmitA = async (e) => {
    e.preventDefault();
    try {
      const resp = await generateGPTResponse(question);
      console.log("Question:", question, "\nResponse:", resp);
      setResponseA(resp);
    } catch (error) {
      console.error("ERRRROR:", error);
    }
  };
  const handleSubmitB = async (e) => {
    e.preventDefault();
    try {
      const resp = await generateGPTResponse(question);
      console.log("Question:", question, "\nResponse:", resp);
      setResponseB(resp);
    } catch (error) {
      console.error("ERRRROR:", error);
    }
  };
  const handleSubmitC = async (e) => {
    e.preventDefault();
    setResponseC("This form is not currently active.");
  };
  // const retrieveGPTResponse = async () => {
  //   try {
  //     const resp = await generateGPTResponse(question);
  //     console.log("Question:", question, "\nResponse:", resp);
  //     setResponse(resp);
  //   } catch (error) {
  //     console.error("ERRRROR:", error);
  //   }
  // };
  return (
    <div className="dashboard">
      <Sidebar className="sidebar" />
      <main className="main">
        <div className="card">
          <div className="card-container">
            <h2 className="card-title">GPT 3.5 Turbo</h2>
            <form className="card-form" onSubmit={handleSubmitA}>
              <label className="card-label">
                Question
                <textarea
                  className="card-textarea"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  id="question-ta"
                />
              </label>
              <button className="card-btn" type="submit">
                Retrieve
              </button>
            </form>
            {responseA && <p>{responseA}</p>}
          </div>
        </div>
        <div className="card">
          <div className="card-container">
            <h2 className="card-title">GPT 3.5 Fine Tuned</h2>
            <form className="card-form" onSubmit={handleSubmitB}>
              <label className="card-label">
                Question
                <textarea
                  className="card-textarea"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  id="question-ta"
                />
              </label>
              <button className="card-btn" type="submit">
                Retrieve
              </button>
            </form>
            {responseB && <p>{responseB}</p>}
          </div>
        </div>
        <div className="card">
          <div className="card-container">
            <h2 className="card-title broken">MODEL TITLE</h2>
            <form className="card-form" onSubmit={handleSubmitC}>
              <label className="card-label">
                Question
                <textarea className="card-textarea" id="question-ta" />
              </label>
              <button className="card-btn" type="submit">
                Retrieve
              </button>
            </form>
            {responseC && <p>{responseC}</p>}
          </div>
        </div>
        <div className="card">
          <Table />
        </div>
        <div className="card"></div>
        <div className="card"></div>
      </main>
    </div>
  );
}

export default Dashboard;
