import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import visa from '../../assets/icons/visa.png'
import mastercard from '../../assets/icons/mastercard.png'
import paypal from '../../assets/icons/paypal.png'
import applepay from '../../assets/icons/applepay.png'
import googlepay from '../../assets/icons/googlepay.png'
import { FaTwitter, FaFacebookF, FaInstagram  ,FaGithub  } from "react-icons/fa";
function Footer() {
    return (
        <div className='w-full px-4 pt-60 lg:pt-30 mt-40 lg:mt-20 bg-[#F0F0F0]'>
            <div className='relative mx-15 flex items-center justify-center'>
                {/* Card Email */}
                <div className='absolute w-[400px] flex flex-col md:flex-row md:w-[780px] lg:w-[1280px] top-[-40%] lg:top-[-80%] md:left-[200%] lg:left-[20%]  px-16 py-8  gap-5 items-center justify-between bg-black rounded-md'>
                    <div>
                        <h3 className='text-3xl md:text-[40px] font-bold text-white'>
                            STAY UPTO DATE ABOUT
                            <br />
                            OUR LATEST OFFERS
                        </h3>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='w-full flex items-center gap-2 rounded-full py-3 px-10  bg-gray-100'>
                            <HiOutlineMail className='text-[16px]' />
                            <input type="email" placeholder='Enter your email address' className=' outline-none' />
                        </div>
                        <button className='w-full rounded-full py-3 px-10 bg-gray-100 cursor-pointer  hover:text-gray-400'>
                            Subscribe to Newsletter
                        </button>
                    </div>
                </div>

                {/* Info */}
                <div className='w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 px-4 py-4  '>
                    <div className='flex flex-col gap-2'>
                        <h3 className='text-[34px] font-bold uppercase'>beyond.base</h3>
                        <p className='text-[14px] text-black/60'>
                            We have clothes that suits your style and <br /> 
                            which you’re proud to wear. <br />
                            From women to men.
                        </p>
                        <div className='flex gap-3 py-8'>
                            <div className='rounded-full w-fit px-2 py-2 bg-white border border-gray-300'>
                                <FaTwitter className='text-[14px]'/>
                            </div>
                            <div className='rounded-full w-fit px-2 py-2 bg-black'>
                                <FaFacebookF className='text-[14px] text-white'/>
                            </div>
                            <div className='rounded-full w-fit px-2 py-2 bg-white border border-gray-300'>
                                <FaInstagram className='text-[14px]'/>
                            </div>
                            <div className='rounded-full w-fit px-2 py-2 bg-white border border-gray-300'>
                                <FaGithub className='text-[14px]'/>
                            </div>
                        </div>
                    </div>
                    <div className='pt-2'>
                        <p className='text-[16px] font-medium uppercase'>company</p>
                        <ul className='flex flex-col gap-3 pt-5'>
                            <li className='text-black/60'><a href="#">About</a></li>
                            <li className='text-black/60'><a href="#">Features</a></li>
                            <li className='text-black/60'><a href="#">Works</a></li>
                            <li className='text-black/60'><a href="#">Career</a></li>
                        </ul>
                    </div>
                    <div className='pt-2'>
                        <p className='text-[16px] font-medium uppercase'>Help</p>
                        <ul className='flex flex-col gap-3 pt-5'>
                            <li className='text-black/60'><a href="#">Customer Support</a></li>
                            <li className='text-black/60'><a href="#">Delivery Details</a></li>
                            <li className='text-black/60'><a href="#">Terms & Conditions</a></li>
                            <li className='text-black/60'><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className='pt-2'>
                        <p className='text-[16px] font-medium uppercase'>FAQ</p>
                        <ul className='flex flex-col gap-3 pt-5'>
                            <li className='text-black/60'><a href="#">Account</a></li>
                            <li className='text-black/60'><a href="#">Manage Deliveries</a></li>
                            <li className='text-black/60'><a href="#">Orders</a></li>
                            <li className='text-black/60'><a href="#">Payments</a></li>
                        </ul>
                    </div>
                    <div className='pt-2'>
                        <p className='text-[16px] font-medium uppercase'>resources</p>
                        <ul className='flex flex-col gap-3 pt-5'>
                            <li className='text-black/60'><a href="#">Free eBooks</a></li>
                            <li className='text-black/60'><a href="#">Development Tutorial</a></li>
                            <li className='text-black/60'><a href="#">How to - Blog</a></li>
                            <li className='text-black/60'><a href="#">Youtube Playlist</a></li>
                        </ul>
                    </div>
                </div>
            </div>

             <hr className='bg-gray-400  '/>

             <div className='flex flex-col md:flex-row gap-3 md:gap-0 items-center justify-between py-4'>
                <div>
                    <p>Beyond.base © 2000-2026, All Rights Reserved</p>
                </div>

                <div className='flex'>
                    <img src={visa} alt="" className='w-fit size-10 object-cover'/>
                    <img src={mastercard} alt="" className='w-fit size-10 object-cover'/>
                    <img src={paypal} alt="" className='w-fit size-10 object-cover'/>
                    <img src={applepay} alt="" className='w-fit size-10 object-cover'/>
                    <img src={googlepay} alt="" className='w-fit size-10 object-cover'/>
                </div>

             </div>
        </div>
    )
}

export default Footer
