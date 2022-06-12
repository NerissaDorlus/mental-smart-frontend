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
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useNavigate } from "react-router-dom";

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
        // inputedEmail: "jane.pierre@gmail.com"
      
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
    
      <h3>How are you feeling?</h3>
      <section>
        <img
          onClick={() => setFeeling("happy")}
          src={happy}
          alt="happiness emoji"
          className="emoji"
        />
        <img
          onClick={() => setFeeling("sad")}
          src={sad}
          alt="sad emoji"
          className="emoji"
        />
        <img
          onClick={() => setFeeling("anxious")}
          src={anxious}
          alt="anxious emoji"
          className="emoji"
        />
        <img
          onClick={() => setFeeling("overwhelmed")}
          src={overwhelmed}
          alt="overwhelmed emoji"
          className="emoji"
        />
        {console.log(feeling)}
      </section>
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">
          Want to talk about it?
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={willTalkTo}
          onChange={handleChange}
        >
          <FormControlLabel value="No" control={<Radio />} label="No" />
          <FormControlLabel value="to HR" control={<Radio />} label="to HR" />
          <FormControlLabel
            value="to Manager"
            control={<Radio />}
            label="to Manager"
          />
          {console.log(willTalkTo)}
        </RadioGroup>
        <button type="button" variant="contained" onClick={() => handleSubmit()}>
        Submit Journal
      </button>        
      </FormControl>
      <Footer />
      

      {/* <Journal props={feeling} ></Journal> */}
    </>
  );
};

export default AddJournal;


