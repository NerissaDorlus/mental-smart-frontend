import happy from "../assets/happy.png";
import overwhelmed from "../assets/overwhelmed.png";
import sad from "../assets/sad.png";
import anxious from "../assets/anxious.png";
import Hero from "./Hero"
import Footer from "../common/Footer"
import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
// import FormControl from "@mui/material/FormControl";
// import FormLabel from "@mui/material/FormLabel";
import { useNavigate } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import "../styles/add-journal.css"


const AddJournal = () => {

  const [feeling, setFeeling] = useState("");
  const [willTalkTo, setWillTalkTo] = useState("");
  const navigate = useNavigate()
  const handleChange = (e) => {
    setWillTalkTo(e.target.value);
  };
  const handleSubmit = () => {
    fetch("https://mental-smart.web.app/journals", {
      method: "POST",
      body: JSON.stringify({
        feeling,
        willTalkTo,
        // inputedEmail: "email goes here"
      
      }),
      headers: {
        "Content-type": "application/json",
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
    <>
      <Hero />
      <section className="journalbody">
        <p>How are you feeling?</p>          
        {/* <div> */}
           <Grid container className="enlarge">
            <img
              onClick={() => setFeeling("happy")}
              src={happy}
              alt="a sad cartoon of a woman"
              className="emoji"
            />
            <img
              onClick={() => setFeeling("sad")}
              src={sad}
              alt="a sad cartoon of a woman"
              className="emoji"
            />
            <img
              onClick={() => setFeeling("anxious")}
              src={anxious}
              alt="a cartoon of an anxious man"
              className="emoji"
            />
            <img
              onClick={() => setFeeling("overwhelmed")}
              src={overwhelmed}
              alt="a cartoon of an overwhelmed man"
              className="emoji"
            />
            {console.log(feeling)}
          </Grid>
        {/* </div> */}

        {/* <FormControl> */}
        <p className="talkTo">Want to talk about it?</p>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={willTalkTo}
          onChange={handleChange}
          className="radio"
        >
          <FormControlLabel value="No" control={<Radio />} label="No" />
          <FormControlLabel
            value="to HR"
            control={<Radio />}
            label="to Manager"
          />
          <FormControlLabel
            value="to HR"
            control={<Radio />}
            label="to Manager"
          />
          {console.log(willTalkTo)}
        </RadioGroup>
        {/* </FormControl>  */}
        <Grid container className="submit">
          <Grid item xs={5}>
          </Grid>
          <Grid item xs={2}>
            {/* <Item> */}
              <Button
                onClick={() => handleSubmit()}
                variant="contained"
                endIcon={<SendIcon />}
              >
                Submit Journal
              </Button>
            {/* </Item> */}
          </Grid>
          <Grid item xs={5}>
            {/* <Item>xs=8</Item> */}
          </Grid>
        </Grid>
        {/* <button className="submit"
          type="button"
          variant="contained"
          onClick={() => handleSubmit()}
        >
          Submit Journal
        </button> */}
      </section>

      <Footer />

      {/* <Journal props={feeling} ></Journal> */}
    </>
  );
};

export default AddJournal;


