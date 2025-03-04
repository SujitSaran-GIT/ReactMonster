function TimeOfDay({isMorning,isAfternoon}){
    return(
        <>
        
        {
        isMorning ? <h4>Good Morning</h4> : isAfternoon ? <h4>Good Afternoon</h4> : <h4>Good Night</h4> 
        }
        </>
    )
}




function Greeting() {
    return(
        <>
        <h1>Times of the day</h1>
        <TimeOfDay isMorning={true} isAfternoon={true}/>
        <TimeOfDay isMorning={true} isAfternoon={false}/>
        <TimeOfDay isMorning={false} isAfternoon={true}/>
        <TimeOfDay isMorning={false} isAfternoon={false}/>
        </>
    )
}

export default Greeting