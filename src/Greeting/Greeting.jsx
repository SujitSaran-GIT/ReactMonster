import React from 'react'

function Greeting(){
    const name = "JOHN"
    const date = new Date()
    const time = date.getHours()
    const today = date.getDate()
    return(
        <>
        <div>
            <h1>Hello {name.toLowerCase()}, How are you?</h1>
            <p>{time}</p>
            <p>{today}</p>
        </div>
        </>
    )
}
export default Greeting