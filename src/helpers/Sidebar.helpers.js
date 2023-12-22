import {
  Home,
  Dataset,
  Message,
  Assessment,
  Person,
  HelpCenter,
  Settings,
} from "@mui/icons-material";
import ChecklistIcon from "@mui/icons-material/Checklist";

const drawerWidth = 240;
const sidebarItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    path: "/",
  },
  {
    listIcon: <Dataset />,
    listText: "Database",
    path: "/database",
  },
  {
    listIcon: <Message />,
    listText: "Chat",
    path: "/chat",
  },
  {
    listIcon: <ChecklistIcon />,
    listText: "Tasks",
    path: "/tbd",
  },
  {
    listIcon: <Assessment />,
    listText: "Reporting",
    path: "/tbd",
  },
  {
    listIcon: <Person />,
    listText: "Users",
    path: "/tbd",
  },
];

const footerSidebarItems = [
  {
    listIcon: <HelpCenter />,
    listText: "Support",
  },
  {
    listIcon: <Settings />,
    listText: "Settings",
  },
];

const adminUser = [
  {
    userImg: <Person />,
    userName: "Admin",
    userEmail: "admin@kean.edu",
  },
];

export { adminUser, footerSidebarItems, drawerWidth, sidebarItems };
