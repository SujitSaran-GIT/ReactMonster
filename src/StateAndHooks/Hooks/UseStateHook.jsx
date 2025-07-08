import React from 'react'
import { useState } from 'react'
import ComponentOne from './ComponentOne'
import ComponentTwo from './ComponentTwo'
import Example from './Example'
import Counter from './Challenge/Counter'
import TodoList from './Challenge/TodoList'
import Profile from './Challenge/Profile'
import ShoppingList from './Challenge/ShoppingList'

const UseStateHook = () => {

    // Updating the array

    const [counter, setCounter] = useState(0)

    const [friends, setFriends] = useState(["SUJIT", "SUMIT"])

    const increase = () => {
        setCounter(counter + 1)
    }

    const decrease = () => {
        counter == 0 || counter < 0 ? setCounter(0) : setCounter(counter - 1)
    }

    const addOneFriend = () => {
        setFriends([...friends, "BIRAJA"])
    }

    const removeOneFriend = () => {
        setFriends(friends.filter(name => name !== "SUJIT"))
    }

    const updateOneFriend = () => {
        setFriends(friends.map((friend) => (
            friend === "SUJIT" ? "SUJIT SARAN" : friend
        )))
    }

    // Updating the objects

    const [movies, setMovies] = useState({
        title: "Siddhat",
        ratings: 7,
    })

    const changeRating = () => {
        // const copy = {
        //     ...movies,
        //     ratings : 5
        // }
        setMovies({ ...movies, ratings: 5 })
    }

    // Updating the array of Objects
    const [peoples, setPeoples] = useState(
        [
            {
                id: 1,
                name: "SUJIT"
            },
            {
                id: 2,
                name: "SUMIT"
            },
            {
                id: 3,
                name: "BIRAJA"
            },
            {
                id: 4,
                name: "MANISHA"
            },
        ]
    )
    const changeName = () => {
        setPeoples(peoples.map((p) => (
            p.id === 1 ? { ...p, name: "Removed" } : p
        )))
    }

    const [numbers, setNumbers] = useState(0)
    return (
        <>

            {/* Updating the array using useState hook */}
            <p>{counter}</p>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>

            <div>

                {
                    friends.map((num) => (
                        <ul key={Math.random()}>
                            <li>{num}</li>
                        </ul>
                    ))
                }
            </div>

            {/* Add one friend into the array */}
            <button onClick={addOneFriend}>Add One Element</button>

            {/* Removing one friend from the array */}
            <button onClick={removeOneFriend}>Remove One Friend</button>

            {/* Updating one friend from the array */}
            <button onClick={updateOneFriend}>Update One Friend</button>

            {/* Updating the Object using useState hook */}
            <h1>{movies.title}</h1>
            <p>{movies.ratings}</p>

            {/* Button to change the ratings of the movie */}
            <button onClick={changeRating}>Change the ratings</button>

            {/* Updating the array of objects */}

            <div>
                <ul>
                    {peoples.map((people) => (
                        <li key={people.id}>
                            {people.id} - {people.name}
                        </li>
                    ))}
                </ul>
            </div>


            {/* Button to change the name */}
            <button onClick={changeName}>Change Name</button>

            <ComponentOne numbers={numbers} onClickHandler={() => setNumbers(numbers + 1)} />

            <ComponentTwo numbers={numbers} onClickHandler={() => setNumbers(numbers - 1)} />

            <Example />
            <Counter />
            <TodoList />
            <Profile />
            <ShoppingList />

        </>
    )
}

export default UseStateHook
