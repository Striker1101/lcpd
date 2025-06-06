import { useState } from "react";
import { Box, Toolbar } from "@mui/material";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const drawerWidth = 240;

const DashboardLayout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <Box
      sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#f1f5f9" }}
    >
      {/* Navbar with hamburger toggle */}
      {/* <Navbar onDrawerToggle={handleDrawerToggle} /> */}

      {/* Sidebar with drawer state */}
      <Sidebar mobileOpen={mobileOpen} onDrawerToggle={handleDrawerToggle} />

      {/* Main content area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8,
          ml: { sm: `${drawerWidth}px` },
          transition: "margin 0.3s ease-in-out",
        }}
      >
        <Toolbar /> {/* spacing for fixed AppBar */}
        {children}
      </Box>
    </Box>
  );
};

export default DashboardLayout;
