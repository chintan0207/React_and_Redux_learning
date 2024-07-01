import React from 'react'

const Button = ({ imgName, clickHandler, children }) => {
    return (
        <button className='H6n1Ga_buttonBg' onClick={clickHandler} title={children}>
            <i className={imgName} alt={children}/>
        </button>
    )
}

export default Button