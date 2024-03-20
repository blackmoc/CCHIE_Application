import logosrc from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import "../styles/sidebar.css";
import { FaBars } from "react-icons/fa";

const Sidebar = () => {
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaBars />,
    },
    {
      path: "/chat",
      name: "Chat",
      icon: <FaBars />,
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
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div className="link_text">{item.name}</div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
