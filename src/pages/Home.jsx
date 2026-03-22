import React, { useEffect, useState, useRef } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Navigation } from 'swiper/modules';
// นำเข้า CSS พื้นฐานของ Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// ✅ เปลี่ยนเป็นแบบนี้แทน
import { Swiper, SwiperSlide } from 'swiper/react';

//components
import Blog from '../components/Blog/Blog'
import NewArrivalsCards from '../components/Blog/NewArrivalsCards'
import TopSellingCards from '../components/Blog/TopSellingCard'
import DressStyleCard from '../components/Blog/DressStyleCard'
import ReviewCards from '../components/Blog/ReviewCards';

//img
import Brands from '../components/Blog/Brands'
import brand1 from '../assets/image/brand1.png'
import brand2 from '../assets/image/brand2.png'
import brand3 from '../assets/image/brand3.png'
import brand4 from '../assets/image/brand4.png'
import brand5 from '../assets/image/brand5.png'
//clothes NewArrivals
import shirt1 from '../assets/clothes/shirt1.png'
import pants1 from '../assets/clothes/pants1.png'
import shirt2 from '../assets/clothes/shirt2.png'
import shirt3 from '../assets/clothes/shirt3.png'
//clothes Top Selling
import shirtTop1 from '../assets/clothesTopSell/shirt1.png'
import shirtTop2 from '../assets/clothesTopSell/shirt2.png'
import pantsTop1 from '../assets/clothesTopSell/pants1.png'
import pantsTop2 from '../assets/clothesTopSell/pants2.png'

//img Dress Style
import Casual from '../assets/dressStyle/casual.png'
import Formal from '../assets/dressStyle/formal.png'
import Party from '../assets/dressStyle/party.png'
import Gym from '../assets/dressStyle/gym.png'
import Footer from '../components/Footer/Footer';




const brandImg = [
    {
        id: 1,
        image: brand1,

    },
    {
        id: 2,
        image: brand2,

    },
    {
        id: 3,
        image: brand3
    },
    {
        id: 4,
        image: brand4,

    },
    {
        id: 5,
        image: brand5,

    },
]

const NewArrivals = [
    {
        id: 1,
        image: shirt1,
        name: "T-SHIRT WITH TAPE DETAILS",
        rating: 4.5,
        price: 120
    },
    {
        id: 2,
        image: pants1,
        name: "SKINNY FIT JEANS",
        rating: 3.5,
        price: 260,
        discount: 20,
    },
    {
        id: 3,
        image: shirt2,
        name: "CHECKERED SHIRT",
        rating: 2,
        price: 180
    },
    {
        id: 4,
        image: shirt3,
        name: "SLEEVE STRIPED T-SHIRT",
        rating: 4.5,
        price: 130
    },

    {
        id: 5,
        image: shirt2,
        name: "SLEEVE STRIPED T-SHIRT",
        rating: 4.5,
        price: 130
    },
]

const TopSelling = [
    {
        id: 1,
        image: shirtTop1,
        name: "VERTICAL STRIPED SHIRT",
        rating: 5.0,
        price: 230,
        discount: 20,
    },
    {
        id: 2,
        image: shirtTop2,
        name: "COURAGE GRAPHIC T-SHIRT",
        rating: 4.0,
        price: 145,

    },
    {
        id: 3,
        image: pantsTop1,
        name: "LOOSE FIT BERMUDA SHORTS",
        rating: 3.0,
        price: 80
    },
    {
        id: 4,
        image: pantsTop2,
        name: "FADED SKINNY JEANS",
        rating: 4.5,
        price: 210
    },

    {
        id: 5,
        image: shirt2,
        name: "SLEEVE STRIPED T-SHIRT",
        rating: 4.5,
        price: 130
    },
]

const DressStyle = [
    {
        id: 1,
        image: Casual,
        name: "Casual"
    },
    {
        id: 2,
        image: Formal,
        name: "Formal"
    },
    {
        id: 3,
        image: Party,
        name: "Party"
    },
    {
        id: 4,
        image: Gym,
        name: "Gym"
    },
]

const reviews = [
    {
        id: 1,
        rating: 5,
        name: "Sarah M.",
        verified: true,
        comment: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
    },
    {
        id: 2,
        rating: 5,
        name: "Alex K.",
        verified: true,
        comment: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."
    },
    {
        id: 3,
        rating: 5,
        name: "James L.",
        verified: true,
        comment: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
    },
    // เพิ่มข้อมูลอื่นๆ ได้ตามต้องการ
];




