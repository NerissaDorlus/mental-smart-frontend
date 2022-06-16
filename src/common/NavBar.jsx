import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import empathy from "../assets/empathy.png"

// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

const  NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mental Smart
          </Typography>
          <img
            
              src={empathy}
              alt="two female colleagues comforting a male employee"
              className="empathy"
            />
          <Button size="large" variant="outlined" color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>

  );
}


export default NavBar;