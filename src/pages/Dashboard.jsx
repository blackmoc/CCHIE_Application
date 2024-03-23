//Component Imports
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";
//Package Imports
//Style Imports
import "../styles/dashboard.css";
//Function Imports
import {
  generateGPTResponse,
  generateFineTuneResponse,
  generateGPT4Response,
} from "../helpers/Chatbot.helpers";
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
      setResponseA(resp);
    } catch (error) {
      console.error("ERRRROR:", error);
    }
  };
  const handleSubmitB = async (e) => {
    e.preventDefault();
    try {
      const resp = await generateFineTuneResponse(question);
      setResponseB(resp);
    } catch (error) {
      console.error("ERRRROR:", error);
    }
  };
  const handleSubmitC = async (e) => {
    e.preventDefault();
    try {
      const resp = await generateGPT4Response(question);
      setResponseC(resp);
    } catch (error) {
      console.error("ERRRROR:", error);
    }
  };
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
                  autoFocus
                />
              </label>
              <button className="card-btn" type="submit">
                Retrieve
              </button>
            </form>
            {responseA && <p className="response">{responseA}</p>}
          </div>
        </div>
        <div className="card">
          <div className="card-container">
            <div className="card-header">
              <h2 className="card-title">GPT 3.5 Fine Tuned</h2>
              <p className="card-sub">
                This model has been fine tuned on our Q/A data
              </p>
            </div>
            <form className="card-form" onSubmit={handleSubmitB}>
              <label className="card-label">
                Question
                <textarea
                  className="card-textarea"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  id="question-ta"
                  autoFocus
                />
              </label>
              <button className="card-btn" type="submit">
                Retrieve
              </button>
            </form>
            {responseB && <p className="response">{responseB}</p>}
          </div>
        </div>
        <div className="card">
          <div className="card-container">
            <h2 className="card-title">GPT 4 Preview</h2>
            <form className="card-form" onSubmit={handleSubmitC}>
              <label className="card-label">
                Question
                <textarea
                  className="card-textarea"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  id="question-ta"
                  autoFocus
                />
              </label>
              <button className="card-btn" type="submit">
                Retrieve
              </button>
            </form>
            {responseC && <p className="response">{responseC}</p>}
          </div>
        </div>
        <div className="card">
          <div className="card-container">
            <div className="table-header">
              <h2 className="data-table-header">User Questions</h2>
              {/* <button className="table-btn">Add Row</button> */}
            </div>
            <Table />
          </div>
        </div>
        <div className="card">
          <div className="card-container"></div>
        </div>
        <div className="card"></div>
      </main>
    </div>
  );
}

export default Dashboard;
