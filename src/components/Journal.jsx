import React, { useEffect, useState } from "react";

const Journal = () => {
    const [journals, setJournals] = useState("");

    useEffect(() => {
        fetch("http://localhost:3030/journals",{
            method: "GET",
            headers: {
                "Content-Type":"application/json"
            }
        })
        .then((response) => response.json())
        .then((data) => setJournals(data))
        .catch(console.error);
        console.log(journals)
    }, [journals]);
    const name = "Elie Skye"
    return(
        <>
           <h1>Hello, {name}</h1>
           {!journals ? (
               <h2>Loading Content ....</h2>
           ):(
            <>
                {/* <h2>Journal</h2> */}
                {journals.map((journal) => {
                    return <p key={journal.id}>{journal.feeling} {journal.willTalkTo}</p>
                })}
            </>

           )}
        </>
        
    )
}

 export default Journal;
