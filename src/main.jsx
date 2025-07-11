import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import Home from './Componets/Home.jsx'
import Product from './Componets/product.jsx'
import About from './Componets/about.jsx'
import Contact from './Componets/contact.jsx'
import SignUp from './Componets/singUp.jsx'
import Login from './Componets/login.jsx'
import AddToCart from './Componets/Others/addTocart.jsx'
import ProtectedRoute from "./Componets/ProtectedRoute.jsx"
import Detail from './Componets/detail.jsx'
import Payment from './Componets/payment.jsx'


const routers = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    )
  },
  {
    path: "products/:category",
    element: (
      <ProtectedRoute>
        <Product />
      </ProtectedRoute>

    )
  },
  {
    path: "/details-form",
    element: (
      <ProtectedRoute>
        <Detail />
      </ProtectedRoute>

    )
  },
  {
    path: "/payment",
    element: (
      <ProtectedRoute>
        <Payment />
      </ProtectedRoute>

    )
  },
  {
    path: "products",
    element: (
    <ProtectedRoute>
      <Product />
    </ProtectedRoute>
    )
  },
  {
    path: "Contact",
   element: (
    <ProtectedRoute>
      <Contact />
    </ProtectedRoute>
    )
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "signUp",
    element: <SignUp />
  },
  {
    path: "addToCart",
   element: (
    <ProtectedRoute>
      <AddToCart />
    </ProtectedRoute>
    )
  },
   {
    basename: "/KokanBazar" // ✅ REQUIRED for GitHub Pages
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={routers} />
)
