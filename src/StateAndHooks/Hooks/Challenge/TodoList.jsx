import React, { useState } from 'react'

// Create a file called TodoList.jsx
// use useState to manage an array of todo item
//      initialize the state with an empty array
//      create a form to add new todo items to the list
//      Diaplay the list of todo items

const TodoList = () => {
    const [todoitem, setTodoitem] = useState([])
    const [inputValue, setInputValue] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        if (inputValue.trim()) {
            setTodoitem([...todoitem,inputValue])
            setInputValue("")
        }
    }
    const handleChange = (event) => {
        setInputValue(event.target.value)
    }
    return (
        <div>
            <p>Place your items: </p>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputValue} placeholder='Add new todo' onChange={handleChange}/>
                <button type='submit'>Add todo</button>
            </form>

            <ul>
                {todoitem.map((todo,index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList
