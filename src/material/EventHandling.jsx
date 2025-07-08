import React from 'react'
import MouseEvents from '../EventHandling/MouseEvents'
import TransitionEvents from '../EventHandling/TransitionEvents'
import UseStateHook from '../StateAndHooks/Hooks/UseStateHook'

const Button = () => {
  // Onclick Click Here Random numbers are generated
  const handleClick = () => {
    const numbers = Math.round(Math.random() * 10)
    alert(`Generated Numbers: ${numbers}`)
  }
    return(
        <>
        <button onClick={() => alert("Clicked Successfully")}>Click Here</button>

        <button onClick={handleClick}>Click Here to generate random numbers</button>

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
      <UseStateHook/>
    </>
  )
}

export default EventHandling
