import happy from "../assets/happy.png";
import overwhelmed from "../assets/overwhelmed.png";
import sad from "../assets/sad.png";
import anxious from "../assets/anxious.png";
import Hero from "./Hero"
import Footer from "../common/Footer"
import { useState, useContext, useEffect } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useNavigate } from "react-router-dom";
import { Button, Container, Grid } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import "../styles/add-journal.css"
import {config} from "../config"
import { UserContext } from "../context/ContextProvider";


const AddJournal = () => {

  const [feeling, setFeeling] = useState("");
  const [selectedFeeling, setSelectedFeeling] = useState({});
  const [willTalkTo, setWillTalkTo] = useState("");
  const navigate = useNavigate()
  const { jwt, user } = useContext(UserContext);

  useEffect(()  => {
    const background = {}
    background[feeling] = true;
    setSelectedFeeling(background);
  }, [feeling])

  const handleChange = (e) => {
    setWillTalkTo(e.target.value);
  };
  const handleSubmit = () => {
    fetch(config.apiUrl, {
      method: "POST",
      body: JSON.stringify({
        feeling,
        willTalkTo,
        userName: user.displayName,
        inputedEmail: user.email,     
      }),
      headers: {
        "Content-type": "application/json",
        Authorization: jwt
      },
    })
      .then((res) => {
        setFeeling("")
        setWillTalkTo("")
        navigate("/team")
      })
      .catch(console.error);
      
  };
  return (
    <Container>
      <Hero />
      <section className="journalbody">
        <p>How are you feeling?</p>          
           <Grid container className="enlarge">
            <img
              onClick={() => setFeeling("happy")}
              src={happy}
              alt="a sad cartoon of a woman"
              className={selectedFeeling["happy"] ? "emoji selected-feeling"  : "emoji" }
            />
            <img
              onClick={() => setFeeling("sad")}
              src={sad}
              alt="a sad cartoon of a woman"
              className={selectedFeeling["sad"] ? "emoji selected-feeling" : "emoji"}
            />
            <img
              onClick={() => setFeeling("anxious")}
              src={anxious}
              alt="a cartoon of an anxious man"
              className={selectedFeeling["anxious"] ? "emoji selected-feeling" : "emoji"}
            />
            <img
              onClick={() => setFeeling("overwhelmed")}
              src={overwhelmed}
              alt="a cartoon of an overwhelmed man"
              className={selectedFeeling["overwhelmed"] ? "emoji selected-feeling" : "emoji"}
            />
          </Grid>

        <p className="talkTo">Want to talk about it?</p>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={willTalkTo}
          onChange={handleChange}
          className="radio"
        >
          <FormControlLabel 
            value="No" 
            control={<Radio />} 
            label="No" 
          />
          <FormControlLabel
            value="to Manager"
            control={<Radio />}
            label="to Manager"
          />
          <FormControlLabel
            value="to HR"
            control={<Radio />}
            label="to HR"
          />
          <FormControlLabel
            value="to Counselor"
            control={<Radio />}
            label="to Counselor"
          />
        </RadioGroup>
        <Grid container className="submit">
          <Grid item xs={5}>
          </Grid>
          <Grid item xs={2}>
              <Button
                onClick={() => handleSubmit()}
                variant="contained"
                endIcon={<SendIcon />}
              >
                Submit Journal
              </Button>
          </Grid>
          <Grid item xs={5}>
          </Grid>
        </Grid>
        
      </section>

      <Footer />

    </Container>
  );
};

export default AddJournal;


