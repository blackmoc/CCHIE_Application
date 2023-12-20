import React from "react";
import { Outlet } from "react-router-dom";
import Dashboard from "components/Dashboard";
import Sidebar from "components/Sidebar";

function Home() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div>
          <Outlet />
        </div>
        <Dashboard />
      </div>
    </>
  );
}

export default Home;
