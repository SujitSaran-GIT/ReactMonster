import React from 'react'

const ComponentTwo = ({numbers,onClickHandler}) => {
    const handleClick = () => onClickHandler()
  return (
    <div>
      <p>{numbers}</p>
      <button onClick={handleClick}>Decrease</button>
    </div>
  )
}

export default ComponentTwo
