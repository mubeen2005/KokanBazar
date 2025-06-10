import React, { useState } from 'react';
import Nav from './nav';
import Header from './Others/Header';
import contact from '/contact.jpg'

const Contact = () => {

   let [firstName,setFirstName] = useState("")
   let [lastName,setLastName] = useState("")
   let [email,setEmail] = useState("")
   let [subject,setSubject] = useState("")
   let [message,setMessage] = useState("")


    const submitHandler = (e) => {
        e.preventDefault()
        setFirstName("")
        setLastName("")
        setEmail("")
        setMessage("")
        setSubject("")
    }

    return(
        <div>
             <Nav />
            <div className=' w-full min-h-screen relative top-[125px]'>
               <div className='w-full h-[300px] bg-black bg-opacity-80'>
                <img src={contact} className='w-full h-full object-cover    ' alt="" />
                <h1 className='absolute max-[425px]:top-28 max-[425px]:left-20  top-32 left-[550px] text-5xl text-white font-bold'>Contact Us</h1>
                <h1 className='absolute top-44 left-[600px] max-[425px]:top-40  max-[425px]:left-32 text-2xl  font-medium text-yellow-400'>Get In Touch</h1>
               </div>
               <div className='w-full min-h-[100vh] max-[768px]:flex-col flex'>
                <div className='w-[50%] max-[768px]:w-full h-[100vh] flex justify-center items-center'>
                    <div className='w-[60%]  h-[80%] py-8 px-5 max-[768px]:w-full  bg-black text-white  rounded-lg'>
                        <h1 className='text-3xl font-bold mb-12'>Contact Us</h1>
                        <p className='mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptatem eaque assumenda cumque delectus possimus dolorem quod quam itaque magnam.</p>
                        <h2 className='text-lg font-medium mb-7'><i className="ri-map-pin-line "></i> Naya Nagar Mhasla,Raigad Maharastra</h2>
                        <h2 className='text-lg font-medium mb-7'><i class="ri-mail-line"></i> mubinshaikj666@gmail.com </h2>
                        <h2 className='text-lg font-medium mb-7'><i class="ri-phone-line"></i> 7775025806</h2>
                    </div>
                </div>
                <div className='w-[50%] max-[768px]:w-full flex justify-center items-center h-[100vh]'>
                    <form onSubmit={(e)=>{submitHandler(e)}} className='w-[80%] h-[80%] max-[768px]:w-full max-[768px]:h-[95%]  py-8 px-5 bg-transparent border-2 border-black rounded'>
                    <h1 className='text-3xl font-bold mb-12'>Get In Touch With Us</h1>
                    <div className='flex items-center gap-3 mb-5'>
                        <input value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} type="text" placeholder='Enter First Name' className='px-4 py-2 w-[50%] rounded outline-none border-2 border-black' />
                        <input value={lastName} onChange={(e)=>{setLastName(e.target.value)}} type="text" placeholder='Enter Last Name' className='px-4 py-2 rounded w-[50%] outline-none border-2 border-black' />
                    </div>
                    
                    <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter Email' className='px-4 mb-5 py-2 rounded w-[100%] outline-none border-2 border-black' />
                    <input type="text" value={subject} onChange={(e)=>{setSubject(e.target.value)}}  placeholder='Enter Subject' className='px-4 mb-5 py-2 rounded w-[100%] outline-none border-2 border-black' />
                    <textarea value={message} onChange={(e)=>{setMessage(e.target.value)}} placeholder='Enter Message'  className='mb-2 w-full h-32 outline-none border-2 border-black px-4 py-2 rounded'></textarea>
                    <button className='px-3 active:scale-95 font-medium py-2 bg-black rounded text-white'>SUBMIT</button>

                    </form>
                </div>
               </div>

               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3791.635474034625!2d73.10730567415962!3d18.13461728085176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be8350063621055%3A0xeb4bf67a6b987efd!2sMhasla%20Raigad!5e0!3m2!1sen!2sin!4v1730828428021!5m2!1sen!2sin" width="600" className='w-full h-[300px]' height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

               <br /><br />
               <hr />
              <div className='max-[425px]:mt-[-150px] max-[768px]:mt-[30px]'>
              <Header />
              </div>

            </div>
         
        </div>
    )
}

export default Contact