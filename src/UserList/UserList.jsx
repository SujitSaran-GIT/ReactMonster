import React from 'react'
import ProductList from './ProductList'

function UserList(){
    const users = [
        {
            id : 1,
            name : "Alice",
            age : 25
        },
        {
            id : 2,
            name : "Bob",
            age : 23
        },
        {
            id : 3,
            name : "Charlie",
            age : 26
        }
    ]

    return(
        <>
        <h1>User's List</h1>
        <div>
            { users.map((user) => (
                <ul key={user.id}>
                    <li>User's Name: {user.name}</li>
                    <li>User's Age: {user.age}</li>
                </ul>
            )) }
        </div>
        <ProductList/>
        </>
    )
}
export default UserList