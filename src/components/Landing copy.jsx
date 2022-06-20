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
        <Box sx={{ flexGrow: 1 }} className="landing">
          <Grid container spacing={2} className="gridContainer">
            <Grid container item justifyContent="space-around" xs={5} mt={4}>
              <Typography variant="h3" className="landingtitle">
                Building Workplace Empathy
              </Typography>
              <Typography mt={4} mb={4} variant="h6" className="landingsub">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
                sint officiis, deleniti dolorem fugit commodi laborum sed
                ratione tempore illo ab earum error iste architecto ea,
                accusamus similique vel provident?
              </Typography>

              <LoginButton />
            </Grid>
            <Grid
              container
              item
              xs={7}
              justifyContent="center"
              alignItems="center"
              className="img-parent"
            >
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