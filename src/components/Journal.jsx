import { useEffect, useState } from "react";



const Journal = () => {
    const [journals, setJournals] = useState("");

    useEffect(() => {
        fetch("http://localhost:3030/journals")
        .then((response) => response.json())
        .then((data) => setJournals(data))
        .catch(console.error);
        console.log(journals)
    }, []);
    const name = "Elie Skye"
    return(
        <>
           <h1>Hello, {name}</h1>
           {!journals ? (
               <h2>Loading Content ....</h2>
           ):(
               <h2>
                {journals.map((journal) => {
                    return <p key={journal}>{journal.feeling} {journal.willTalkTo}</p>
                })}
            </h2>
        
           )}

            
        </>
        
    )
}

 export default Journal;


