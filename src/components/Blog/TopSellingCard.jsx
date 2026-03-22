import React from 'react'
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
function TopSellingCard({ image, name, rating, price, discount }) {

    const star = Array.from({ length: 5 }, (_, index) => index + 1);
    const promotion = price - (price * discount / 100);

    return (
        <div className='w-full flex flex-col gap-6  md:px-16 md:py-16 rounded-sm cursor-pointer md:hover:border border-gray-400  md:hover:scale-80 transition-all duration-500 '>
            <div className='bg-[#F0EEED]  rounded-sm py-8 '>
                <img
                    src={image}
                    alt=""
                    className='w-full h-30 md:h-60  object-contain'
                />
            </div>

            <div>
                <h3 className='text-[14px] md:text-[20px] font-bold'>
                    {name}
                </h3>
            </div>

            <div className='flex text-[16px]'>
                {star.map((index) => {

                    if (rating >= index) {
                        return <FaStar key={index} className='text-yellow-400' />
                    } else if (rating > index - 1 && rating < index) {
                        return <FaStarHalfAlt key={index} className='text-yellow-400' />
                    } else {
                        return <FaStar key={index} className='text-gray-400' />
                    }
                })}
                <span className='ml-2 text-sm text-gray-600'>{rating}/5</span>
            </div>

            <div>
                {promotion ?
                    <div className='flex items-center gap-2'>
                        <span className='text-[14px] lg:text-[24px] font-bold'>
                            ${promotion}
                        </span>
                        <span className='text-[14px] lg:text-[24px] text-gray-400 line-through'>
                            ${price}
                        </span>
                        <div className='bg-red-50 px-1.5 lg:px-3 py-1 rounded-full'>
                            <span className='text-red-500 text-[14px] lg:text-[24px] font-medium'>
                                -{discount}%
                            </span>
                        </div>
                    </div>

                    : 
                    <h3 className='text-[14px] lg:text-[24px] font-bold'>
                        ${price}
                    </h3>
                }
            </div>

        </div>
    )
}

export default TopSellingCard
