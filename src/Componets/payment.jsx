import React, { useEffect, useState, useRef } from 'react';
import Nav from './nav';
import Qr from "../assets/GooglePay_QR.png";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import logo from "../assets/download.png"
import emailjs from '@emailjs/browser';

const Payment = () => {
    const [user, setuser] = useState(null);
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const receiptRef = useRef();

    const getUser = () => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser) {
            setuser(storedUser);
            setProducts(storedUser.products || []);
        }
    };

    const totalPrice = () => {
        let sum = products.reduce((acc, product) => {
            return acc + product.price * (product.quantity || 1);
        }, 0);
        return Math.ceil(sum);
    };

    const generatePDF = () => {
        const input = receiptRef.current;

        html2canvas(input, {
            useCORS: true,
            allowTaint: true,
            backgroundColor: "#fff",
            scale: 2,
        }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const width = pdf.internal.pageSize.getWidth();
            const height = (canvas.height * width) / canvas.width;
            pdf.addImage(imgData, 'PNG', 0, 0, width, height);
            pdf.save(`receipt-${Date.now()}.pdf`); // ✅ Corrected
        }).catch(err => {
            console.error("PDF generation failed:", err);
            toast.error("Failed to generate receipt.");
        });
    };







    const payHandler = () => {
        toast.success("Order placed successfully");
        generatePDF();
        const updatedUser = { ...user, products: [] }; // copy user and reset products
        localStorage.setItem("user", JSON.stringify(updatedUser));
        setTimeout(() => {
            navigate("/addToCart");
        }, 2000);

    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <div>
            <Nav />
            <div className='relative top-32 bg-slate-200 flex items-center justify-center w-[100%] h-[78.9vh]'>
                <div className='w-[30%] rounded-2xl bg-slate-300 max-[425px]:w-[80%] h-[75vh] p-5'>
                    <div className='mb-3 w-[100%] bg-sky-300 h-[50vh]'>
                        <img className='w-[100%] h-[100%] rounded' src={Qr} alt="QR Code" />
                    </div>
                    <div className='flex mb-5 max-[425px]:mb-2 justify-center items-center font-bold text-3xl'>
                        <p>₹{totalPrice()}</p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button
                            type="submit"
                            onClick={payHandler}
                            className='bg-black text-white px-6 py-2 rounded hover:bg-zinc-800 transition-all active:scale-95 shadow-md'
                        >
                            Done
                        </button>
                    </div>
                </div>
            </div>

            {/* Off-screen but renderable receipt for PDF */}
            <div
                style={{
                    position: 'absolute',
                    top: '-9999px',
                    left: '-9999px',
                    opacity: 0,
                    pointerEvents: 'none',
                    zIndex: -1
                }}
            >
                <div
                    ref={receiptRef}
                    className='p-8 max-w-md mx-auto bg-white text-black rounded-md shadow-xl border border-gray-300 font-sans text-sm'
                >
                    {/* Header */}
                    <div className='flex justify-between items-center mb-6'>
                        <div className='flex items-center gap-3'>
                            <img src={logo} alt="Kokan Bazar Logo" className='w-12 h-12 rounded-full' />
                            <div>
                                <h1 className='text-xl font-bold text-gray-800'>Kokan Bazar</h1>
                                <p className='text-gray-500 text-xs'>Fresh Groceries from Konkan</p>
                            </div>
                        </div>
                        <div className='text-right text-xs text-gray-600 leading-5'>
                            <p><strong>Invoice No:</strong> #{Date.now().toString().slice(-6)}</p>
                            <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
                        </div>
                    </div>

                    {/* Shop & Customer Details */}
                    <div className='mb-4 text-xs'>
                        <p><strong>From:</strong> Kokan Bazar, Main Road, Raigad, Maharashtra</p>
                        <p><strong>Contact:</strong> +91-7775025806</p>
                        <p><strong>Email:</strong> support@kokanbazar.com</p>
                        <hr className='my-2' />
                        <p><strong>Customer:</strong> {user?.name || "Guest"}</p>
                    </div>

                    {/* Table of Products */}
                    <table className='w-full mb-4 border border-gray-300 text-xs'>
                        <thead>
                            <tr className='bg-gray-100 border-b border-gray-300'>
                                <th className='p-2 text-left'>Item</th>
                                <th className='p-2 text-center'>Qty</th>
                                <th className='p-2 text-right'>Price</th>
                                <th className='p-2 text-right'>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((item, index) => (
                                <tr key={index} className='border-b border-gray-200'>
                                    <td className='p-2'>{item.title}</td>
                                    <td className='p-2 text-center'>{item.quantity || 1}</td>
                                    <td className='p-2 text-right'>₹{item.price}</td>
                                    <td className='p-2 text-right'>₹{item.price * (item.quantity || 1)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Total Section */}
                    <div className='text-right pr-2'>
                        <p className='text-sm font-semibold'>Subtotal: ₹{totalPrice()}</p>
                        <p className='text-sm font-semibold'>Delivery: ₹0</p>
                        <hr className='my-1' />
                        <p className='text-lg font-bold text-gray-800'>Grand Total: ₹{totalPrice()}</p>
                    </div>

                    {/* Footer */}
                    <div className='mt-6 text-center text-gray-400 text-xs'>
                        <p>Thank you for shopping with Kokan Bazar!</p>
                        <p>www.kokanbazar.com</p>
                    </div>
                </div>
            </div>

            <ToastContainer />
        </div>
    );
};

export default Payment;
