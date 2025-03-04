import React from 'react'
import PersonProps from '../Person/PersonProps'
import ProductProps from '../Person/ProductProps'
import CardProps from '../Person/CardProps'
import PasswordProps from './PasswordProps'

const UserProps = (userdetails) => {
    console.log(userdetails)
    const hobby = userdetails.hobbies
    console.log(hobby)

    const name = ["SUJIT","SUMIT","BIRAJA"]
    console.log(name)
  return (
    <>
      <section>
        <img src={userdetails.img} alt={userdetails.name} />
        <h1>Name : {userdetails.name}</h1>
        <h2>Age : {userdetails.age}</h2>
        <h3>Is married : {userdetails.isMarried ? <span>He is married</span> : <span>Still Find for a partner</span>}</h3>
        <h4>Hobbies : {hobby.map((hobb) => (
            <ul key={Math.random()}>
                <li>{hobb}</li>
            </ul>
        ))}</h4>
        <h4>Student Names</h4>
        <h5>
          {name.map((nam) => (
            <ul key={Math.random()}>
              <li>{nam}</li>
            </ul>
          ))}
        </h5>
      </section>
      <PersonProps/>
      <ProductProps/>
      <CardProps/>
      <PasswordProps/>
    </>
  )
}

export default UserProps
