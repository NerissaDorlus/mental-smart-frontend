import Journal from "./Journal";

const UserJournals  = ({journals, userEmail}) => {
    return (
        <>
        <h2>Hi {userEmail}</h2>

             {/* <Avatar alt="User name" src="    " /> */}
             
                  {journals.map((journal) => {
                    return <Journal journal={journal}/>

                })}


        </>
    )
}





export default UserJournals;    