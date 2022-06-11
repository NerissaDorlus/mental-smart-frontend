import Journal from "./Journal";

const UserJournals  = ({journals, userEmail}) => {
    return (
        <>
        <h2>{userEmail}</h2>

             <Avatar alt="User name" src="    " />
             
                  {journals.map((journal) => {
                    return <Journal journal={journal}/>

                })}

        {/* filter by user and map journal for that user */}

        {/* map of journal  */}
        </>
    )
}





export default UserJournals;    