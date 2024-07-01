import { useEffect, useState } from 'react'
import './App.css'
import Formcontext from './context/formcontext'
import Home from './pages/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import UpdateFormData from './components/UpdateFormData'
import Nopage from './pages/Nopage'
import Hooks from './pages/Hooks'

function App() {

  const name = "chintan"

  useEffect(() => {
    getAllFormData()
  });

  const [fData, setFData] = useState([]);

  const getAllFormData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/formdata', {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
        },
      })
      const result = await response.json();
      setFData(result)

    } catch (error) {
      console.error(error)
    }
  }

  const postFormData = async (formData) => {
    try {
      const response = await fetch('http://localhost:5000/api/formdata', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      const result = await response.json();
      console.log(result.success)

    } catch (error) {
      console.error(error)
    }
  }

  const updateFormDataById = async (id,formData) => {
    try {
      const response = await fetch('http://localhost:5000/api/formdata/' + id, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),

      })
      const res = await response.json();
      console.log(res)

    } catch (error) {
      console.error(error)
    }
  }

  const deleteFormDataById = async (id) => {
    try {
      const response = await fetch('http://localhost:5000/api/formdata/' + id, {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json",
        },
      })
      const res = await response.json();
      console.log(res)
    } catch (error) {
      console.error(error)
    }
  }

  const findFormDataById = async (id) => {
    try {
      const response = await fetch('http://localhost:5000/api/formdata/' + id, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
        },
      })
      const res = await response.json()
      return res
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Formcontext.Provider value={{ name, fData, postFormData, deleteFormDataById,updateFormDataById,findFormDataById}}>
       <BrowserRouter>
         <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/home' element={<Home/>}/>
         <Route path='/update/:id' element={<UpdateFormData/>}/>
         <Route path='/hooks' element={<Hooks/>}/>

         <Route path='*' element={<Nopage/>}/>
        </Routes>
       </BrowserRouter>
      </Formcontext.Provider>
    </>
  )
}

export default App
