import Journal from "./Journal";

const UserJournals  = ({journals, userEmail}) => {
    return (
        <>
        <h3>Hi {userEmail}</h3>

             {/* <Avatar alt="User name" src="    " /> */}
             
                  {journals.map((journal) => {
                    return <Journal key={journal.id} journal={journal}/>

                })}


        </>
    )
}





export default UserJournals;    