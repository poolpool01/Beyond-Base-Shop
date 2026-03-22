import React from 'react'
import { FaStar ,FaStarHalfAlt  } from "react-icons/fa";
function NewArrivalsCards({ image, name, rating, price, discount }) {

    const stars = Array.from({ length: 5 }, (_, index) => index + 1);

    const promotion = price - (price * discount / 100);

    return (
        <div
            className='w-full flex flex-col justify-center gap-6  md:py-16 md:px-16  cursor-pointer md:hover:scale-80 transition-all duration-500 
            md:hover:border border-gray-400 rounded-md '
        >
            <div className='bg-[#F0EEED] rounded-sm  py-8'>
                <img
                    src={image}
                    alt=""
                    className='w-full h-30 md:h-60 object-contain'
                />
            </div>

            <div>
                <p className='text-[14px] md:text-[20px] text-black font-bold'>
                    {name}
                </p>
            </div>

            <div className='flex text-[16px] '>
                {stars.map((starValue) => {
                    if (rating >= starValue) {
                        // กรณีดาวเต็มดวง (คะแนนปัจจุบันมากกว่าหรือเท่ากับลำดับดาว)
                        return <FaStar key={starValue} className="text-yellow-400 fill-yellow-400" />;
                    } else if (rating > starValue - 1 && rating < starValue) {
                        // กรณีดาวครึ่งดวง (คะแนนอยู่ระหว่างดาวดวงก่อนหน้ากับดวงนี้)
                        return <FaStarHalfAlt key={starValue} className="text-yellow-400 fill-yellow-400" />;
                    } else {
                        // กรณีดาวว่างเปล่า
                        return <FaStar key={starValue} className="text-gray-200 fill-gray-200" />;
                    }
                })}
                <span className="ml-2 text-sm text-gray-600">{rating}/5</span>
            </div>

            <div>
                {promotion ?
                    <div className='flex items-center gap-2'>
                        <span className='text-[14px] lg:text-[24px] font-bold text-black'>
                            $ {promotion}
                        </span>

                        <span className='text-[14px] lg:text-[24px] text-gray-400 line-through'>
                            $ {price}
                        </span>

                        <div className='bg-red-50 px-1.5 lg:px-3 py-1 rounded-full'>
                            <span className='text-red-500 text-[14px] lg:text-[24px] font-medium'>
                                -{discount}%
                            </span>
                        </div>
                    </div>

                    :
                    <h3 className='text-[24px] font-bold'>
                        $ {price}
                    </h3>
                }
            </div>

        </div>
    )
}

export default NewArrivalsCards
