//Component Imports
import Sidebar from "../components/Sidebar";
//Package Imports
//Style Imports
import "../styles/dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar className="sidebar" />
      <main className="main">
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </main>
    </div>
  );
}

export default Dashboard;
