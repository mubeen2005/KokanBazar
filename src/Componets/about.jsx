import React from 'react';
import Nav from './nav';
import Header from './Others/Header';
import about from '/about-us-background.jpg'
import founder from '/founder.jpg'

const About = () => {
    return (
        <div>
            <Nav />
            <div className='w-full h-[400px] bg-black bg-opacity-80'>
                <img src={about} className='w-full h-full object-cover  ' alt="" />
                <h1 className='absolute max-[425px]:top-56 max-[425px]:left-16 max-[768px]:left-64 top-56 left-[600px] text-5xl text-white font-bold'>About Us</h1>
            </div>

            <div className='w-full h-[80vh] max-[425px]:flex-col flex'>
                <div className='w-[50%] max-[425px]:w-full h-full py-20 px-7'>
                    <h1 className='text-4xl font-bold mb-10'>About Our Founder</h1>
                    <p className='text-xl text-gray-700 mb-5 max-[768px]:text-sm'>Alex Thompson founded E-SHOP in 2010 with a mission to make a difference through simplicity, quality, and integrity. With over 15 years in tech, Alex combines deep industry expertise with a passion for innovation. A strong believer in community, Alex mentors young entrepreneurs and is dedicated to creating products that empower people. Alex’s vision continues to inspire our team and drive us forward.</p>
                    <button className='bg-green-400 px-5 py-2 rounded-md font-medium active:scale-95    '><a href="https://en.wikipedia.org/wiki/Steve_Jobs">Explore More</a></button>
                </div>
                <div className='w-[50%] max-[425px]:w-full max-[425px]:mt-[100px] flex items-center justify-center h-full '>
                    <img src={founder} className='w-[80%] rounded-md h-[80%] object-cover' alt="" />
                </div>
            </div>

            <br /><br />
               <hr />
              <div className='max-[425px]:mt-[300px] max-[768px]:mt-[50px]'>
              <Header />
              </div>
        </div>
    )
}

export default About