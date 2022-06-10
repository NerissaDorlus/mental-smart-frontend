const Journal = ({journal}) => {
    return(
        <h2>
                <p key={journal}> {journal.date} {journal.feeling} {journal.willTalkTo} </p>
            </h2>
    )
//display feeling and date

}

export default Journal;