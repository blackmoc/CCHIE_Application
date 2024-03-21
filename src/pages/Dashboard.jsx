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
  const [response, setResponse] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    retrieveGPTResponse();
  };
  const doNothing = () => {};
  const retrieveGPTResponse = async () => {
    try {
      const resp = await generateGPTResponse(question);
      console.log("Question:", question, "\nResponse:", resp);
      setResponse(resp);
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
            <form className="card-form" onSubmit={handleSubmit}>
              <label className="card-label">Question</label>
              <textarea
                className="card-textarea"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
              <button className="card-btn" type="submit">
                Retrieve
              </button>
            </form>
            {response && <p>{response}</p>}
          </div>
        </div>
        <div className="card">
          <div className="card-container">
            <h2 className="card-title broken">MODEL TITLE</h2>
            <form className="card-form" onSubmit={doNothing}>
              <label className="card-label">Question</label>
              <textarea className="card-textarea" />
              <button className="card-btn" type="submit">
                Retrieve
              </button>
            </form>
          </div>
        </div>
        <div className="card">
          <div className="card-container">
            <h2 className="card-title broken">MODEL TITLE</h2>
            <form className="card-form" onSubmit={doNothing}>
              <label className="card-label">Question</label>
              <textarea className="card-textarea" />
              <button className="card-btn" type="submit">
                Retrieve
              </button>
            </form>
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
