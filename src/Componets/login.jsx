import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    let [input, setInput] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    })




    const submitHandler = (e) => {
        e.preventDefault()
        setInput({
            email: "",
            password: "",
            confirmPassword: "",
        })
        checkPass()

        let user = JSON.parse(localStorage.getItem("user"));

        if (!user) {
            toast("Invalid Credentials");
        } else {
            const expiry = Date.now() + 30 * 60 * 1000;
            const loginSession = {
                isLoggedIn: true,
                expiry,
            };
           sessionStorage.setItem("login", JSON.stringify(loginSession));

            toast.success("Login successful");
            navigate("/")
        }


    }

    const checkPass = () => {
        if (input.password != input.confirmPassword) {
            toast.error("Password  do not match")
        }
    }


    return (
        <div className='bg-[url("https://i.pinimg.com/564x/ad/ec/39/adec396486acaed171b2b9dcbed33fa8.jpg")] bg-no-repeat bg-cover w-screen h-screen flex items-center justify-center'>
            <form onSubmit={(e) => { submitHandler(e) }} className='bg-black max-[425px]:h-[400px] max-[425px]:w-[350px] bg-opacity-60 border-2 border-white px-4 py-3 w-[500px] min-h-[350px] rounded'>
                <h1 className='text-center text-2xl font-medium mb-4 text-white'>Login</h1>



                <div className='mb-4'>
                    <label className='text-lg  text-white' >Email</label>
                    <input name='email' required value={input.email} onChange={(e) => { setInput({ ...input, [e.target.name]: e.target.value }) }} type="email" className='w-full px-3 py-2 rounded outline-none' placeholder='Enter email...' />
                </div>

                <div className='mb-4'>
                    <label className='text-lg text-white' >Password</label>
                    <input name='password' value={input.password} onChange={(e) => { setInput({ ...input, [e.target.name]: e.target.value }) }} type="password" className='w-full px-3 py-2 rounded outline-none' placeholder='Enter Password...' />
                </div>

                <div className='mb-4'>
                    <label className='text-lg text-white' >confirm Password</label>
                    <input name='confirmPassword' value={input.confirmPassword} onChange={(e) => { setInput({ ...input, [e.target.name]: e.target.value }) }} type="password" className='w-full px-3 py-2 rounded outline-none' placeholder='confirm Password...' />
                </div>


                <button className=' mb-3 w-full px-3 py-2 bg-violet-300 rounded font-medium active:scale-105'>Login</button>

                <div className='flex items-center justify-center'>
                    <h1 className='font-medium text-white'>Don't have an account ? <Link to="/signUp">Register</Link></h1>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}

export default Login