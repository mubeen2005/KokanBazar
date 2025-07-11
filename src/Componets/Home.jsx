import React, { useEffect, useState } from 'react';
import Nav from './nav';
import axios from 'axios';
import load from '/load.gif'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    const [finalpro, setfinalpro] = useState([])
    const [finalpro2, setfinalpro2] = useState([])

    const navigate = useNavigate()

    const loadTime = <div className='bg-white w-full flex justify-center items-center h-[100vh]'>
        <img src={load} alt="" className='w-[300px] h-[300px] object-cover' />
    </div>

    let getProduct = () => {
        axios.get(`https://dummyjson.com/products/category/tops`)
            .then((res) => setfinalpro(res.data.products))
            .catch((error) => console.error('Error fetching products:', error));
    };


    let getProduct2 = () => {
        axios.get(`https://dummyjson.com/products/category/fragrances`)
            .then((res) => setfinalpro2(res.data.products))
            .catch((error) => console.error('Error fetching products:', error));
    };

    useEffect(() => {
        getProduct();
    }, []);

    useEffect(() => {
        getProduct2();
    }, []);


//   window.onbeforeunload = () => {
//   localStorage.removeItem("login");
//   navigate("/login")
// };





    let Carts = finalpro.slice(0, 4).map((val, i) => {
        return (
            <Cart key={i} url={val.thumbnail} title={val.title} price={val.price} />
        )
    })

    let Carts2 = finalpro2.slice(0, 4).map((val, i) => {
        return (
            <Cart key={i} url={val.thumbnail} title={val.title} price={val.price} />
        )
    })


    const setCheck = (e) => {
        let category = e.target.name
        navigate(`/products/${category}`);
    }

    return (
        <div className='relative w-full'>
            {/* NavBar  */}
            <Nav />

            {/* Hero Section */}
            <div className='flex  w-full  max-[425px]:flex-col  min-h-screen relative top-[125px]'>
                <div className='w-[70vw]   max-[425px]:h-[87vh] max-[768px]:h-[100vh] max-[425px]:w-full  h-[80vh] p-5 relative'>
                    <img src="https://static.vecteezy.com/system/resources/previews/017/109/373/non_2x/feminine-summer-accessories-dress-rattan-bag-straw-hat-sandals-peony-on-white-background-photo.jpg" alt="" className='rounded h-full w-full object-cover' ></img>
                    <div className='absolute top-[120px] max-[425px]:left-10 max-[425px]:top-[50px] max-[768px]:top-[60px] max-[768px]:left-10 left-16'>
                        <h4 className='text-xl mb-3 font-medium max-[425px]:text-sm max-[425px]:mb-1 '>Elegant & Stylish</h4>
                        <h1 className='text-5xl font-bold leading-16 mb-10 max-[425px]:text-3xl max-[425px]:w-[280px] max-[425px]:mb-5 max-[768px]:text-4xl'>Women's Dresses  <br />For Every Occasion</h1>
                        <h6 className='text-xl mb-2 max-[425px]:text-sm'>Starting At</h6>
                        <h3 className='text-4xl font-bold max-[425px]:text-3xl max-[425px]:mb-3   text-red-500 mb-5'> ₹ 1000</h3>

                        <button name='womens-dresses' className='bg-black px-4 py-2 rounded-full max-[425px]:text-sm text-white font-medium active:scale-105' onClick={setCheck}>Shop Now <i className="ri-arrow-right-s-line"></i></button>
                    </div>
                </div>

                <div className='w-[30vw] flex gap-2 flex-col max-[425px]:w-full  h-[80vh] p-5'>
                    <div className='relative'>
                        <img src='https://img.freepik.com/premium-photo/white-female-sneakers-green-background-with-copy-space-top-view-flat-lay_344538-565.jpg' alt="" className='rounded max-[425px]:h-[45vh] max-[768px]:h-[45.5vh]   h-[36.5vh]  w-full object-cover' />
                        <div className='absolute top-5 left-3  max-[425px]:top-2 max-[768px]:top-1'>
                            <h1 className='text-3xl font-bold leading-16 mb-2  max-[425px]:text-3xl max-[425px]:mb-1 max-[768px]:text-2xl'> Step Up<br /> Your Style</h1>
                            <h6 className='text-lg mb-1 max-[425px]:mb-0 max    -[768px]:mb-0'>Starting At</h6>
                            <h3 className='text-3xl font-bold max-[425px]:text-2xl max-[425px]:mb-0  text-red-500 mb-2'>₹ 250</h3>
                            <button name='mens-shoes' className='bg-black px-3 py-2 rounded-full max-[768px]:px-2 max-[768px]:py-1 max-[425px]:text-sm text-white font-medium active:scale-105' onClick={setCheck} >Shop Now <i className="ri-arrow-right-s-line"></i></button>
                        </div>
                    </div>
                    <div className='relative'>
                        <img src='https://st2.depositphotos.com/16122460/44158/i/450/depositphotos_441589656-stock-photo-luxury-wrist-watches-color-background.jpg' alt="" className='rounded max-[425px]:h-[45vh] max-[768px]:h-[45.5vh] h-[36.5vh]   w-full object-cover' />
                        <div className='absolute top-5 left-3  max-[425px]:top-2 max-[768px]:top-2'>
                            <h1 className='text-3xl font-bold leading-16 mb-2  max-[425px]:text-3xl max-[425px]:mb-1 max-[768px]:text-2xl'> Timeless Style <br /> & Precision</h1>
                            <h6 className='text-lg mb-1 max-[425px]:mb-0 max-[768px]:mb-0'>Starting At</h6>
                            <h3 className='text-3xl font-bold max-[425px]:text-2xl max-[425px]:mb-1 max-[768px]:mb-0  text-red-500 mb-2'>₹ 300</h3>
                            <button name='mens-watches' className='bg-black px-3 py-2 rounded-full max-[768px]:px-2 max-[768px]:py-1  max-[425px]:text-sm text-white font-medium active:scale-105' onClick={setCheck} >Shop Now <i className="ri-arrow-right-s-line"></i></button>
                        </div>
                    </div>
                </div>
            </div>

            {/* categories */}
            <div className='min-h-60 w-full bg-transparent p-5 flex flex-wrap gap-3 relative max-[425px]:top-[45vh]  max-[768px]:top-[35vh]'>
                <Category url={"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQeT2qApOXMl7mtGvKvOYP9jvzl7al8S3jcpzWG1AEiB55dBhX6iFpRoAs4iZ68ofitLzA-d6Qr9djNsLhFSoFZd2bNH-xiyL3kq-Fd6pfLSqdmg2XqRtzx"} title={"smartphones"} quntity={10} />
                <Category url={"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR0kQIw8yfUjYQR7deBLaW3ETdGn2kG0I-CLoywoDE5QbTz2Uh93poKLQcIZD78EOy81ah-YVQ84WnQJ_9Qqh63Ol3HvjgM62gEcaIkKj9C"} title={"Laptops"} quntity={25} />
                <Category url={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRzMsBz7oduiIivg1mzFhDSJAXTLs6AN5_Cw&s'} title={"groceries"} quntity={12} />
                <Category url={'https://static.vecteezy.com/system/resources/thumbnails/034/630/930/small_2x/elegant-decorative-vases-and-planters-with-succulents-and-other-plants-on-transparent-background-interior-accessories-cut-out-home-decor-front-view-ai-generated-png.png'} title={"home-decoration"} quntity={17} />
                <Category url={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_XnEUESVy9GVibsx-GFe6p1wzV4ndKRxjPQ&s'} title={"womens-jewellery"} quntity={8} />
                <Category url={'data:image/jpeg;base64,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'} title={"furniture"} quntity={13} />
                <Category url={'data:image/jpeg;base64,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'} title={"mens-shirts"} quntity={18} />
                <Category url={'data:image/jpeg;base64,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'} title={"sunglasses"} quntity={10} />
            </div>

            {/* product */}
            <div className='relative bg-white w-full min-h-[300px] max-[425px]:top-[45vh]'>
                <div className='p-5 rounded'>

                    <div className='flex justify-between items-center'>
                        <div>
                            <h1 className='text-3xl font-semibold mb-1'>Girls' Clothes</h1>
                            <p className='text-gray-800 mb-3'>Stylish and affordable girls’ clothing online. Shop now!  </p>
                        </div>

                        <button onClick={setCheck} name='tops' className='bg-green-500 px-3 py-2 rounded text-white font-medium active:scale-105'>Explore More</button>
                    </div>

                    <div className='flex gap-3  max-[425px]:flex-col max-[768px]:overflow-auto'>
                        <div className='w-[230px] max-[425px]:w-full h-[350px] flex-shrink-0'>
                            <img src="https://content.jdmagicbox.com/quickquotes/listicle/listicle_1720685131160_m6cqz_740x493.jpg?impolicy=queryparam&im=Resize=(847,400),aspect=fit&q=75" alt="" className='w-full hover:scale-95 h-full rounded object-cover' />
                        </div>

                        {/* <Cart url={product1} title={"Dried Mango"} price={100} />
                        <Cart url={product2} title={"Crunchy Crips"} price={450} />
                        <Cart url={product3} title={"Jewel Cranberries"} price={280} />
                        <Cart url={product4} title={"Almond Organic"} price={190} /> */}
                        {finalpro.length > 0 ? Carts : loadTime}
                    </div>
                </div>
            </div>

            <div className='relative bg-white w-full min-h-[300px]  max-[425px]:top-[20 vh]'>
                <div className='p-5 rounded'>

                    <div className='flex justify-between items-center'>
                        <div>
                            <h1 className='text-3xl font-semibold max-[425px]:text-2xl mb-1'>Fragrances</h1>
                            <p className='text-gray-800 mb-3'>Discover long-lasting perfumes and body sprays that match your vibe. Shop top fragrances online at unbeatable prices.</p>
                        </div>

                        <button onClick={setCheck} name='fragrances' className='bg-green-500 px-3 py-2 rounded text-white font-medium active:scale-105'>Explore More</button>
                    </div>

                    <div className='flex gap-3 max-[425px]:flex-col max-[768px]:overflow-auto'>
                        <div className='w-[230px] hover:scale-95 max-[425px]:w-full h-[350px]'>
                            <img src='https://cdn.riah.ae/storage/upload/images/2024/12/03/674eb51f1b2e1.jpg' alt="" className='w-full h-full rounded object-cover' />
                        </div>

                        {/* <Cart url={product5} title={"Fresh tamato"} price={50} />
                        <Cart url={product2} title={"Crunchy Crips"} price={450} />
                        <Cart url={product3} title={"Jewel Cranberries"} price={280} />
                        <Cart url={product4} title={"Almond Organic"} price={190} /> */}
                        {finalpro.length > 0 ? Carts2 : loadTime}
                    </div>
                </div>
            </div>

            {/* Gallery */}
            <div className='w-full px-6 py-6 flex flex-col md:flex-row gap-6'>
                {/* Left Banner */}
                <div className='w-full md:w-1/2 h-[40vh] rounded-lg overflow-hidden shadow hover:scale-95 transition-all'>
                    <img
                        src="https://assets.aboutamazon.com/85/47/87d3593c4ba88f803ee2ec833d1d/aa-mar2024-bestdealstoshopspringsaledeals-hero-2000x1125.jpg"
                        alt="Women's Fashion"
                        className='w-[90%] h-full object-cover'
                    />
                </div>
                <div className='w-full md:w-1/2 h-[40vh] rounded-lg overflow-hidden shadow hover:scale-95 transition-all'>
                    <img
                        src="https://assets.aboutamazon.com/ce/3c/8019e35f43f9b01b1a37bf45754c/aa-mar2025-bss-us-standard-hero-v2-600kb-2000x1125.jpg"
                        alt="Women's Fashion"
                        className='w-[90%] h-full object-cover'
                    />
                </div>

                {/* Right Banner */}
                <div className='w-full md:w-1/2 h-[40vh] rounded-lg overflow-hidden shadow hover:scale-95 transition-all'>
                    <img
                        src="https://assets.aboutamazon.com/dims4/default/fe14d87/2147483647/strip/true/crop/1999x1125+1+0/resize/1240x698!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F85%2F28%2F4b533c1446b4ab8aef81fea4f611%2Fbigspringsale-en.png"
                        alt="Men's Shoes"
                        className='w-[90%] h-full object-cover object-center'
                    />
                </div>
            </div>

            <div className='p-5 rounded relative max-[425px]:top-[150px] max-[768px]:-top-10'>

                <div>
                    <div>
                        <h1 className='text-3xl font-semibold mb-1'>Latest News</h1>
                        <p className='text-gray-800 mb-3'>Present posts in a way to highlight interesting momonts of your blog</p>
                    </div>

                    <div className='flex gap-10  max-[768px]:overflow-y-auto max-[425px]:flex-col'>
                        <Blogcart
                            date="July 25, 2025"
                            title="How to Style Sneakers with Any Outfit"
                            url="https://cdn.pixabay.com/photo/2020/05/04/07/15/nike-5128118_640.jpg"
                        />

                        <Blogcart
                            date="July 20, 2025"
                            title="Top 10 Wardrobe Essentials for Women"
                            url="https://media.istockphoto.com/id/821808168/photo/woman-with-her-wardrobe.jpg?s=612x612&w=0&k=20&c=rNeOSdHCVB7cTxMuWh-DHHppPhoO5QHNl58iOVFDFLo="
                        />

                        <Blogcart
                            date="July 18, 2025"
                            title="Why Fragrances Are the New Fashion Statement"
                            url="https://cdn.pixabay.com/photo/2017/01/19/04/38/fragrance-1991531_640.jpg"
                        />

                    </div>

                </div>


            </div>

            <br />
            <hr />
            <Header />

            <ToastContainer />
        </div>
    )
}

export default Home