function Home() {
    const swiperRef = useRef(null);
    // กำหนดค่าเริ่มต้น: ถ้าเป็นมือถือควรเริ่มที่ 2 แต่เพื่อความง่าย
    // เราจะใช้ Logic ว่าถ้ายังไม่กด View All ให้โชว์แค่ 4 (บน Desktop) หรือ 2 (บน Mobile ด้วย CSS)
    const [isExpanded, setIsExpanded] = useState(false);
    const [isExpandedTop, setIsExpandedTop] = useState(false);

    // เลือกจำนวนที่จะแสดง: ถ้ากดขยายแล้วให้โชว์หมด ถ้ายังให้โชว์แค่ 4
    const visibleItems = isExpanded ? NewArrivals : NewArrivals.slice(0, 4);
    const visibleTopsell = isExpandedTop ? TopSelling : TopSelling.slice(0, 4);



    return (
        <main className='bg-white'>

            <section className='w-full'>
                <Blog />
            </section>

            <section className='bg-black mt-0 lg:mt-2 py-8 px-4'>
                <div className='max-w-full flex flex-wrap justify-center items-center gap-6 md:gap-18'>
                    {/*  แถวบน 3  (บนมือถือ) */}
                    <div className='flex justify-center items-center gap-6 md:gap-18 w-full lg:w-auto'>
                        {brandImg.slice(0, 3).map((item) => (
                            <Brands key={item.id} image={item.image} />
                        ))}
                    </div>

                    {/* แถวล่าง 2 (บนมือถือ) แต่จะขึ้นไปต่อแถวเดียวกันบนจอใหญ่ */}
                    <div className='flex justify-center items-center gap-6 md:gap-18 w-full lg:w-auto'>
                        {brandImg.slice(3, 5).map((item) => (
                            <Brands key={item.id} image={item.image} />
                        ))}
                    </div>
                </div>
            </section>

            {/* NEW ARRIVALS */}
            <section className='w-full'>
                <div className='mx-auto px-4 py-10'>
                    {/* Title */}
                    <div className='flex items-center justify-center mb-10'>
                        <h3 className='text-3xl md:text-[48px] font-bold'>
                            NEW ARRIVALS
                        </h3>
                    </div>
                    {/* Grid System */}
                    {/* 
                    grid-cols-2: มือถือโชว์ 2 รูปต่อแถว 
                    md:grid-cols-4: จอคอมโชว์ 4 รูปต่อแถว 
                    */}
                    <div className='grid grid-cols-2 md:grid-cols-4 items-stretch  gap-4 md:gap-4 mt-5'>

                        {visibleItems.map((item) => (
                            <NewArrivalsCards
                                key={item.id}
                                image={item.image}
                                name={item.name}
                                rating={item.rating}
                                price={item.price}
                                discount={item.discount}
                            />
                        ))}



                    </div>
                    {/* View All Button */}
                    {/* แสดงปุ่มเฉพาะเมื่อข้อมูลมีมากกว่าจำนวนที่โชว์อยู่ หรืออยากให้แสดงตลอดก็ได้ */}
                    <div className='flex items-center justify-center mt-10'>
                        {!isExpanded && NewArrivals.length > 2 && (
                            <button
                                onClick={() => setIsExpanded(true)}
                                className='px-16 py-3 border border-gray-200 rounded-full text-black font-medium hover:bg-black hover:text-white transition-all duration-300 w-full md:w-auto cursor-pointer'
                            >
                                View All
                            </button>
                        )}

                        {isExpanded && (
                            <button
                                onClick={() => setIsExpanded(false)}
                                className='px-16 py-3 border border-gray-200 rounded-full text-black font-medium hover:bg-black hover:text-white transition-all duration-300 w-full md:w-auto cursor-pointer'
                            >
                                Show Less
                            </button>
                        )}
                    </div>

                </div>
                <hr className="mx-4 md:mx-10 border border-black/10" />
            </section>

            {/* Top Selling */}
            <section className='w-full'>
                <div className=' mx-auto px-4 py-10'>
                    {/* Title */}
                    <div className='flex items-center justify-center mb-10'>
                        <h3 className='text-3xl md:text-[48px] font-bold uppercase'>
                            top selling
                        </h3>
                    </div>

                    {/* Grid System */}
                    <div className='grid grid-cols-2 md:grid-cols-4 items-stretch justify-center gap-4 md:gap-6 mt-5'>
                        {visibleTopsell.map((item) => (
                            <TopSellingCards
                                key={item.id}
                                image={item.image}
                                name={item.name}
                                rating={item.rating}
                                price={item.price}
                                discount={item.discount}
                            />
                        ))}
                    </div>

                    <div className='flex items-center justify-center mt-10'>
                        {!isExpandedTop && TopSelling.length > 2 && (
                            <button
                                onClick={() => setIsExpandedTop(true)}
                                className='px-16 py-3 rounded-full border border-gray-300 text-black hover:text-white hover:bg-black cursor-pointer transition-all duration-300 w-full md:w-auto'
                            >
                                View All
                            </button>
                        )}

                        {isExpandedTop && (
                            <button
                                onClick={() => setIsExpandedTop(false)}
                                className='px-16 py-3 rounded-full border border-gray-300 text-black hover:text-white hover:bg-black cursor-pointer transition-all duration-300 w-full md:w-auto'
                            >
                                Show Less
                            </button>
                        )}
                    </div>
                </div>
            </section>

            {/* Browse By Dress Style */}
            <section className='w-full'>
                <div className='lg:mx-20 px-4 py-8 bg-[#F0F0F0] rounded-xl'>
                    <div className='flex items-center justify-center py-4'>
                        <h3 className='text-3xl md:text-[48px] font-bold uppercase'>BROWSE BY DRESS STYLE</h3>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:mx-16 lg:my-10'>
                        {DressStyle.map((item) => {
                            const isLarge = item.id === 2 || item.id === 3;

                            return (

                                <DressStyleCard
                                    key={item.id}
                                    image={item.image}
                                    title={item.name}
                                    className={isLarge ? 'lg:col-span-2' : 'lg:col-span-1'}
                                />
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Comment */}
            <section className='w-full'>
                <div className='mx-auto px-4 py-8'>
                    {/* Header Area */}
                    <div className='flex items-center justify-between gap-5 px-16'>
                        <h3 className='text-[16px] lg:text-[48px] font-bold'>
                            OUR HAPPY CUSTOMERS
                        </h3>

                        <div className='flex gap-5 relative z-10 '>
                            <FaArrowLeft
                                onClick={() => {
                                    console.log("Left Clicked"); // ใส่ Log เช็กว่า Event ทำงานไหม
                                    swiperRef.current?.slidePrev();
                                }}
                                className='cursor-pointer text-2xl hover:text-gray-500 transition-colors'
                            />
                            <FaArrowRight
                                onClick={() => {
                                    console.log("Right Clicked");
                                    swiperRef.current?.slideNext();
                                }}
                                className='cursor-pointer text-2xl hover:text-gray-500 transition-colors'
                            />
                        </div>
                    </div>

                    {/* Slider Area */}
                    <div className='px-4 md:px-16 '>
                        <Swiper
                            modules={[Navigation]}
                            onBeforeInit={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            // ตั้งค่าพื้นฐาน
                            direction="horizontal" // บังคับให้เป็นแนวนอน (ปกติเป็นค่า default อยู่แล้ว)
                            spaceBetween={20}       // ระยะห่างระหว่าง Card
                            slidesPerView={1}       // มือถือเห็น 1 อัน
                            grabCursor={true}       // เปลี่ยนเมาส์เป็นรูปมือเวลาลาก
                            breakpoints={{
                                // เมื่อจอขนาด 640px ขึ้นไป (Tablet)
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20
                                },
                                // เมื่อจอขนาด 1024px ขึ้นไป (Desktop)
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 30
                                },
                            }}
                            loop={true}
                            className="mySwiper w-full" // มั่นใจว่า Swiper กว้างเต็มหน้าจอ
                        >
                            {reviews.map((item) => (
                                <SwiperSlide key={item.id} className="h-auto">
                                    {/* h-auto ช่วยให้ Card สูงเท่ากันตามเนื้อหา */}
                                    <ReviewCards reviews={item} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>


                </div>
            </section>

            <footer>
                <Footer/>       
            </footer>

        </main>
    )
}

export default Home
