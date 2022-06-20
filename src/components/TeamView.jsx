import { useEffect, useState, useContext } from "react";
import UserJournals from "./UserJournals";
import { useNavigate } from "react-router-dom";
import Footer from "../common/Footer";
import { Button, Grid} from "@mui/material";
// import { Container } from "@mui/system";
import "../styles/team.css"
import config from "../config"
import  {UserContext} from "../context/ContextProvider"
import { Container } from "@mui/system";


const TeamView = () => {
    const [userJournals, setUserJournals] = useState();
    const navigate = useNavigate()
    const { jwt } = useContext(UserContext);

    useEffect(() => {
        fetch(config.apiUrl, {
          method: "GET", 
          headers:  {
            Authorization: jwt
          }
        })
        .then((response) => response.json())
        .then(newJournals => {

            
            const emailJournalMap = {}
            newJournals.forEach(journal => {   
              //creating list of journals by user          

                if(!emailJournalMap[journal.email]){
                    emailJournalMap[journal.email] = []
                }
                emailJournalMap[journal.email].push(journal)
            });
            setUserJournals(emailJournalMap)
        })
        .catch(console.error);
        
    }, []);
     return (
       <Container>
         <h1 className="team-title">Team View</h1>
         {!userJournals ? (
           // <Loading />
           <h2>Loading Journals ...</h2>
         ) : (
           // <Container className="team-display" fixed maxWidth="md">
           //    {Object.keys(userJournals).map((email) => (
           //      <UserJournals key={email} journals={userJournals[email]} userName={userJournals[email][0].displayName} userEmail={email} />
           //    ))}
           //  </Container>           
           <Grid container justifyContent="space-around">
             {Object.keys(userJournals).map((email) => (
               <Grid item xs={4} key={email}>
                 <UserJournals
                   key={email}
                   journals={userJournals[email]}
                   userName={userJournals[email][0].displayName}
                   userEmail={email}
                 />
               </Grid>
             ))}
           </Grid>
         )}
         <Grid container mt={4} justifyContent="center" alignItems="center">
           <Button variant="contained" onClick={() => navigate("/add-journal")}>
             Return to journal
           </Button>
         </Grid>
         <Footer />
       </Container>
     );
}

 export default TeamView;


