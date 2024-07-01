import React, { useContext } from 'react'
import MyContext from '../context/MyContext'
import MySelf from '../components/MySelf'
import UseStateCounter from '../components/UseStateCounter'

const Home = () => {
  const context = useContext(MyContext)
  const { darkMode } = context

  return (
    <div className={`home row g-0  p-3 ${darkMode ? "darkmode" : ""}`}>
      <div className='col-md-4 p-2'>
        <MySelf />
      </div>
      <div className='col-md-4 p-2'>
        <UseStateCounter />
      </div>
      <div className='col-md-4 p-2'>
        <MySelf />
      </div>
      <div className='col-md-4 p-2'>
        <UseStateCounter />
      </div>

    </div>
  )
}

export default Home