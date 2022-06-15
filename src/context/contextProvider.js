import  {createContext,  useState} from "react"

export const UserContext = createContext();


const UserContextProvider = ({children}) => {
    const {Provider} = UserContext;
    const [user, setUser] = useState();
    const [jwt, setJwt] = useState("");

    const value = {
        user,
        setUser,
        jwt, 
        setJwt
    
    };
    return <Provider value={value}>{children}</Provider>;
}

export default UserContextProvider;