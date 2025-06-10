import React, { useState } from 'react';
import logo from '/public/logo1.png'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Nav = () => { 

  let [menu,setMenu] =useState(false)
  const navigate = useNavigate()


  return(
    <nav className=' w-full h-[125px] px-10 fixed bg-white z-10 max-[425px]:px-2  '>
      <div className='flex items-center justify-between py-2'>
        <ul className='flex gap-4 items-center max-[425px]:hidden'>
          <li><button className='  bg-transparent border-2 hover:bg-black hover:text-white  border-black px-5 py-1 font-medium   rounded-2xl'><Link to="/login">Sign In</Link></button></li>
          <li><button   className='bg-transparent border-2 hover:bg-black hover:text-white  border-black px-5 py-1 font-medium   rounded-2xl'><Link to="/signUp">Sign Up</Link></button></li>
        </ul>

        <div className='flex gap-5 max-[425px]:justify-between  max-[425px]:w-full'>
          <div className='bg-transparent border-2 border-black rounded-full flex px-2'>
            <input type="search" className='w-full h-full rounded-full px-3 py-1 bg-transparent outline-none' placeholder='Search Product...' />
            <button onClick={()=>{
              navigate("/product")
            }} className='active:scale-105'><i className="ri-search-line text-2
            xl  font-medium"></i></button>
          </div>
        <div className='flex'>
        <button onClick={()=>{navigate("/addToCart")}} className='active:scale-105'><i className="ri-shopping-cart-2-line text-2xl font-medium"></i></button>
        <div>0</div>
        </div>
        </div>
      </div>
      <div className='bg-black h-[2px] w-full'></div>

      <div className=' w-full h-[50%] flex items-center justify-between'>
        <div className=' flex items-center justify-center'>
         <h1 className='text-4xl font-extrabold max-[425px]:text-2xl '>E-SHOP</h1>
        </div>

        <ul className='flex items-center gap-5 max-[425px]:hidden'>
          <li className='font-medium text-lg hover:border-b-2 hover:cursor-pointer border-black'><Link to="/">Home</Link></li>
          <li className='font-medium text-lg hover:border-b-2 hover:cursor-pointer border-black'><Link to="/product">Product</Link></li>
          <li className='font-medium text-lg hover:border-b-2 hover:cursor-pointer border-black'><Link to="/About">About</Link></li>
          <li className='font-medium text-lg hover:border-b-2 hover:cursor-pointer border-black'><Link to="/Contact">Contact</Link></li>
        </ul>

        <button onClick={()=>setMenu(!menu)}  className='hidden  max-[425px]:block'><i className="ri-menu-line text-xl"></i></button>
      </div>

      <ul className={` w-full min-h-40 bg-white  items-center justify-center  gap-1 flex-col ${menu ? "opacity-100" : "opacity-0"}`}>
        <li className='bg-transparent  w-full  hover:bg-gray-50 text-center font-semibold text-lg'><Link to="/">Home</Link></li>
        <li className='bg-transparent hover:bg-gray-50  w-full text-center font-semibold text-lg'><Link to="product">Product</Link></li>
        <li className='bg--bg-transparent hover:bg-gray-50 w-full text-center font-semibold text-lg'><Link to="About">About</Link></li>
        <li className='bg-transparent hover:bg-gray-50  w-full text-center font-semibold text-lg'><Link to="Contact">Contact</Link></li>
      </ul>

    </nav>
  )
} 

export default Nav