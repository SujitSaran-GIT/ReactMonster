import React from 'react'

const MouseEvents = () => {
  return (
    <>
      <button onClick={() => console.log("onClick Function triggered")}>Click Me</button>
      <button onDoubleClick={() => console.log("onDoubleClick Event Occured")}>Double Click Me</button>
      <button onDoubleClickCapture={() => console.log("onDoubleClickCapture Event Occured")}>Double Click Capture</button>
    </>
  )
}

export default MouseEvents
