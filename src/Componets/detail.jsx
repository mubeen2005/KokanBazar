import React, { useState } from 'react'
import Nav from './nav'
import { useNavigate } from 'react-router-dom';


const detail = () => {
    const [name, setname] = useState("");
    const [phone, setphone] = useState("");
    const [pincode, setpincode] = useState("");
    const [Locality, setLocality] = useState("");
    const [message, setMessage] = useState("");
    const [city, setcity] = useState("")
    const [state, setstate] = useState("")
    const [landmark, setlandmark] = useState("")
    const [altphone, setaltphone] = useState("")
    const navigate = useNavigate()


     const addressHandler = () => {
        navigate("/payment")
     }

    return (
        <>
            <Nav />
            <div className='w-[100%] relative top-32 p-5 h-[91vh] bg-zinc-800'>
                <form action="https://formspree.io/f/xyzpwloy"
                            method="POST">
                    <div className='mb-5'>
                        <h2 className='text-3xl font-bold text-white mb-1'>Your Address Details</h2>
                        <p className='text-sm text-gray-300'>Please enter your full address for accurate delivery.</p>
                    </div>

                    <div className='flex gap-5 mb-2'>
                        < input
                            value={name}
                            onChange={(e) => setname(e.target.value)}
                            type="text"
                            placeholder='Name'
                            className='flex-1 w-[40%] px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400'
                            required
                            name='Name'
                        />
                        <input
                            value={phone}
                            onChange={(e) => setphone(e.target.value)}
                            type="text"
                            placeholder='phone'
                            className='flex-1 w-[40%] px-4 py-2 border border-gray-300  rounded focus:outline-none focus:ring-2 focus:ring-indigo-400'
                            required
                            name='Phone'
                        />
                    </div>


                    <div className='flex gap-5 mb-2'>
                        < input
                            value={pincode}
                            onChange={(e) => setpincode(e.target.value)}
                            type="text"
                            placeholder='Pincode'
                            className='flex-1 w-[40%] px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400'
                            required
                            name='pincode'
                        />
                        <input
                            value={Locality}
                            onChange={(e) => setLocality(e.target.value)}
                            type="text"
                            placeholder='Locality'
                            className='flex-1 w-[40%] px-4 py-2 border border-gray-300  rounded focus:outline-none focus:ring-2 focus:ring-indigo-400'
                            required
                            name='locality'
                        />
                    </div>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder='Address (Area and Streat)'
                        className='w-full mb-2 h-32 px-4 py-2 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400'
                        required
                        name='Address'
                    />

                    <div className='flex gap-5 mb-2'>
                        < input
                            value={city}
                            onChange={(e) => setcity(e.target.value)}
                            type="text"
                            placeholder='City/District/Town'
                            className='flex-1 w-[40%] px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400'
                            required
                            name='city'
                        />
                        <input
                            value={state}
                            onChange={(e) => setstate(e.target.value)}
                            type="text"
                            placeholder='State'
                            className='flex-1 w-[40%] px-4 py-2 border border-gray-300  rounded focus:outline-none focus:ring-2 focus:ring-indigo-400'
                            required
                            name='state'
                        />
                    </div>

                    
                    <div className='flex gap-5 mb-2'>
                        < input
                            value={landmark}
                            onChange={(e) => setlandmark(e.target.value)}
                            type="text"
                            placeholder='Pincode'
                            className='flex-1 w-[40%] px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400'
                            required
                            name='Landmark'
                        />
                        <input
                            value={altphone}
                            onChange={(e) => setaltphone(e.target.value)}
                            type="number"
                            placeholder='alterne phone'
                            className='flex-1 w-[40%] px-4 py-2 border border-gray-300  rounded focus:outline-none focus:ring-2 focus:ring-indigo-400'
                            required
                            name='alterne phone'
                        />
                    </div>

                     <button
                                type="submit"
                                onClick={addressHandler}
                                className='bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-600 transition-all active:scale-95 shadow-md'
                            >
                                Add Adress 
                            </button>

                </form>
            </div>
        </>
    )
}

export default detail
