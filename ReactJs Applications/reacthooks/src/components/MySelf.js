import React, { useContext } from 'react'
import MyContext from '../context/MyContext'

const MySelf = () => {
    const context = useContext(MyContext)
    const { person,darkMode } = context

    return (
        <>
            <div className={`card ${darkMode ? "darkmodel":""}`}>
                <div className="card-body">
                    <h4 className="card-title">{person.name}</h4>
                    <p className="card-text">My name is {person.name}. I am {person.age} year old.</p>
                </div>
            </div>

        </>
    )
}

export default MySelf