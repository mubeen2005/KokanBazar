import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import loginback from '/login.jpg'

const SignUp = () => {
    let navigate = useNavigate()

   

    let [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        products:[],
        login:false
    })


    const submitHandler = (e) => {
        e.preventDefault()
        if (input.password !== input.confirmPassword) {
            toast.error("Password  do not match")
        } else {
            localStorage.setItem("user", JSON.stringify(input));

            toast.success("Registration successful");

            setInput({
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
            });

            navigate("/login");
        }


    }






    return (
        <div className='bg-[url("https://i.pinimg.com/564x/ad/ec/39/adec396486acaed171b2b9dcbed33fa8.jpg")] bg-no-repeat bg-cover w-screen h-screen flex items-center justify-center'>
            <form onSubmit={(e) => { submitHandler(e) }} className='bg-black bg-opacity-60 border-2 border-white px-4 py-3 max-[425px]:w-[350px] w-[500px] max-[425px]:h-[400px]  min-h-[350px] rounded'>
                <h1 className='text-center text-2xl font-medium mb-4 text-white max-[425px]:mb-2'>Create a New Account</h1>

                <div className='mb-4 max-[425px]:mb-1'>
                    <label className='text-lg max-[425px]:text-[15px] text-white' >Name</label>
                    <input name='name' required value={input.name} onChange={(e) => { setInput({ ...input, [e.target.name]: e.target.value, }) }} type="text" className='w-full max-[425px]:p-1 px-3 py-2 rounded outline-none' placeholder='Enter name...' />
                </div>

                <div className='mb-4 max-[425px]:mb-1'>
                    <label className='text-lg max-[425px]:text-[15px] text-white' >Email</label>
                    <input name='email' required value={input.email} onChange={(e) => { setInput({ ...input, [e.target.name]: e.target.value }) }} type="email" className='w-full max-[425px]:p-1 px-3 py-2 rounded outline-none' placeholder='Enter email...' />
                </div>

                <div className='mb-4 max-[425px]:mb-1'>
                    <label className='text-lg max-[425px]:text-[15px] text-white' >Password</label>
                    <input name='password' value={input.password} onChange={(e) => { setInput({ ...input, [e.target.name]: e.target.value }) }} type="password" className='w-full max-[425px]:p-1 px-3 py-2 rounded outline-none' placeholder='Enter Password...' />
                </div>

                <div className='mb-5 max-[425px]:mb-2'>
                    <label className='text-lg max-[425px]:text-[15px] text-white' >Confirm Password</label>
                    <input name='confirmPassword' value={input.confirmPassword} onChange={(e) => { setInput({ ...input, [e.target.name]: e.target.value }) }} type="password" className='w-full max-[425px]:p-1 px-3 py-2 rounded outline-none' placeholder='Confirm password...' />
                </div>

                <button className=' mb-3 max-[425px]:mb-1 w-full px-3 py-2 bg-violet-300 rounded font-medium active:scale-105'>Create Account</button>



                <div className='flex items-center justify-center'>
                    <h1 className='font-medium text-white'>Already have an account ? <Link to="/login">Login</Link></h1>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}
export default SignUp