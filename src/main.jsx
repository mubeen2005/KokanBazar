import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider,Route } from 'react-router-dom'
import Home from './Componets/Home.jsx'
import Product from './Componets/product.jsx'
import About from './Componets/about.jsx'
import Contact from './Componets/contact.jsx'
import SignUp from './Componets/singUp.jsx'
import Login from './Componets/login.jsx'
import AddToCart from './Componets/Others/addTocart.jsx'


  const routers = createBrowserRouter([
    {
      path:"/",
      element:<Home />
    },
    {
      path:"product",
      element:<Product />
    },
    {
      path:"About",
      element:<About />
    },
    {
      path:"Contact",
      element:<Contact />
    },
    {
      path:"login",
      element:<Login />
    },
    {
      path:"signUp",
      element:<SignUp />
    },
    {
      path:"addToCart",
      element:<AddToCart />
    },
  ])

createRoot(document.getElementById('root')).render(
 <RouterProvider router={routers} />
)
