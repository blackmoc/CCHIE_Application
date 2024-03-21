import logosrc from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import "../styles/sidebar.css";
import { FaMessage, FaHouse, FaHourglassHalf } from "react-icons/fa6";

const Sidebar = () => {
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaHouse />,
    },
    {
      path: "/chat",
      name: "Chat",
      icon: <FaMessage />,
    },

    {
      path: "/concept",
      name: "Concept",
      icon: <FaHourglassHalf />,
    },
  ];
  return (
    <div className="container">
      <div className="sidebar">
        <div className="top_section">
          <img
            alt="Carnegie Chatbot Logo"
            src={logosrc}
            height={"50px"}
            className={"header-logo"}
          />
        </div>
        {menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className="link">
            <div className="icon">{item.icon}</div>
            <div className="link_text">{item.name}</div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
