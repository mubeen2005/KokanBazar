import React from 'react';

const Blogcart = ({date,url,title}) => {
    return(
        <div className=' hover:scale-95 max-[425px]:flex-col  flex-shrink-0'>
        <div className='w-[400px] max-[425px]:w-full h-[250px] mb-2'>
            <img src={url} alt="" className='w-full h-full  rounded object-cover' />
        </div>
        <div>
            <h1 className='text-green-800 font-medium'>{date}</h1>
            <h1 className='text-black font-bold text-2xl'>{title}</h1> 
        </div>


    </div>
    )
}
export default Blogcart