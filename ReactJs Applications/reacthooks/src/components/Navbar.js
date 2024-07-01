import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import MyContext from '../context/MyContext';

const Navbar = () => {
    const context = useContext(MyContext);
    const {darkMode,setDarkMode} = context
    return (
        <>
            <nav className={`dflex ${darkMode ? 'darkmode':''}`}>
                <ul className={`list dflex ${darkMode ? '':'listlink'} `}>
                    <li>
                       <h6 className=''><Link className="nav-li" to='/'>Home</Link></h6> 
                    </li>
                    <li>
                      <h6><Link className="nav-li" to='/service'>Service</Link></h6>  
                    </li>
                </ul>
                <div className='dark-light-mode dflex' onClick={() => setDarkMode(!darkMode)}>
                    <i className={`fa-solid fa-${darkMode ? 'moon':'sun'}`}></i>
                    <h6>{darkMode ? "LightMode":"DarkMode"}</h6>
                </div>
            </nav>


        </>
    )
}

export default Navbar