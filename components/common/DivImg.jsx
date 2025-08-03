import React from 'react'

const DivImg = ({ text }) => {
  return (
    <div 
      className="aboutContent relative -mt-0 md:-mt-24 -z-10 h-40 sm:h-56 md:h-[50vh] w-full whatUs flex items-center justify-center"
      style={{
        backgroundImage: "url('/assets/DivBannerNew.png')", // Replace with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
        // backgroundAttachment: "fixed" // Optional: creates parallax effect
      }}
    >
      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-white/20"></div>
      
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-[heading-1] mt-12 relative z-10">
        {text || 'About Us'}
      </h2>
    </div>
  )
}

export default DivImg