import React from 'react'

export default function HeaderPart({theme}) {
    const {isDark,setIsDark} = theme
    return (
        <>
            <div className={`navbar ${isDark? 'navbar-dark': ''}`}>
                <h2>Where in the world?</h2>
                <div className='theme-changer' onClick={() => {
                    setIsDark(!isDark)
                    localStorage.setItem('isDarkMode',!isDark)
                }}>
                    <i className={`fa-regular fa-${isDark? 'sun':'moon'}`}></i>
                    <p>{isDark?"Light":"Dark"} Mode</p>
                </div>
            </div>

        </>
    )
}
