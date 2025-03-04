import React, { useState } from 'react'

const TransitionEvents = () => {
    const [expanded, setExpanded] = useState(false)
    return (
        <>
            <button onClick={() => setExpanded(!expanded)}>Toggle Size</button>
            <div
                onTransitionStart={() => console.log("Transition Started")}
                onTransitionEnd={() => console.log("Transition Ended")}
                onTransitionCancel={() => console.log("Transition Cancelled")}
                onTransitionRun={() => console.log("Transition Run")}
                style={{
                    width: expanded ? "200px" : "100px",
                    height: "100px",
                    backgroundColor: "blue",
                    transition: "width 2s ease-in-out",
                    marginTop: "10px",
                }}
            />
        </>
    )
}

export default TransitionEvents
