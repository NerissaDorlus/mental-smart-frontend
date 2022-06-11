import { useEffect, useState } from "react";
import UserJournals from "./UserJournals";


const TeamView = () => {
    const [journals, setJournals] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3030/journals")
        .then((response) => response.json())
        .then((data) => setJournals(data))
        .catch(console.error);
        
    }, []);
    return(
        <>
           <h1>Team View</h1>
           {!journals ? (
               <h2>Loading Journals ...</h2>
           ):(
               <div>
                <UserJournals journals={journals} userEmail />
            </div>
        
           )}

            
        </>
        
    )
}

 export default TeamView;


