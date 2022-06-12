const Journal = ({journal}) => {
    const journalEmoji = {
        anxious: "😬",
        happy: "😃",
        sad: "😔", 
        overwhelmed: "🤯"

    }
    return (
      <p key={journal.id}>
        {" "}
        {journal.entryDate} {journalEmoji[journal.feeling]}{" "}
      </p>
    );
//display feeling and date

}

export default Journal;