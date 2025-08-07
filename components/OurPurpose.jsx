// // components/OurPurpose.jsx

// export default function OurPurpose() {
//   return (
//     <section className="py-16 px-4 sm:px-6 lg:px-20 bg-white">
//       {/* Title */}
//       <h2 className="text-center text-xl sm:text-2xl font-semibold text-[#520f1b] mb-10">
//         <span className="border-2 border-[#520f1b] px-4 py-1 font-[popins] rounded-full">
//           OUR PURPOSE
//         </span>
//       </h2>

//       {/* Mission & Vision Boxes */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Mission Box */}
//         <div className="bg-[#f8dd54] border-4 border-[#7a3d3d] p-6 sm:p-10 flex flex-col justify-center items-center text-center shadow-md">
//           <h3 className="text-3xl font-extrabold font-[popins] text-gray-900 mb-4">Mission</h3>
//           <p className="text-lg text-gray-800 italic">
//             To elevate volleyball in Mathura and beyond by building a team that inspires through
//             skill, character, and connection to our roots.
//           </p>
//         </div>

//         {/* Vision Box with Background Image and Overlay */}
//         <div className="relative h-[300px] border-4 border-[#7a3d3d] md:h-auto rounded shadow-md overflow-hidden">
//           <div
//             className="absolute inset-0 bg-cover bg-center"
//             style={{ backgroundImage: "url('/assets/bg-image.png')" }}
//           />
//           <div className="relative z-10 p-6 sm:p-10 flex flex-col justify-center items-center text-center h-full">
//             <h3 className="text-3xl font-extrabold font-[popins] text-gray-900 mb-4">Vision</h3>
//             <p className="text-lg text-gray-800 italic">
//               To become one of the most respected and culturally rooted sports franchises in India,
//               blending performance with purpose.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// components/OurPurpose.jsx
export default function OurPurpose() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#fff9e6]">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl sm:text-4xl text-[#5a071a] relative">
            <span className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl relative z-10 px-6 py-2 font-[heading-1] text-[#1c0f0d]">
              OUR PURPOSE
            </span>
            <span className="absolute bottom-0 left-0 w-full h-2 bg-[#fbc02d] opacity-40 transform -translate-y-1"></span>
          </h2>
        </div>

        {/* Mission & Vision Boxes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission Box */}
          <div className="relative bg-white p-8 sm:p-10 rounded-xl shadow-lg border-t-8 border-[#5a071a] transform transition-all hover:scale-[1.02] hover:shadow-xl">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#fbc02d] rounded-full flex items-center justify-center shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#5a071a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl sm:text-4xl text-center text-[#5a071a] mb-6 font-[heading-1]">
              Mission
            </h3>
            <p className="text-lg sm:text-xl text-gray-700 text-center leading-relaxed italic font-[popins]">
              "To elevate volleyball in Mathura and beyond by building a team that inspires through
              skill, character, and connection to our roots."
            </p>
          </div>

          {/* Vision Box */}
          <div className="relative bg-white p-8 sm:p-10 rounded-xl shadow-lg border-t-8 border-[#fbc02d] transform transition-all hover:scale-[1.02] hover:shadow-xl">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#5a071a] rounded-full flex items-center justify-center shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#fbc02d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-2xl sm:text-4xl text-center text-[#5a071a] mb-6 font-[heading-1]">
              Vision
            </h3>
            <p className="text-lg sm:text-xl text-gray-700 text-center leading-relaxed italic font-[popins]">
              "To become one of the most respected and culturally rooted sports franchises in India,
              blending performance with purpose."
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="hidden lg:block">
          <div className="absolute right-20 -mt-8 w-16 h-16 bg-[#fbc02d] rounded-full opacity-20"></div>
          <div className="absolute left-32 -mt-24 w-24 h-24 border-4 border-[#5a071a] rounded-full opacity-10"></div>
        </div>
      </div>
    </section>
  );
}