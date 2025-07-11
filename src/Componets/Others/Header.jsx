import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <footer className='bg-white w-full h-[100px]  max-[768px]:-top-10 relative   max-[425px]:top-[150px]'>
            <div className='flex justify-between items-center px-5 py-3'>
                <div>
                    <h1 className='text-4xl font-extrabold max-[425px]:text-2xl '>KokanBazaar</h1>
                </div>
                <ul className='flex items-center gap-5 max-[425px]:hidden'>
                    <li className='font-medium text-lg hover:border-b-2 hover:cursor-pointer border-black'><Link to="/">Home</Link></li>
                    <li className='font-medium text-lg hover:border-b-2 hover:cursor-pointer border-black'><Link to="/products">Product</Link></li>
                    {/* <li className='font-medium text-lg hover:border-b-2 hover:cursor-pointer border-black'><Link to="/About">About</Link></li> */}
                    <li className='font-medium text-lg hover:border-b-2 hover:cursor-pointer border-black'><Link to="/Contact">Help & Support</Link></li>
                </ul>
                <div>
                    <h2 className='font-medium'>Follow On</h2>
                    <div>
                        <a href="https://www.facebook.com/ZipMartEDU/" target='_blank'><i className="ri-facebook-box-fill text-3xl hover:scale-105 "></i></a>
                        <a href="https://www.instagram.com/zip_mart/" target='_blank'><i className="ri-instagram-fill  text-3xl hover:scale-105 "></i></a>
                        <a href="https://x.com/ZipmartEdu/status/829833880169443328" target='_blank'><i className="ri-twitter-fill  text-3xl hover:scale-105 "></i></a>
                        <a href="https://www.youtube.com/channel/UC6noDbHMZCLSwQ9W9JvIzJg" target='_blank'><i className="ri-youtube-fill  text-3xl hover:scale-105 "></i></a>
                    </div>
                </div>
            </div>

            <div className='bg-black w-full flex justify-center items-center text-white h-[40px]'>
                <h1 className='text-sm text-center text-gray-300'>
                    © {new Date().getFullYear()} KokanBazaar. All rights reserved.
                </h1>
            </div>
        </footer>
    )
}

export default Header