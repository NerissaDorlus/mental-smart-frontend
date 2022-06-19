import Journal from "./Journal";
import "../styles/user-journal.css"






const UserJournals  = ({journals, userEmail, userName}) => {
    return (
        <div className="userjournal">
        <h3>Team Member: {userName}</h3>

             {/* <Avatar alt="Users name" src="    " /> */}
             
                  {journals.map((journal) => {
                    return <Journal key={journal.id} journal={journal}/>

                })}
        </div>
    )
}





export default UserJournals;    