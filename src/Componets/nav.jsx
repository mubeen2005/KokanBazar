import React, { useState, useEffect } from 'react';
import logo from '/public/logo1.png'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import lencheck from './lencheck';

const Nav = () => {

  let [menu, setMenu] = useState(false)
  const navigate = useNavigate()
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [totalp, settotalp] = useState()
  const [login, setlogin] = useState(false)
  const [name, setname] = useState()


  const getUser = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      setname(storedUser.name)
      setlogin(true)
    } else {
      setUser(null);
      setProducts([]);
      settotalp(0);
    }
  };

  const logout = () => {
    sessionStorage.removeItem("login");
    setlogin(false);
    navigate("/login");
};


  const userLogo = () => {
    if (!user) return ""; // ⬅️ Safeguard added

    const nameParts = name.trim().split(" ");
    const first = nameParts[0]?.charAt(0) || "";
    const last = nameParts[1]?.charAt(0) || "";

    return (first + last).toUpperCase();
  };



  useEffect(() => {
    getUser();
  }, []);


  useEffect(() => {
    settotalp(lencheck());
  }, []);


  return (
    <nav className=' w-full h-[130px] px-10 fixed bg-white z-10 max-[425px]:px-2  '>
      <div className='flex items-center justify-between py-2'>
        <ul className='flex gap-2'>
          <div className={clsx(
            { hidden: login, flex: !login },
            "gap-2"
          )}>

            <li><button className='  bg-transparent border-2 hover:bg-black hover:text-white  border-black px-5 max-[425px]:px-2 py-1 font-medium   rounded-2xl'><Link to="/signUp">Register</Link></button></li>
            <li><button className='bg-transparent border-2 hover:bg-black hover:text-white  border-black px-5 max-[425px]:px-2 py-1 font-medium   rounded-2xl'><Link to="/login">Login</Link></button></li>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-[50px] text-sm w-[50px] max-[425px]:w-[30px] max-[425px]:h-[30px] bg-black p-2 text-white rounded-full flex items-center justify-center font-semibold">
              <p>{userLogo()}</p>
            </div>
            <div className="text-lg font-medium max-[425px]:text-md">
              {name}
            </div>
          </div>

        </ul>

        <div className='flex gap-5  max-[425px]:justify-between  max-[425px]:w-[35%]'>
          <div className={clsx({ hidden: !login, block: login })}>
            <ul>
              <li><button onClick={logout} className='bg-transparent border-2 hover:bg-black hover:text-white  border-black px-5 max-[425px]:px-2 py-1 font-medium  max-[425px]:  rounded-2xl'>Logout</button></li>
            </ul>
          </div>

          <div className='flex'>
            <button onClick={() => { navigate("/addToCart") }} className='active:scale-105'><i className="ri-shopping-cart-2-line text-2xl font-medium"></i></button>
            <div className='bg-black rounded-[100%] h-5 w-5 text-white flex justify-center items-center'>{totalp}</div>
          </div>
        </div>
      </div>
      <div className='bg-black h-[2px] w-full'></div>

      <div className=' w-full h-[50%] flex items-center justify-between'>
        <div className=' flex items-center justify-center'>
          <h1 className='text-4xl font-extrabold max-[425px]:text-2xl '>KokanBazaar</h1>
        </div>

        <ul className='flex items-center gap-5 max-[425px]:hidden'>
          <li className='font-medium text-lg hover:border-b-2 hover:cursor-pointer border-black'><Link to="/">Home</Link></li>
          <li className='font-medium text-lg hover:border-b-2 hover:cursor-pointer border-black'><Link to="/products">Product</Link></li>
          {/* <li className='font-medium text-lg hover:border-b-2 hover:cursor-pointer border-black'><Link to="/About">About</Link></li> */}
          <li className='font-medium text-lg hover:border-b-2 hover:cursor-pointer border-black'><Link to="/Contact">Help & Support</Link></li>
        </ul>

        <button onClick={() => setMenu(!menu)} className='hidden  max-[425px]:block'><i className="ri-menu-line text-xl"></i></button>
      </div>

      <ul
        className={`${menu ? "flex" : "hidden"
          } fixed top-0 left-0 w-full h-40 bg-black text-white flex-col items-center justify-center gap-6 z-50`}
      >
        <li className="font-medium text-xl hover:border-b-2 border-white">
          <Link to="/" onClick={() => setMenu(false)}>Home</Link>
        </li>
        <li className="font-medium text-xl hover:border-b-2 border-white">
          <Link to="/products" onClick={() => setMenu(false)}>Product</Link>
        </li>
        <li className="font-medium text-xl hover:border-b-2 border-white">
          <Link to="/Contact" onClick={() => setMenu(false)}>Help & Support</Link>
        </li>
      </ul>


    </nav>
  )
}

export default Nav