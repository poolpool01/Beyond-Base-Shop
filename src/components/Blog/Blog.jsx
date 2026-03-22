import React from 'react'
import backgroundImage from '../../assets/image/ิblog.png'
import star1 from '../../assets/image/star1.png'
import star2 from '../../assets/image/star2.png'
function Blog() {
  return (
    <div className='bg-[#F2F0F1]'>
      <div className='grid grid-cols-1 md:grid-cols-2 w-full'>

        <div className='flex flex-col px-10  justify-center col-span-1 gap-5 pb-30'>
          <h3 className=' leading-8 lg:leading-22 pt-5 lg:pt-0 font-bold text-[32px] lg:text-[100px]  '>
            FIND CLOTHES <br />
            THAT MATCHES <br />
            YOUR STYLE <br />
          </h3>

          <p className='text-black/60'>
            Browse through our diverse range of meticulously crafted garments, designed <br />
            to bring out your individuality and cater to your sense of style.
          </p>

          <div className='w-full lg:w-fit '>
            <button className='bg-black rounded-full text-white w-full px-10 py-2 cursor-pointer '>
              Shop Now
            </button>
          </div>

          <div className='grid grid-cols-3 lg:grid-cols-5 items-center px-8 gap-2 text-center'>
            {/* 200+ */}
            <div>
              <h3 className='text-black text-[28px] lg:text-[40px] font-bold '>200+</h3>
              <p className='text-black/60 text-[14px] lg:text-[16px]'>International Brands</p>
            </div>

            {/* เส้นคั่น (แสดงเฉพาะจอใหญ่) */}
            <div className="hidden lg:flex justify-center ">
              <div className="bg-black/20 h-16 w-[2px]"></div>
            </div>

            <div className='sm:hidden flex justify-center'>
              <div className="bg-black/20 h-16 w-[2px]"></div>
            </div>

            {/* 2,000+ */}
            <div>
              <h3 className='text-black text-[28px] lg:text-[40px] font-bold'>2,000+</h3>
              <p className='text-black/60 text-[14px] lg:text-[16px]'>High-Quality Products</p>
            </div>

            {/* เส้นคั่น (แสดงเฉพาะจอใหญ่) */}
            <div className="hidden lg:flex justify-center ">
              <div className="bg-black/20 h-16 w-[2px]"></div>
            </div>

            <div className='col-span-3 lg:col-span-1'>
               <h3 className='text-black text-[28px] lg:text-[40px] font-bold'>30,000+</h3>
              <p className='text-black/60 text-[14px] lg:text-[16px]'>Happy Customers</p>
            </div>
          </div>


        </div>

        <div className='flex relative col-span-1 items-center'>
          <img src={backgroundImage} alt="" className=' object-cover w-full h-full' />
          <img src={star1} alt="" className='absolute top-[40%] left-[5%]  z-20 object-cover size-5 lg:size-10' />
          <img src={star2} alt="" className='absolute top-[10%] left-[80%]  z-20 object-cover size-10 lg:size-20' />
        </div>
      </div>
    </div>
  )
}

export default Blog
