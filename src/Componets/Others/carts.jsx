import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import lencheck from '../lencheck';


const Cart = ({ url, title, price }) => {
    const navigate = useNavigate();
    const [quantity, setquantity] = useState(1);

    const add = () => {
        const user = JSON.parse(localStorage.getItem("user"));

        if (!user) {
            toast.error("No user found")
            navigate("/signUp")
        }

        if (!user.products) {
            user.product = []
        }
        const product = {
            title,
            price,
            url,
            id: Date.now(),
            quantity,
            // len:user.products.length + 1
        }
        user.products.push(product)

        localStorage.setItem("user", JSON.stringify(user))
         const timer = setTimeout(() => {
            window.location.reload(); // Full page reload
        }, 100);
        
        toast.success("Product addded succesfully")
    }




    return (
        <div className='bg-white max-[425px]:w-full flex-shrink-0 w-[260px] min-h-[350px] p-3 border-2 rounded border-gray-200'>
            <div className='bg-white w-full h-[70%] mb-2 rounded'>
                <img src={url} alt="" className='object-cover h-full w-full rounded' />
            </div>
            <div className='flex items-center justify-between mb-2'>
                <h1 className='text-sm mb-1 font-semibold'>{title}</h1>
                <h2 className='text-2xl mb-1 text-red-600 font-semibold'>₹{price}</h2>
            </div>
            <div className='flex items-center justify-between text-white'>
                <input
                    type="number"
                    min={1}
                    max={10}
                    value={quantity}
                    onChange={(e) => setquantity(e.target.value)}
                    className='w-16 px-3 py-2 text-black bg-amber-50 rounded border outline-none focus:ring-2'
                />
                {/* <button className='bg-green-500 px-3 active:scale-95 py-2 rounded font-medium'>Buy Now</button> */}
                <button onClick={add} className='bg-red-500 px-3 py-2 active:scale-95 rounded font-medium'>Add to Cart</button>
            </div>
        </div>
    )
}
export default Cart