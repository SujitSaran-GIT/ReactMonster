import React from 'react'

const ComponentOne = ({numbers,onClickHandler}) => {

    const handleClick = () => onClickHandler();
  return (
    <div>
      <p>{numbers}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default ComponentOne
