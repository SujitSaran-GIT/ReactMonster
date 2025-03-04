import React from 'react'
import UserList from '../UserList/UserList'

const Lists = () => {
    const nums = [1, 2, 3, 4, 5]

    const userInfo = [
        {
            username: "SUJIT SARAN",
            email : "sujitsaran16@gmail.com",
            address : "Jajpur"
        },
        {
            username: "SUMIT SARAN",
            email : "sumitsaran18@gmail.com",
            address : "Cuttack"
        },
        {
            username: "BIRAJA SARAN",
            email : "birajasaran20@gmail.com",
            address : "Khordha"
        },
        {
            username: "MANISHA SARAN",
            email : "manishasaran22@gmail.com",
            address : "Dhenkanal"
        }
    ]
    return (
        <>
            <h1>Lists In React</h1>
            <main>
                {nums.map((num) => (
                    <ul key={Math.random()}>
                        <li>{num}</li>
                    </ul>
                ))}
            </main>
            <main>
                {nums.map((num) => {
                    return(
                        <ul key={Math.random()}>
                            <li>
                                <h1>{num}</h1>
                            </li>
                        </ul>
                    )
                })}
            </main>
            <main>
                {userInfo.map((users) => (
                    <ol key={Math.random()}>
                        <li>Name: {users.username}</li>
                        <li>Email: {users.email}</li>
                        <li>Address: {users.address}</li>
                    </ol>
                ))}
            </main>
            {/* Destructure the code */}
            <main>
                { 
                userInfo.map(({username,email,address}) => (
                    <ul key={Math.random()}>
                        <li>{username}</li>
                        <li>{email}</li>
                        <li>{address}</li>
                    </ul>
                )) 
                }
            </main>
            <UserList/>
        </>
    )
}

export default Lists
