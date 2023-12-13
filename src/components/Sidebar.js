import React from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
} from "@mui/material";
import { ArrowBackIos } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { useState } from "react";

const drawerWidth = 240;

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = (prev) => setIsSidebarOpen(!prev);

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="absolute" open={isSidebarOpen}></AppBar>
      <Drawer variant="permanent" open={isSidebarOpen}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
          }}
        >
          <IconButton>
            <ArrowBackIos />
          </IconButton>
        </Toolbar>
        <Divider />
      </Drawer>
    </Box>
  );
};

export default Sidebar;
