import {
  Drawer,
  Toolbar,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  adminUser,
  footerSidebarItems,
  drawerWidth,
  sidebarItems,
} from "helpers/Sidebar.helpers";

const Sidebar = () => {
  const sidebarList = () => (
    <List>
      {sidebarItems.map((item, index) => (
        <ListItem key={index} component={Link} to={item.path}>
          <ListItemIcon sx={{ color: "white" }}>{item.listIcon}</ListItemIcon>
          <ListItemText sx={{ color: "white" }}>{item.listText}</ListItemText>
        </ListItem>
      ))}
    </List>
  );
  const footerSidebarList = () => (
    <List>
      {footerSidebarItems.map((item, index) => (
        <ListItem key={index}>
          <ListItemIcon sx={{ color: "white" }}>{item.listIcon}</ListItemIcon>
          <ListItemText sx={{ color: "white" }}>{item.listText}</ListItemText>
        </ListItem>
      ))}
    </List>
  );
  const userDefinition = () => (
    <List>
      {adminUser.map((item, index) => (
        <ListItem
          key={index}
          sx={{ display: "flex", alignItems: "flex-end", flexWrap: "wrap" }}
        >
          <ListItemIcon sx={{ color: "white" }}>{item.userImg}</ListItemIcon>
          <ListItemText sx={{ color: "white" }}>{item.userName}</ListItemText>
          <ListItemText sx={{ color: "white" }}>{item.userEmail}</ListItemText>
        </ListItem>
      ))}
    </List>
  );
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#00192A",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Typography
        sx={{
          color: "white",
          fontWeight: "bold",
          fontSize: 20,
          textAlign: "center",
          p: 2,
        }}
      >
        CCHIE Dashboard Concept
      </Typography>
      <Divider sx={{ bgcolor: "white", my: 2 }} />
      {sidebarList()}
      <Divider sx={{ bgcolor: "white", my: 2 }} />
      {footerSidebarList()}
      <Divider sx={{ bgcolor: "white", my: 1 }} />
      {userDefinition()}
    </Drawer>
  );
};

export default Sidebar;
