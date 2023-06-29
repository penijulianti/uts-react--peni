import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

import Member from './page/Member.jsx'
import About from './page/About.jsx'

import './index.css'

const alamat = createBrowserRouter([
  {
    element:<App />,
    children:[
      {
        path:"/",
        element:<Member/>
      },
      {
        path:"/about",
        element:<About/>
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={alamat}/>
    
  </React.StrictMode>,
)
