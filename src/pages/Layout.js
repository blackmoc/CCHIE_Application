import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import Database from "pages/Database";
import Chat from "pages/Chat";
import TBD from "pages/TBD";
import SignIn from "pages/SignIn";

const Layout = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/database" element={<Database />} />
        <Route path="/tbd" element={<TBD />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
};
export default Layout;
