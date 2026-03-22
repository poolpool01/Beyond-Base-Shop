import { Link } from "react-router-dom"
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { GoChevronDown } from "react-icons/go"; // Icon ลูกศรลงสำหรับ Shop
function Navbar() {
    return (
        <div>
            {/* Banner ส่วนบน */}
            <div className="w-full bg-black py-2 px-4 relative">
                <div className="max-w-7xl mx-auto flex items-center justify-center">

                    {/* ข้อความตรงกลาง */}
                    <p className="text-[14px] text-white text-center">
                        Sign up and get 20% off to your first order.{" "}
                        <Link to="/signup" className="font-semibold underline cursor-pointer">
                            Sign Up Now
                        </Link>
                    </p>

                    {/* (X) อยู่ขวาสุด */}
                    <button className=" hidden md:flex absolute right-[10%] text-white text-xl leading-none hover:opacity-70 transition-all">
                        &times;
                    </button>
                </div>
            </div>

            {/* Navbar */}
            <nav className="w-full bg-white">
                <div className="max-w-7xl mx-auto flex items-center justify-between py-5 px-4 md:px-8 gap-10">

                    {/* 1. Logo */}
                    <h1 className="font-bold text-[28px] lg:text-[32px]  cursor-pointer">
                        <Link to="/">BEYOND.BASE</Link>
                    </h1>

                    {/* 2. Menu Links (Hidden on Mobile) */}
                     <ul className="hidden md:flex items-center gap-6 whitespace-nowrap text-base">
                        <li className="flex items-center gap-1 cursor-pointer">
                            Shop <GoChevronDown />
                        </li>
                        <li><Link to="/onsale">On Sale</Link></li>
                        <li><Link to="/newarrivals">New Arrivals</Link></li>
                        <li><Link to="/brands">Brand</Link></li>
                    </ul>
               
                    
                    <div className="hidden lg:flex flex-1 items-center bg-[#F0F0F0] rounded-full px-4 py-3 gap-3">
                        <IoSearchOutline className="text-xl text-gray-500"/>
                        <input
                            type="text"
                            placeholder="Search for products..."
                            className="bg-transparent outline-none w-full text-sm"
                        />
                    </div>
                   



                    <div className="flex items-center shrink-0 gap-4 ">
                        <div className="flex lg:hidden">
                            <IoSearchOutline className="text-2xl  cursor-pointer"/>
                        </div>
                        <IoCartOutline className="text-2xl cursor-pointer" />
                        <FaRegUserCircle className="text-xl cursor-pointer" />
                    </div>

                </div>
            </nav>

        </div>
    )
}

export default Navbar