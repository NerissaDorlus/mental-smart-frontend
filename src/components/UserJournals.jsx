import Journal from "./Journal";
import "../styles/userjournal.css"

const UserJournals  = ({journals, userEmail}) => {
    return (
        <div className="userjournal">
        <h3>Hi {userEmail}</h3>

             {/* <Avatar alt="User name" src="    " /> */}
             
                  {journals.map((journal) => {
                    return <Journal key={journal.id} journal={journal}/>

                })}


        </div>
    )
}





export default UserJournals;    