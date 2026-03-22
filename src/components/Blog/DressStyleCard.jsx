function DressStyleCard({ image, className, title }) { 
  return (
    // ใส่ className ที่รับมาจากด้านนอกตรงนี้
    <div className={`relative overflow-hidden rounded-2xl h-[190px] md:h-[280px] cursor-pointer hover:scale-90 transition-all duration-300  ${className}`}>
      {/* ใส่ Title ไว้ข้างบนรูปเหมือนในแบบ */}
      <h3 className="absolute top-4 left-6 text-xl md:text-3xl font-bold z-10">{title}</h3>
      
      <div className='w-full h-full '>
        <img 
          src={image} 
          className='w-full h-full object-cover' // ใช้ object-cover เพื่อให้รูปเต็มกรอบ
          alt={title} 
        />
      </div>
    </div>
  )
}

export default DressStyleCard