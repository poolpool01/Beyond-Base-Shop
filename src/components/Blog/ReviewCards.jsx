import React from 'react'
import { FaCheckCircle, FaStar } from "react-icons/fa";
function ReviewCards({ reviews }) {
  return (
    <div className='h-full rounded-[20px] border border-black/10 p-6 md:p-8'>
      {/* Stars */}
      <div className='flex gap-1 mb-4'>
            {[...Array(reviews.rating)].map((_, i)=>(
                <FaStar key={i} className='text-[#FFC633] text-xl'/>
            ))}
      </div>
     
        {/* Name & Verified */}
        <div className='flex items-center gap-2 mb-3'>
            <span className='text-xl font-bold'>{reviews.name}</span>
            {reviews.verified && <FaCheckCircle className='text-[#01AB31]'/>}
        </div>

        {/* Comment */}
        <p className='text-black/60 leading-relaxed text-sm md:text-base'>
            {reviews.comment}
        </p>
    </div>

  )
}

export default ReviewCards;
