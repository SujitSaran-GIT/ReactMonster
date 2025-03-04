import React from 'react'
import UserStatus from './UserStatus'

function Temperature(temp) {
    return(
        
        <div>
            <h1 style={{color:"red"}}>Weather Checking</h1>
            <hr />
            {temp<15 ? <h4>It is cold outside</h4>: temp<=25 ? <h4>it is nice outside</h4>:<h4>It is hot outside</h4>}
        </div>
    )
}

function Weather(){
    return(
        <>
        <Temperature temperature = {30}/>
        <UserStatus/>
        </>
    
    )
}

export default Weather
