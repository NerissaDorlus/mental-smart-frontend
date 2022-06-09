import happy from "../assets/happy.png";
import overwhelmed from "../assets/overwhelmed.png";
import sad from "../assets/sad.png";
import anxious from "../assets/anxious.png";

import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
// import { Button } from "@mui/material";

const AddJournal = () => {
  const name = "ElieSkye";

  const [feeling, setFeeling] = useState("");
  const [willTalkTo, setWillTalkTo] = useState("");
  const handleChange = (e) => {
    setWillTalkTo(e.target.value);
  };
  const handleSubmit = () => {
    fetch("http://localhost:3030/journals", {
      method: "POST",
      body: JSON.stringify({
        feeling,
        willTalkTo,
      
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.text())
      .catch(console.error);
  };
  return (
    <header>
      <h>Welcome,{name}</h>
      <header />
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
        Submit Message
      </button>        
      </FormControl>

      {/* <Journal props={feeling} ></Journal> */}
    </header>
  );
};

export default AddJournal;


