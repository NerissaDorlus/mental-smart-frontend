import React from "react"
import { useContext } from "react"
import  {UserContext} from "../context/ContextProvider"





const Hero = () =>{
    const { user } = useContext(UserContext);

    return (
        <h1>Welcome, {user.displayName}</h1>
    )
}

export default Hero;
