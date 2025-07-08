import React, { useState } from 'react'
// use useState to manage an object containing name nad age
// Provide input fields to update the name and age

const Profile = () => {
    const [data,setData] = useState({
        name:"",
        age: 0
    })


    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`Data submitted: Having Name: ${data.name} & Age: ${data.age}`)
    }

    const handleChange = (event) => {
        const {name,value} = event.target
        setData((prevData) => (
            {
                ...prevData,
                [name]: value
            }
        ))
    }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name='name' value={data.name} placeholder='Enter your name' onChange={handleChange}/>
        <input type="number" name='age' value={data.age} placeholder='Enter your age' onChange={handleChange}/>
        <button type='submit'>Submit</button>
      </form>

      <h2>Profile Details</h2>
      <p>Name: {data.name}</p>
      <p>Age: {data.age}</p>
    </div>
  )
}

export default Profile
