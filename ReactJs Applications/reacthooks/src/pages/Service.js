import React, { useContext } from 'react'
import MyContext from '../context/MyContext'
import UseStateCounter from '../components/UseStateCounter'

const Service = () => {
  
  const context = useContext(MyContext)
  const { darkMode } = context
  return (
    <div className={`service p-3 ${darkMode?"darkmode":""}`} >
    <UseStateCounter/>
    </div>
  )
}

export default Service