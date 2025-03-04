import React from 'react'
import ProfileCard from './ProfileCard'

function StyleCard() {

  return (
    <>
    <div style={{
        backgroundColor : "lightblue",
        padding : "15px",
        borderRadius : "8px",
        textColor : "darkblue"
    }}>
      <h1>Inline Style Challenge</h1>
      <p>This is my style card Challenge page</p>
    </div>

    <ProfileCard/>
    </>
  )
}
export default StyleCard
