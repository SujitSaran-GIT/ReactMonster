import React, { useState } from 'react'

// Use useState to manage an array of objects, where each object represents a shopping item with name and quantity
// Initialize the state with an empty array 
// Create form to add new items to the list

const ShoppingList = () => {
    const [data,setData] = useState([])
    const [inputValue,setInputValue] = useState({
        name: "",
        quantity: 0
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        if (inputValue.name.trim() && inputValue.quantity) {
            setData([...data,inputValue])
            setInputValue({name: "", quantity: 0})
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        setInputValue((prevValue) => (
            {
                ...prevValue,
                [name]: value
            }
        ))
    }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <p>Shopping list</p>
        <input type="text" name='name' value={inputValue.name} onChange={handleChange}/>
        <input type="number" name='quantity' value={inputValue.quantity} onChange={handleChange}/>
        <button type='submit'>Submit</button>
      </form>

      <ul>
        {
            data.map((datas,index) => (
                <li key={index}>{datas.name}: {datas.quantity}</li>
            ))
        }
      </ul>
    </div>
  )
}

export default ShoppingList
