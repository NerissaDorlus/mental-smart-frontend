import { useEffect, useState } from "react";
import UserJournals from "./UserJournals";
import { useNavigate } from "react-router-dom";
import Footer from "../common/Footer";
import { Button, Grid } from "@mui/material";
import { Container } from "@mui/system";


const TeamView = () => {
    const [userJournals, setUserJournals] = useState();
    const navigate = useNavigate()

    useEffect(() => {
        fetch("https://mental-smart.web.app/journals")
        .then((response) => response.json())
        .then(newJournals => {

            
            const emailJournalMap = {}
            newJournals.forEach(journal => {             

                if(!emailJournalMap[journal.email]){
                    emailJournalMap[journal.email] = []
                }
                emailJournalMap[journal.email].push(journal)
            });
            console.log(emailJournalMap)
            setUserJournals(emailJournalMap)
        })
        .catch(console.error);
        
    }, []);
     return (
       <>
         <h1>Team View</h1>
         {!userJournals ? (
           <h2>Loading Journals ...</h2>
         ) : (
          <Container fixed maxWidth="md">
           <Grid     
           container
           spacing={3}
           alignContent={"center"}
           gridTemplateColumns="repeat(3, 2fr)"
           gap="100px"
           maxWidth="900px"
           display="grid"
           flex-wrap="wrap"
           padding={"50px"}
           >
             {Object.keys(userJournals).map((email) => (
               <UserJournals key={email} journals={userJournals[email]} userEmail={email} />
             ))}
           </Grid>
           </Container>
         )}
               <Button variant="contained" onClick={() => navigate("/add-journal")}>Return to journal</Button>

          {/* <button type="button" variant="contained" onClick={() => navigate("/add-journal")}>
        Add Journal
      </button>     */}
      <Footer  />
       </>
     );
}

 export default TeamView;


