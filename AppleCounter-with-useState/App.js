import React from 'react'
import AppleCouter from './Components/AppleCouter'
import Counter from './Counter'
import "./App.css"

const App = () => {
  return (
    <div>
          <Counter userName = "Chintan"/>
          <AppleCouter />
    </div>
  )
}

export default App