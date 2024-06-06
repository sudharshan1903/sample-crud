import { ThemeProvider } from "@mui/material/styles";
import { AppBar, Box, Button, TextField, Toolbar, Typography } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { GlobalServices } from "../services/GlobalServices.jsx";

const HomeBarStyle = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#29f5ae'
    },
    secondary:{
      main:'#29f5ae'
    },
    info:{
      main:'#808080'
    }
  }
});

const HomePage = () => {

    const {
      handleLogOut,
      toAddress,
      setToAddress,
      description,
      setDescription,
      subject,
      setSubject,
      handleEmail

    } =GlobalServices();
    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      width: 400,
      bgcolor: 'background.paper',
      borderRadius: '12px',
      boxShadow: '24px',
      background: '#29f5ae',
      margin: '10px',
      p: 4,
      color: '#ffffff'
    };
  return (
    <>
      <ThemeProvider theme={HomeBarStyle}>
        <AppBar position="fixed" color="secondary">
          <Toolbar sx={{ justifyContent: 'space-between', border: '2px white solid' }}>
            <Typography variant="h6">
              PERFECT DIGITAL MEDIA RESOURCES
            </Typography>
            <Button color="primary" variant="contained" onClick={handleLogOut}>
              LOG OUT
            </Button>
          </Toolbar>
        </AppBar>
        <Box sx={style}>
          <Typography variant="h5" sx={{ marginBottom: '10px' }}>
            USER SEND MAIL
          </Typography>

          <TextField
            color="info"
            type="email"
            name="toAddress"
            variant="standard"
            label="To Address"
            fullWidth
            style={{ marginTop: '10px' }}
            value={toAddress}
            onChange={(e) => setToAddress(e.target.value)}
          />
          <TextField
            color="info"
            type="text"
            name="subject"
            variant="standard"
            label="Subject"
            fullWidth
            style={{ marginTop: '10px' }}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <TextField
          color="info"
          type="textarea"
          name="description"
          variant="standard"
          label="Description"
          minRows={2}
          maxRows={5}
          fullWidth
          style={{marginTop:'10px'}}
          value={description}
          onChange={(e) => setDescription(e.target.value)}

          />

          <Button variant="contained" color="info" style={{ marginTop: '10px' }} onClick={handleEmail}>
            SEND A MAIL
          </Button>
        </Box>
      </ThemeProvider>


    </>
  )
}

export default HomePage;
