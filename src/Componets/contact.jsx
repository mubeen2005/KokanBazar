import React, { useState } from 'react';
import Nav from './nav';
import Header from './Others/Header';
import contact from '/contact.jpg';

const HelpSupport = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     // Normally, send the data to server here
    //     alert("Your message has been submitted. We'll get back to you shortly.");
    //     setFirstName("");
    //     setLastName("");
    //     setEmail("");
    //     setSubject("");
    //     setMessage("");
    // };

    return (
        <div>
            <Nav />
            <div className='w-full min-h-screen pt-[125px]'>
                {/* Banner */}
                <div className='w-full h-[300px] relative'>
                    <img src={contact} alt="contact" className='w-full h-full object-cover' />
                    <div className='absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white'>
                        <h1 className='text-4xl font-bold'>Help & Support</h1>
                        <p className='text-lg text-yellow-400 mt-2'>We’re here to help you!</p>
                    </div>
                </div>

                {/* Main Section */}
                <div className='w-full flex flex-col md:flex-row'>
                    {/* Contact Information Section */}
                    <div className='md:w-1/2 w-full p-6 bg-gradient-to-br from-black to-gray-900 text-white flex flex-col justify-center'>
                        <h2 className='text-3xl font-bold mb-6'>Need Help? Contact Us</h2>
                        <p className='text-gray-300 mb-6'>
                            Whether it’s a question about your order, payment, shipping, or anything else — we’re here to help!
                        </p>

                        {/* Cards */}
                        <div className='space-y-6'>
                            {/* Address */}
                            <div className='flex items-start gap-4'>
                                <div className='text-yellow-400 text-3xl'>
                                    <i className="ri-map-pin-line"></i>
                                </div>
                                <div>
                                    <h3 className='text-lg font-semibold'>Our Store Location</h3>
                                    <p className='text-gray-300'>Naya Nagar, Mhasla, Raigad, Maharashtra 402105</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className='flex items-start gap-4'>
                                <div className='text-yellow-400 text-3xl'>
                                    <i className="ri-mail-line"></i>
                                </div>
                                <div>
                                    <h3 className='text-lg font-semibold'>Email Support</h3>
                                    <p className='text-gray-300'>mubinshaikj666@gmail.com</p>
                                    <p className='text-sm text-gray-400'>Replies within 24 hours</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className='flex items-start gap-4'>
                                <div className='text-yellow-400 text-3xl'>
                                    <i className="ri-phone-line"></i>
                                </div>
                                <div>
                                    <h3 className='text-lg font-semibold'>Call Us</h3>
                                    <p className='text-gray-300'>+91 77750 25806</p>
                                    <p className='text-sm text-gray-400'>Available Mon–Sat, 9am to 6pm</p>
                                </div>
                            </div>

                            {/* Live Chat (optional future feature) */}
                            <div className='flex items-start gap-4'>
                                <div className='text-yellow-400 text-3xl'>
                                    <i className="ri-chat-3-line"></i>
                                </div>
                                <div>
                                    <h3 className='text-lg font-semibold'>Live Chat</h3>
                                    <p className='text-gray-300'>Coming Soon – Chat with our team in real-time.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className='md:w-1/2 w-full p-6 bg-white shadow-lg rounded-lg'>
                        <form  action="https://formspree.io/f/xyzpwloy"
                            method="POST" className='w-full space-y-5'>
                            <div className='mb-5'>
                                <h2 className='text-3xl font-bold text-gray-800 mb-1'>Send Us a Message</h2>
                                <p className='text-sm text-gray-500'>We typically respond within 24 hours.</p>
                            </div>

                            {/* Name Fields */}
                            {/* <div className='flex flex-col md:flex-row gap-4'>
                                <input
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    type="text"
                                    placeholder='First Name'
                                    className='flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400'
                                    required
                                />
                                <input
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    type="text"
                                    placeholder='Last Name'
                                    className='flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400'
                                    required
                                />
                            </div> */}

                            <input
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                type="text"
                                placeholder='First Name'
                                className='flex-1 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400'
                                required
                                name='First Name'
                            />
                            <input
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                type="text"
                                placeholder='Last Name'
                                className='flex-1 w-full px-4 py-2 border border-gray-300  rounded focus:outline-none focus:ring-2 focus:ring-indigo-400'
                                required
                                name='Last Name'
                            />

                            {/* Email */}
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder='Email Address'
                                className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400'
                                required
                                name='Email'
                            />

                            {/* Subject */}
                            <input
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                type="text"
                                name='Subject'
                                placeholder='Subject (Optional)'
                                className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400'
                            />

                            {/* Message */}
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder='Your Message'
                                className='w-full h-32 px-4 py-2 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400'
                                required
                                name='Message'
                            />

                            {/* Submit */}
                            <button
                                type="submit"
                                className='bg-yellow-400 text-black px-6 py-2 rounded hover:bg-indigo-700 transition-all active:scale-95 shadow-md'
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>

                {/* Google Map */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3791.635474034625!2d73.10730567415962!3d18.13461728085176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be8350063621055%3A0xeb4bf67a6b987efd!2sMhasla%20Raigad!5e0!3m2!1sen!2sin!4v1730828428021!5m2!1sen!2sin"
                    className='w-full h-[300px]'
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                {/* Footer */}
                <div className='mt-10 max-[425px]:-mt-[110px]'>
                    <Header />
                </div>
            </div>
        </div>
    );
};

export default HelpSupport;
