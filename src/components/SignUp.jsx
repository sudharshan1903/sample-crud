
import NavBar from "../headers/NavBar";
import { Link } from "react-router-dom";
import { Box, Button, TextField, Typography, ThemeProvider, createTheme,InputAdornment,IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { GlobalServices } from "../services/GlobalServices";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


const signUpPageStyle = createTheme({
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

const SignUp = ()=>{
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
 
      const {  
        isShowPassword,
        passswordVisible,
        newUserName,
        newUserEmail,
        newUserPassword,
        setNewUserEmail,
        setNewUserName,
        setNewUserPassword,
        handleSignUp
    } = GlobalServices();

    return (
        <>
       <NavBar/>
       <ThemeProvider theme={signUpPageStyle}>
        <Box sx={style}>
          <Typography variant="h5" sx={{ marginBottom: '10px' }}>
            PDMR SIGN UP
          </Typography>

          <TextField
            color="secondary"
            name="newUserName"
            variant="standard"
            label="User Name"
            type="text"
            value={newUserName}
            fullWidth
            style={{ marginTop: '10px' }}
            onChange={(e) => { setNewUserName(e.target.value) }}
          />

          <TextField
            color="secondary"
            name="newUserEmail"
            variant="standard"
            label="New User Email"
            type="email"
            value={newUserEmail}
            fullWidth
            style={{ marginTop: '10px' }}
            onChange={(e) => { setNewUserEmail(e.target.value) }}
          />

          <TextField
            color="secondary"
            name="newUserPassword"
            variant="standard"
            label="New User Password"
            type={isShowPassword?"text":"password"}
            value={newUserPassword}
            fullWidth
            style={{ marginTop: '10px' }}
            onChange={(e) => { setNewUserPassword(e.target.value) }}
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
          <Button variant="contained" color="primary" style={{ marginTop: '10px' }} onClick={handleSignUp}>
            <IconButton>
                <ExitToAppIcon/>
            </IconButton>
            SIGN UP
          </Button>
          <p style={{marginLeft:"10%", color:'#ffffff'}}>
       If you have an account <Link to="/" color="#c46fec">Sign In</Link>
       </p>
        </Box>
      </ThemeProvider>
        </>
    )
}

export default SignUp;