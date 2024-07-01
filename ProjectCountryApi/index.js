import {createRoot} from "react-dom/client"
import App from "./App"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./Components/Home"
import Error from "./Components/Error"
import Contact from "./Components/Contact"
import CountryDetails from "./Components/CountryDetails"
import "./sass/main.css"


const router = createBrowserRouter([
    {
        path:'/',
        element:<App />,
        errorElement:<Error/>,
        children: [
            {
              path: '/',
              element: <Home />,
            },
            {
              path: '/contact',
              element: <Contact />
            },
            {
              path: '/:country',
              element: <CountryDetails />,
            },
          ],
    },

])

const root = createRoot(document.getElementById("root"))

root.render(<RouterProvider router={router}/>)
