import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import Database from "pages/Database";
import Chat from "pages/Chat";

const Layout = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/database" element={<Database />} />
      </Routes>
    </Router>
  );
};
export default Layout;
