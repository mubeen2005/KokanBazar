import React, { useState } from 'react';

const Product = ({ id, price, url, title, onRemove, quantity }) => {
    // const [quantitycat, setquantity] = useState(quantity);

    return (
        <div className='w-full h-[15vh] mb-3  max-[425px]:w-[150wv] bg-zinc-200 rounded-lg py-2 px-5 flex justify-between items-center'>
            <div className='h-[13vh] rounded'>
                <img className='h-full rounded' src={url} alt="product" />
            </div>
            <h3 className='font-medium  max-[425px]:text-[16px] text-lg'>{title}</h3>
            <div className='flex items-center gap-4 sm:gap-10 md:gap-20 lg:gap-56'>
               <div className='text-xl font-medium max-[425px]:text-[16px]'>{quantity}
               </div>
                <h3 className='font-medium text-lg  text-gray-800 max-[425px]:text-[16px]'>₹{price}</h3>
                <button
                    onClick={() => onRemove(id)}
                    className='px-3 py-2 max-[425px]:p-1 max-[425px]:text-[14px] bg-red-500 text-white rounded hover:bg-red-600 active:scale-95'
                >
                    Remove
                </button>
            </div>
        </div>
    );
};

export default Product;
