import React, { useEffect, useState } from 'react'

const Example = () => {
    const [name,setName] = useState(() => {
        const savedName = localStorage.getItem("name")
        return savedName ? JSON.parse(savedName) : ""
    })

    const handleChange = (event) => {
        setName(event.target.value)
    }

    useEffect(() => {
        localStorage.setItem('name',JSON.stringify(name))
    },[name])

    const handleClear = () => {
        setName("")
    }
  return (
    <div>
      <p>My name is:{name}</p>

      <input type="text" placeholder='Enter your name' value={name} onChange={handleChange}/>

      <button onClick={handleClear}>Clear value</button>
    </div>
  )
}

export default Example
