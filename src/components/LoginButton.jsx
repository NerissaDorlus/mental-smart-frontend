import app from "../secret/secret.js"
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { UserContext } from "../context/ContextProvider.jsx";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Button } from "@mui/material";


const LoginButton = () => {
    const navigate = useNavigate();

    const {setUser, setJwt} = useContext(UserContext)

    const handleGoogleLogin = () => {

        const auth = getAuth(app);
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
        .then((res) => {

            const {displayName, email} =  res.user
            setUser({ displayName, email });
            const credential = GoogleAuthProvider.credentialFromResult(res);
            setJwt(credential.idToken);
            console.log("Creds", credential)
            console.log("user", res)

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
