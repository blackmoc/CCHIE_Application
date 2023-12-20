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
  },
  {
    listIcon: <ChecklistIcon />,
    listText: "Tasks",
  },
  {
    listIcon: <Assessment />,
    listText: "Reporting",
  },
  {
    listIcon: <Person />,
    listText: "Users",
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
