import React, { useEffect, useState } from 'react'
import HeaderPart from './Components/HeaderPart'
import "./sass/main.css"
import { Outlet } from 'react-router-dom'

const App = () => {

const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')));
  return (
    <>
      <HeaderPart theme ={{isDark,setIsDark}} />
      <Outlet context={[isDark,setIsDark]}/>
    </>
  )
}

export default App