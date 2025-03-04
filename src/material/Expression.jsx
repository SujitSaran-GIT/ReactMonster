import React from 'react'

const Expression = () => {
    const myName = "SUJIT SARAN"
    const multiply = (a,b) => {
        return a+b
    }
    const special_class = "simple_class"
    return (
        <div>
            <h1>Expressions In React</h1>
            <p>2+2</p>
            <p>2+2={2 + 2}</p>
            <p>{myName}</p>
            <p>{multiply(10,20)}</p>
            <p className={special_class}>This is my special class</p>
            <p>My friends: {["Alex ","Bob ","Charlie "]} </p>
        </div>
    )
}

export default Expression
