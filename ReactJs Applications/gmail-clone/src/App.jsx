/* eslint-disable no-unused-vars */
import './App.css'
import Navbar from './Components/Navbar'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Body from './Components/Body'
import Inbox from './Components/Inbox'
import Mail from './Components/Mail'
import SendEmail from './Components/SendEmail'
import Login from './Components/Login'
import { useSelector } from 'react-redux'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Inbox />
      },
      {
        path: "/mail/:id",
        element: <Mail />
      },
    ]
  }
])

function App() {
  const {authUser} = useSelector(store => store.appSlice)
  return (
    <>
      {
       !authUser ? <Login /> :
          <>
            <div className='bg-[#f8fafc] w-screen h-screen overflow-hidden '>
              <Navbar />
              <RouterProvider router={router} />
              <div className='absolute w-[30%] bottom-0 right-20 z-10'>
                <SendEmail />
              </div>
            </div>
          </>
      }

    </>
  )
}

export default App
