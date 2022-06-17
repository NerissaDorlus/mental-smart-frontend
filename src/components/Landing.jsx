import { Button, Grid, Typography } from "@mui/material";
import  empathy from "../assets/empathy.png"
import { Box } from "@mui/system";
import Footer from "../common/Footer";
import logo1 from "../assets/logo1.png"
import "../styles/landing.css"

const Landing = () => {
  
    return (
    <div>
       <img src={logo1} alt="cartoon brain and heart holding hands" className="logo" />
      <Box className="landing">

        <Grid container spacing={6} className="gridContainer">
          <Grid item xs={12} md={7}>
            <Typography variant="h3" className="landingtitle">
              Let's build empathy in the workplace together
            </Typography>
            <Typography variant="h6" className="landingsub">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum sint officiis, deleniti dolorem fugit commodi laborum sed ratione tempore illo ab earum error iste architecto ea, accusamus similique vel provident?

            </Typography>
            <div>
            <Button
              className="login-btn"
              variant="contained"
              color="primary"
              sx={{ width: '200px', fontSize: '16px' }}
            >
              Login
            </Button>
            </div>
          </Grid>
          <Grid item xs={12} md={5}>
            <img src={empathy} alt="group of colleagues comforting a man" className="landing-img" />
          </Grid>
        </Grid>
      </Box>
      <Footer />
      </div>
    );
  };
  
  export default Landing;