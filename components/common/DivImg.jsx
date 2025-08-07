
import React from 'react'

const DivImg = ({ text }) => {
  return (
    <div 
      className="aboutContent relative mt-0 h-40 sm:h-56 md:h-[40vh] w-full whatUs flex items-center justify-center"
      style={{
        backgroundImage: "url('/assets/SectionBanner.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay to ensure text readability */}
      {/* <div className="absolute inset-0 bg-white/20"></div> */}
      
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-[heading-1] relative z-10">
        {text || 'About Us'}
      </h2>
    </div>
  )
}

export default DivImg