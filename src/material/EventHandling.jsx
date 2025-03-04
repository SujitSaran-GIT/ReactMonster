import React from 'react'
import MouseEvents from '../EventHandling/MouseEvents'
import TransitionEvents from '../EventHandling/TransitionEvents'

const Button = () => {
    return(
        <>
        <button onClick={() => alert("Clicked Successfully")}>Click Here</button>
        </>
    )
}

const Copy = () => {
    return(
        <>
        <p onCopy={() => alert("Copied")}>I am sujit saran</p>
        </>
    )
}

const Move = () => {
    return(
        <>
        <p onMouseMove={() => alert("Mousemove event occured")}>Mouse Hover Event Triggered</p>
        </>
    )
}

const EventHandling = () => {
  return (
    <>
      <Button/>
      <Copy/>
      <Move/>
      <MouseEvents/>
      <TransitionEvents/>
    </>
  )
}

export default EventHandling
