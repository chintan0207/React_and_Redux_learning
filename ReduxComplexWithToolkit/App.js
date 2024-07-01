import React, { useState } from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Alert from './components/Alert'

export default function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message) =>{

    setAlert({
      msg: message,
    })

    setTimeout(() =>{
       setAlert(null)
    },2000)
  } 

  return (
    <>
    <Header showAlert={showAlert}/>
    <Alert alert={alert}/>
    <Outlet showAlert={showAlert} />
    </>
  )
}
