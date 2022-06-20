import {Grid, Typography } from "@mui/material";
import  empathy from "../assets/empathy.png"
import { Box } from "@mui/system";
import Footer from "../common/Footer";
import logo1 from "../assets/logo1.png"
import "../styles/landing.css"
import LoginButton from "../components/LoginButton";


const Landing = () => {
  
    return (
      <>
        <img
          src={logo1}
          alt="cartoon brain and heart holding hands"
          className="logo"
        />
        <Box className="landing">
          <Grid container spacing={6} className="gridContainer">
            <Grid item justifyContent="space-around" xs={12} md={7} mt={4}>
              <Typography variant="h3" className="landingtitle">
                Building Workplace Empathy
              </Typography>
              <Typography mt={4} mb={4} variant="h6" className="landingsub">
              About 50% of people who felt empathy from their team were less likely to leave their workplace. 
              Let's normalize empathy!

              </Typography>

              <LoginButton />
            </Grid>
            <Grid item xs={12} md={5}>
              <img
                src={empathy}
                alt="group of colleagues comforting a man"
                className="landing-img"
              />
            </Grid>
          </Grid>
        </Box>
        <Footer />
      </>
    );
  };
  
  export default Landing;