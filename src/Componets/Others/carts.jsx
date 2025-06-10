import React, { useState } from 'react';

const Cart = ({ url, title, price }) => {
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
                <button className='bg-green-500 px-3 active:scale-95 py-2 rounded font-medium'>Buy Now</button>
                <button onClick={() => { add(url, title, price) }} className='bg-red-500 px-3 py-2 active:scale-95 rounded font-medium'>Add to Cart</button>
            </div>
        </div>
    )
}
export default Cart