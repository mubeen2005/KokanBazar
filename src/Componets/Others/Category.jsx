import React from 'react';
import { useNavigate } from 'react-router-dom';

const Category = ({url,title,quntity}) => {
    const navigate = useNavigate()
    return(
        <div onClick={()=>{navigate("/product")}} className='w-[320px] max-[768px]:w-[49%]  max-[425px]:w-full hover:scale-95 h-[125px] rounded  bg-transparent border-2 border-gray-200 flex-shrink-0 flex items-center justify-between px-3 py-1'>
        <div>
            <h1 className='text-2xl font-semibold'>{title}</h1>
            <h4 className='text-lg font-normal'>{quntity} products</h4>
        </div>
        <div>
            <img src={url} alt="" className='w-[100px]' />
        </div>
    </div>
    )
}

export default Category