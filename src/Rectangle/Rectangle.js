import React, { useState } from 'react'

const Rectangle = () => {
    const [changeBackground, setChangeBackground] = useState(true)
    const [showText, setShowText] = useState('')

    const handleClick = () => {
        setChangeBackground(!changeBackground)
        setShowText("Button Clicked")
    }

    return (
        <>
        <div className={changeBackground ? "rectangle" : "rectangle-green"}></div>
        <div className="text-center mt-4">
        <button onClick={handleClick} className="btn btn-lg btn-danger">Press</button>
        <p className="lead mt-3"> {showText} </p>
        </div>
        </>
    )
}

export default Rectangle
