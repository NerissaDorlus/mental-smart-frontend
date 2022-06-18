import app from "../secret/secret.js"
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { UserContext } from "../context/ContextProvider.jsx";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Button } from "@mui/material";
// import { initializeApp } from "firebase/app";


const connectAuth = () => {
    // const app = initializeApp(firebaseConfig);
    return getAuth(app);
}

const LoginButton = () => {
    const navigate = useNavigate();

    const {setUser} = useContext(UserContext)


    function handleGoogleLogin() {

        const auth = connectAuth();
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
        .then((res) => {
            setUser(res.user);
            navigate("/add-journal");
        })
        .catch(console.error)
    }

    return(

        <Button 
        className="login-button"
        variant="contained" 
        onClick={handleGoogleLogin}>Google Login</Button>
    )
}

export default LoginButton;
