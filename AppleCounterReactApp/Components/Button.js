import React from 'react'

const Button = ({ imgName,arrowName, clickHandler }) => {
    return (
        <button onClick={clickHandler} title={arrowName}>
            <i className={imgName} alt={arrowName}/>
        </button>
    )
}

export default Button