import React from 'react'

function Person(props) {
  return (
    <>
     <h1>Name:{props.name}</h1> 
     <h1>Age:{props.age}</h1>
    </>
  )
}
export default Person