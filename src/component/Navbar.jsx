import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      elevation={2}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "#1e293b",
      }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
          Dashboard Panel
        </Typography>
        {/* Add user info, logout or icons here if needed */}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
