import React, { useState } from 'react'
import MyContext from './MyContext'

const DataState = ({children}) => {
  const person = {
    name: "Chintan Patel",
    age:21,
  }

  const [darkMode, setDarkMode] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <MyContext.Provider value={{person,darkMode,setDarkMode,count,setCount}}>
     {children}
    </MyContext.Provider>
  )
}

export default DataState