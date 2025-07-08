import React, { useState } from 'react'

function Counter () {
    const [value, setValue] = useState(0)
    const handleClick = () => {
        setValue(value + 1)
    }
    return (
        <>
        <p>{value}</p>
        <button onClick={handleClick}>Increase</button>
        </>
    )
}

export default Counter
