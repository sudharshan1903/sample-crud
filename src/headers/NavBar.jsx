import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { AppBar, Toolbar, Typography } from "@mui/material";


import { createTheme } from "@mui/material/styles";

const NavBar = () => {
  
  const navBarStyle = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#8351f5'
      }
    }
  });

  return (
    
    <ThemeProvider theme={navBarStyle}>
      <AppBar position="fixed" color="primary">
        <Toolbar sx={{ justifyContent: 'center', border: '2px white solid' }}>
          <Typography variant="h6">
            PERFECT DIGITAL MEDIA RESOURCES
          </Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default NavBar;
