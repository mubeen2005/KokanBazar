import React, { useEffect, useState } from 'react';
import Nav from './nav';
import Header from './Others/Header';
import feature1 from '/feature__1.webp';
import Cart from './Others/carts';
import axios from 'axios';
import load from '/load.gif'

const Product = () => {

    const loadTime = <div className='bg-white w-full flex justify-center items-center h-[100vh]'>
        <img src={load} alt="" className='w-[300px] h-[300px] object-cover' />
    </div>
    
    let [finalpro, setFinalpro] = useState([]);
    
    let getProduct = () => {
        axios.get('https://dummyjson.com/products')
        .then((res) => setFinalpro(res.data.products)) 
        .catch((error) => console.error('Error fetching products:', error)); 
    };

    let Carts = finalpro.map((val,i)=>{
        return(
            <Cart key={i} url={val.thumbnail} title={val.title} price={val.price}/>
        )
    })
    
    useEffect(() => {
        getProduct();
    }, []);
    

    return(
        <div>
             <Nav />
            <div className='flex py-3 gap-2 px-3 flex-wrap   w-full min-h-full relative top-[125px]'>
              {finalpro.length > 0 ? Carts : loadTime   }
            </div>
            <br /><br /><br /><br /><br /><br /><br />  
            <hr />
            <Header />
        </div>
    )
}

export default Product