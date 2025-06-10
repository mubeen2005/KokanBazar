import React from 'react';
import Nav from './nav';
import { Link, useNavigate } from 'react-router-dom';
import hero1 from '/hero__1 (1).webp';
import hero2 from '/hero__2.webp';
import hero3 from '/hero__3.webp';
import category1 from '/category__1.webp';
import Category from './Others/Category';
import category2 from '/category__2.webp';
import category3 from '/category__3.webp';
import category4 from '/category__4.webp';
import category5 from '/category__5.webp';
import category6 from '/category__6.webp';
import category7 from '/category__7.webp';
import feature1 from '/feature__1.webp';
import feature2 from '/feature__2.webp';
import product1 from '/product__1.webp';
import product2 from '/product__2.webp';
import product3 from '/product__3.webp';
import product4 from '/product__4.webp';
import product5 from '/product__5.webp';
import bannner1 from '/banner__1.webp';
import bannner2 from '/banner__2.webp';
import post1 from '/post__1.webp';
import post2 from '/post__2.webp';
import post3 from '/post__3.webp';




import Cart from './Others/carts';
import Blogcart from './Others/blogcart';
import Header from './Others/Header';



const Home = () => {
    const navigate = useNavigate()
    return (
        <div className='relative w-full'>
            {/* NavBar  */}
            <Nav />

            {/* Hero Section */}
            <div className='flex  w-full  max-[425px]:flex-col  min-h-screen relative top-[125px]'>
                <div className='w-[70vw]   max-[425px]:h-[70vh] max-[425px]:w-full  h-[80vh] p-5 relative'>
                    <img src={hero1} alt="" className='rounded h-full w-full object-cover' ></img>
                    <div className='absolute top-[120px] max-[425px]:left-10 max-[425px]:top-[50px] max-[768px]:top-[60px] max-[768px]:left-10 left-16'>
                        <h4 className='text-xl mb-3 font-medium max-[425px]:text-sm max-[425px]:mb-1 '>100% Original Dry Fruits</h4>
                        <h1 className='text-6xl font-bold leading-16 mb-10 max-[425px]:text-4xl max-[425px]:w-[280px] max-[425px]:mb-5 max-[768px]:text-5xl'>Dried Fruits Best <br />Healthy</h1>
                        <h6 className='text-xl mb-2 max-[425px]:text-sm'>Starting At</h6>
                        <h3 className='text-4xl font-bold max-[425px]:text-3xl max-[425px]:mb-3   text-red-500 mb-5'> ₹ 200</h3>

                        <button className='bg-green-700 px-4 py-2 rounded-full max-[425px]:text-sm text-white font-medium active:scale-105' onClick={() => { navigate("/product") }} >Shop Now <i className="ri-arrow-right-s-line"></i></button>
                    </div>
                </div>

                <div className='w-[30vw] flex gap-2 flex-col max-[425px]:w-full h-[80vh] p-5'>
                    <div className='relative'>
                        <img src={hero2} alt="" className='rounded h-[36vh] w-full object-cover' />
                        <div className='absolute top-5 left-3  max-[425px]:top-2 max-[768px]:top-1'>
                            <h1 className='text-3xl font-bold leading-16 mb-2  max-[425px]:text-3xl max-[425px]:mb-1 max-[768px]:text-3xl'>Best Yummy <br /> Pizza</h1>
                            <h6 className='text-lg mb-1 max-[425px]:mb-0 max-[768px]:mb-0'>Starting At</h6>
                            <h3 className='text-3xl font-bold max-[425px]:text-2xl max-[425px]:mb-0  text-red-500 mb-2'>₹ 125</h3>
                            <button className='bg-green-600 px-3 py-2 rounded-full max-[768px]:px-2 max-[768px]:py-1 max-[425px]:text-sm text-white font-medium active:scale-105' onClick={() => { navigate("/product") }} >Shop Now <i className="ri-arrow-right-s-line"></i></button>
                        </div>
                    </div>
                    <div className='relative'>
                        <img src={hero3} alt="" className='rounded h-[36vh] w-full object-cover' />
                        <div className='absolute top-5 left-3  max-[425px]:top-2 max-[768px]:top-2'>
                            <h1 className='text-3xl font-bold leading-16 mb-2  max-[425px]:text-3xl max-[425px]:mb-1 max-[768px]:text-3xl'>Best Yummy <br /> Chips</h1>
                            <h6 className='text-lg mb-1 max-[425px]:mb-0 max-[768px]:mb-0'>Starting At</h6>
                            <h3 className='text-3xl font-bold max-[425px]:text-2xl max-[425px]:mb-1 max-[768px]:mb-0  text-red-500 mb-2'>₹ 30</h3>
                            <button className='bg-green-600 px-3 py-2 rounded-full max-[768px]:px-2 max-[768px]:py-1  max-[425px]:text-sm text-white font-medium active:scale-105' onClick={() => { navigate("/product") }} >Shop Now <i className="ri-arrow-right-s-line"></i></button>
                        </div>
                    </div>
                </div>
            </div>

            {/* categories */}
            <div className='min-h-60 w-full bg-transparent p-5 flex flex-wrap gap-3 relative max-[425px]:top-28'>
                <Category url={category1} title={"Fresh Fruits"} quntity={10} />
                <Category url={category2} title={"Fresh vegs"} quntity={25} />
                <Category url={category3} title={"Canned Goods"} quntity={12} />
                <Category url={category4} title={"Bread & Bakery"} quntity={17} />
                <Category url={category5} title={"Fishes"} quntity={8} />
                <Category url={category6} title={"Eggs & Dairy"} quntity={13} />
                <Category url={category7} title={"Soft Drinks"} quntity={18} />
                <Category url={category1} title={"Fresh Fruits"} quntity={10} />
            </div>

            {/* product */}
            <div className='relative bg-white w-full min-h-[300px] max-[425px]:top-28'>
                <div className='p-5 rounded'>

                    <div className='flex justify-between items-center'>
                        <div>
                            <h1 className='text-3xl font-semibold mb-1'>Fruits & Vegetables</h1>
                            <p className='text-gray-800 mb-3'>Buy farm fresh fruits and Vegetables online at the best price</p>
                        </div>

                        <button className='bg-green-500 px-3 py-2 rounded text-white font-medium active:scale-105' onClick={() => { navigate("/product") }}>Explore More</button>
                    </div>

                    <div className='flex gap-3  max-[425px]:flex-col max-[768px]:overflow-auto'>
                        <div className='w-[230px] max-[425px]:w-full h-[350px] flex-shrink-0'>
                            <img src={feature1} alt="" className='w-full hover:scale-95 h-full rounded object-cover' />
                        </div>

                        <Cart url={product1} title={"Dried Mango"} price={100} />
                        <Cart url={product2} title={"Crunchy Crips"} price={450} />
                        <Cart url={product3} title={"Jewel Cranberries"} price={280} />
                        <Cart url={product4} title={"Almond Organic"} price={190} />
                    </div>
                </div>
            </div>

            <div className='relative bg-white w-full min-h-[300px]  max-[425px]:top-28'>
                <div className='p-5 rounded'>

                    <div className='flex justify-between items-center'>
                        <div>
                            <h1 className='text-3xl font-semibold max-[425px]:text-2xl mb-1'>Breakfast & Dairy</h1>
                            <p className='text-gray-800 mb-3'>Buy best quality breakfast online big-breakfast stop near you</p>
                        </div>

                        <button className='bg-green-500 px-3 py-2 rounded text-white font-medium active:scale-105' onClick={() => { navigate("/product") }}>Explore More</button>
                    </div>

                    <div className='flex gap-3 max-[425px]:flex-col max-[768px]:overflow-auto'>
                        <div className='w-[230px] hover:scale-95 max-[425px]:w-full h-[350px]'>
                            <img src={feature2} alt="" className='w-full h-full rounded object-cover' />
                        </div>

                        <Cart url={product5} title={"Fresh tamato"} price={50} />
                        <Cart url={product2} title={"Crunchy Crips"} price={450} />
                        <Cart url={product3} title={"Jewel Cranberries"} price={280} />
                        <Cart url={product4} title={"Almond Organic"} price={190} />
                    </div>
                </div>
            </div>

            {/* Gallery */}

            <div className=' px-10 py-3 relative max-[425px]:top-[100px]  max-[768px]:gap-3 flex items-center max-[425px]:flex-col justify-between w-full h-[40vh]'>
                <div className='w-[50%] max-[425px]:w-full hover:scale-95 h-full object-cover'>
                    <img src={bannner1} alt="" className='rounded' />
                </div>

                <div className='w-[50%] max-[425px]:w-full hover:scale-95  h-full object-cover'>
                    <img src={bannner2} alt="" className='rounded' />
                </div>
            </div>

            <div className='p-5 rounded relative max-[425px]:top-[150px] max-[768px]:-top-10'>

                <div>
                    <div>
                        <h1 className='text-3xl font-semibold mb-1'>Latest News</h1>
                        <p className='text-gray-800 mb-3'>Present posts in a way to highlight interesting momonts of your blog</p>
                    </div>

                    <div className='flex gap-10  max-[768px]:overflow-y-auto max-[425px]:flex-col'>
                        <Blogcart url={post1} title="Healthy Food Healthy Life" date="Aug 24,2023 / 5 comments" />
                        <Blogcart url={post2} title="Healthy Food Healthy Life" date="Aug 24,2023 / 3 comments" />
                        <Blogcart url={post3} title="Healthy Food Healthy Life" date="Aug 24,2023 / 8 comments" />
                    </div>

                </div>


            </div>

            <br />
            <hr />
            <Header />

           
        </div>
    )
}

export default Home