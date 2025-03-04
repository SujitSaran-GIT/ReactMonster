import React from 'react'
import { FaCartArrowDown } from 'react-icons/fa'
import { FaComputer } from 'react-icons/fa6'
import StyleCard from '../StyleChallenge/StyleCard'

const Styles = () => {
    // Instead of writting this we have to create an object 
    const styles = {
        color: 'black',
        backgroundColor: 'teal',
        padding: "5px"

    }
    return (
        <>
            <h1 style={{ color: 'red', backgroundColor: 'blue', padding: '5px' }}>Inline Style</h1>

            <h1 style={styles}>Style by creating an object</h1>

            {/* Adding React Icons */}
            <div>
                <FaCartArrowDown />
                <span>My Cart</span>
            </div>

            <div>
                <FaComputer/>
                <span>My computer</span>
            </div>

            <StyleCard/>
        </>
    )
}

export default Styles
