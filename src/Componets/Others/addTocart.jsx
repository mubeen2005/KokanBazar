import React, { useEffect, useState } from 'react';
import Nav from "../nav";
import Product from "./product";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import lencheck from '../lencheck';
import { useNavigate } from 'react-router-dom';

const AddToCart = () => {
    const [user, setUser] = useState(null);
    const [products, setProducts] = useState([]);
    const navigate = useNavigate()


    const onRemove = (id) => {
        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (!storedUser || !storedUser.products) return;

        const updatedProducts = storedUser.products.filter((product) => product.id !== id);

        const updatedUser = { ...storedUser, products: updatedProducts };

        // Save to localStorage
        localStorage.setItem("user", JSON.stringify(updatedUser));

        // Update React state
        setUser(updatedUser);
        setProducts(updatedProducts);
        const timer = setTimeout(() => {
            window.location.reload(); // Full page reload
        }, 100);
        toast.success("Product remove successfully")
    };





    const Carts = products.map((val, i) => {
        return (
            <Product url={val.url} id={val.id} quantity={val.quantity} title={val.title} price={val.price} onRemove={onRemove} />
        )
    })


    const totalPrice = () => {
        let  sum = products.reduce((acc, product) => {
            return acc + product.price * (product.quantity || 1);
        }, 0);
        return Math.ceil(sum);  

    };



    const getUser = () => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser) {
            setUser(storedUser);
            setProducts(storedUser.products || []);
        }
        // } else {
        //     setUser(null);
        //     setProducts([]);
        // }
    };





    useEffect(() => {
        getUser();
    }, []);

    const empty = (
        <div className='flex w-[100%] h-[50vh]  items-center justify-center flex-col gap-5'>
            <h1 className='text-3xl font-medium'>Your Cart is Empty</h1>
            <button onClick={()=>{navigate("/products")}} className='bg-black px-3 py-2 rounded text-white font-medium active:scale-105'>Shop now</button>

        </div>
    );

    return (
        <>
            <div className='w-full h-[100vh] relative'>
                <Nav />


                <div className='w-full  max-[425px]:p-5 px-20 py-10 mb-10 max-[425px]:flex-col min-h-[50vh] relative top-[125px]'>
                    {products.length === 0 ? empty : Carts}
                </div>



                <div className='w-full h-[10vh]  max-[425px]:px-5  z-10 mt-6  fixed bottom-0  bg-zinc-900 px-20 flex items-center justify-between'>
                    <h1 className='font-medium text-lg max-[425px]:text-[16px] text-white'>Total Amount : ₹{totalPrice()}</h1>
                    <button onClick={()=>{if(products.length > 0){navigate("/details-form")}else{toast.error("your cart is Empty")}}}  className='bg-green-500 text-white  max-[425px]:font-normal max-[425px]:p-1 px-3 active:scale-95 py-2 rounded font-medium'>
                        Order Now
                    </button>
                </div>
                <ToastContainer />
            </div>
        </>
    );
};

export default AddToCart;
