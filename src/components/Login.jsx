
import { GlobalServices } from "../services/GlobalServices";
import { Box, Button, TextField, Typography, ThemeProvider, InputAdornment, IconButton } from "@mui/material";
import NavBar from "../headers/NavBar";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import { createTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';

// Create login theme 
const loginPageStyle = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#8351f5'
    },
    secondary: {
      main: '#ffffff'
    },
    background: {
      paper: '#8351f5'
    }
  }
});

const Login = () => {
  const {
    userEmail,
    setUserEmail,
    userPassword,
    setUserPassword,
    handleLogin,
    isShowPassword,
    passswordVisible
  } = GlobalServices();

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '12px',
    boxShadow: '24px',
    background: '#8351f5',
    margin: '10px',
    p: 4,
    color: '#ffffff'
  };

  return (
    <>
      <NavBar />
     
      <ThemeProvider theme={loginPageStyle}>
        <Box sx={style}>
          <Typography variant="h5" sx={{ marginBottom: '10px' }}>
            PDMR LOGIN
          </Typography>

          <TextField
            color="secondary"
            type="email"
            name="userEmail"
            variant="standard"
            label="User Email"
            value={userEmail}
            fullWidth
            style={{ marginTop: '10px' }}
            onChange={(e) => { setUserEmail(e.target.value) }}
          />

          <TextField
            color="secondary"
            name="userPassword"
            type={isShowPassword?"text":"password"}
            variant="standard"
            label="User Password"
            value={userPassword}
            fullWidth
            style={{ marginTop: '10px' }}
            onChange={(e) => { setUserPassword(e.target.value) }}
            InputProps={{
                endAdornment:(
                    <InputAdornment position="end">
                        <IconButton aria-label="toggle password visiblity" onClick={passswordVisible} edge="end">
                             {isShowPassword? <VisibilityOff/>:<Visibility/>}
                        </IconButton>
                    </InputAdornment>
                )
            }}
          />
          <Button variant="contained" color="primary" style={{ marginTop: '10px' }} onClick={handleLogin}>
            <IconButton>
                <LoginIcon/>
            </IconButton>
            SIGN IN
          </Button>
          <p style={{marginLeft:"10%", color:'#ffffff'}}>
       do not have an account <Link to="/register" color="#c46fec">Sign Up</Link>
       </p>
        </Box>
      
      </ThemeProvider>
    </>
  );
};

export default Login;
