import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import logo1 from "../assets/logo1.png"
import Button from '@mui/material/Button';




const  NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <div className="logo1">
          <img
              src={logo1}
              alt="an animated heart and brain holding hands to depict empathy"
              
            />
          </div>
          <div className="login-container">
          <Button clasName="login" size="large" variant="outlined" color="inherit">Login</Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>

  );
}


export default NavBar;