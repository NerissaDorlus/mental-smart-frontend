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
          <img
              src={logo1}
              alt="an animated heart and brain holding hands to depict empathy"
              className="logo1"
            />
          <Button className="login" size="large" variant="outlined" color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>

  );
}


export default NavBar;