import happy from "../assets/happy.png"
import angry from "../assets/angry.png"
import anxious from "../assets/anxious.png"
import overwhelmed from "../assets/overwhelmed.png"
import { useEffect, useState } from "react"

const AddJournal = () =>{

    const [feeling, setFeeling] = useState()
    const name = "ElieSkye"


    return(
   <>
        <h1>Welcome,{name}</h1>
        <h3>How are you feeling?</h3>
    
        <img onClick={() => setFeeling("happy")} src={happy} alt="happiness emoji" className="emoji" />
        <img onClick={() => setFeeling("angry")} src={angry} alt="angry emoji" className="emoji" />
        <img onClick={() => setFeeling("anxious")} src={anxious} alt="anxious emoji" className="emoji" />
        <img onClick={() => setFeeling("overwhelmed")} src={overwhelmed} alt="overwhelmed emoji" className="emoji" />

        <h3>Want to talk to?</h3>

        
    

        {/* <button class="button button3">🤯</button>
        <button class="button button4">😠</button> */} 



    </>
    )
}

export default AddJournal;