import React from 'react'

function Brands({ image }) {
  return (
      <div className='w-full flex items-center justify-center'>
       
            <img 
                src={image} 
                alt="" 
                className='h-6 md:h-8 lg:h-10  object-contain' 
                
            />
        
      </div>
  )
}

export default Brands
