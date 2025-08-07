// 'use client';
// import React from "react";
// import Image from "next/image";

// const WeAre = () => {
//   return (
//     <section className="pt-10 pb-4 sm:pt-16 sm:pb-6 md:pt-20 md:pb-2">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center lg:mb-1 sm:mb-16">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1c0f0d] font-[heading-1] mb-0 opacity-95 leading-tight">
//             We Are Noida Thunders
//           </h1>
//           <p className="lg:text-2xl font-[popins] italic">Our Origin Story</p>
//         </div>

//         {/* Content Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-1 items-center">

//           {/* Image Content */}
//           <div className="relative w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[460px] rounded-lg overflow-hidden">
//             <Image
//               src="/assets/mathura.png"
//               alt="Noida Thunders Team"
//               fill
//               className="object-contain object-center lg:pl-28"
//               loading="lazy"
//             />
//           </div>
//           {/* <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" /> */}

//           {/* Text Content */}
//           <div className="space-y-6 text-[#1c0f0d] text-base sm:text-lg font-[popins] leading-relaxed">
//             <p>
//               Welcome to the world of Noida Thunders — where every serve is electric and every match is a statement.
//               Born from the spirit of one of India's fastest-growing cities, Noida Thunders represents more than just volleyball.
//               We embody ambition, energy, and the pulse of a young, tech-driven generation ready to roar on and off the court.
//               With a lineup of fearless athletes, strategic minds, and unstoppable grit, Noida Thunders is here to storm the Uttar
//               Pradesh Pro Volleyball League with unmatched intensity and pride.
//             </p>

//             <p>
//               Whether you're a die-hard sports fan or just love the thrill of the game — this is your team, your city, your thunder.
//             </p>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default WeAre;

"use client";
import React from "react";
import Image from "next/image";

const WeAre = () => {
  return (
    <section className="pt-10 sm:pt-16 md:pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-[#1c0f0d] font-[heading-1] mb-2 opacity-95 leading-tight">
            We Are Mathura Yodhas
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-[#1c0f0d] font-[popins] italic font-medium">
            Our Origin Story
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center -mt-12">
          {/* Image Content - Now using object-contain to prevent cropping */}
          <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px]">
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src="/assets/mathura.png"
                alt="Mathura Yodhas Team"
                width={600}
                height={600}
                className="object-contain w-auto h-auto max-w-full max-h-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-center h-full">
            <div className="space-y-4 sm:space-y-6 md:space-y-8 text-[#1c0f0d] text-base sm:text-lg md:text-xl font-[popins] leading-relaxed">
              <p>
                Mathura the land where Shri Krishna played, ruled, and taught
                the Gita is more than just a historical city. It is a land that
                breathes strength, spirituality, and sacrifice. From dangal
                akhadas to vedic wisdom, Mathura has always produced warriors of
                both body and mind. Mathura Yodhas carries that legacy into the
                present — onto the volleyball court.
              </p>

              <p>
                We are the sangam of tradition and transformation. Where ancient
                values fuel modern gameplay. Where discipline is spiritual, and
                dominance is sacred.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeAre;
