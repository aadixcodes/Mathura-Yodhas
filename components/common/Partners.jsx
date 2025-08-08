// "use client";
// import Image from "next/image";

// const Partners = () => {
//   const sponsors = [
//     {
//       name: "Sponsor 1",
//       logo: "/assets/sponsorslogo/PartnerSection1.png",
//     },
    
//     {
//       name: "Sponsor 2",
//       logo: "/assets/sponsorslogo/PartnerSection10.png",
//     },
//     {
//       name: "Sponsor 3",
//       logo: "/assets/sponsorslogo/PartnerSection2.png",
//     },
//     {
//       name: "Sponsor 4",
//       logo: "/assets/sponsorslogo/PartnerSection3.png",
//     },
//     {
//       name: "Sponsor 5",
//       logo: "/assets/sponsorslogo/PartnerSection4.png",
//     },
//     {
//       name: "Sponsor 6",
//       logo: "/assets/sponsorslogo/PartnerSection5.png",
//     },
//     {
//       name: "Sponsor 7",
//       logo: "/assets/sponsorslogo/PartnerSection6.png",
//     },
//     {
//       name: "Sponsor 8",
//       logo: "/assets/sponsorslogo/PartnerSection7.png",
//     },
//     {
//       name: "Sponsor 9",
//       logo: "/assets/sponsorslogo/PartnerSection8.png",
//     },
//     {
//       name: "Sponsor 10",
//       logo: "/assets/sponsorslogo/PartnerSection9.png",
//     },
//   ];

//   return (
//     <section className="py-8 md:py-12 mt-10">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-1">
//           <h2 className="text-4xl sm:text-6xl font-[heading-1] opacity-95 text-[#1c0f0d]">
//             Our Partners
//           </h2>
//         </div>
//         <div className="text-center  mb-6 md:mb-8">
//           <p className="text-xl text-[#1c0f0d] font-[popins]"> <i> Official Broadcasting Partners </i></p>
//         </div>

//         {/* Partner logos - now with consistent spacing */}
//         <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
//           {sponsors.map((sponsor, index) => (
//             <div key={index} className="flex items-center justify-center p-2">
//               <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
//                 <Image
//                   src={sponsor.logo}
//                   alt={sponsor.name}
//                   fill
//                   className="object-contain rounded-xl"
//                   sizes="(max-width: 640px) 40vw, (max-width: 768px) 30vw, 20vw"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Added Official Broadcast Partners line */}
        
//       </div>
//     </section>
//   );
// };

// export default Partners;

"use client";
import Image from "next/image";

const Partners = () => {
  const sponsors = [
    {
      name: "Sponsor 1",
      logo: "/assets/sponsorslogo/PartnerSection1.png",
      category: "Broadcasting Partner"
    },
    {
      name: "Sponsor 2",
      logo: "/assets/sponsorslogo/PartnerSection10.png",
      category: "Broadcasting Partner"
    },
    {
      name: "Sponsor 3",
      logo: "/assets/sponsorslogo/PartnerSection2.png",
      category: "Travel Partner"
    },
    {
      name: "Sponsor 4",
      logo: "/assets/sponsorslogo/PartnerSection3.png",
      category: "Title Sponsor"
    },
    {
      name: "Sponsor 5",
      logo: "/assets/sponsorslogo/PartnerSection4.png",
      category: "Title Sponsor"
    },
    {
      name: "Sponsor 6",
      logo: "/assets/sponsorslogo/PartnerSection5.png",
      category: "Technology Partner"
    },
    {
      name: "Sponsor 7",
      logo: "/assets/sponsorslogo/PartnerSection6.png",
      category: "Technology Partner"
    },
    {
      name: "Sponsor 8",
      logo: "/assets/sponsorslogo/PartnerSection7.png",
      category: "University Partner"
    },
    {
      name: "Sponsor 9",
      logo: "/assets/sponsorslogo/PartnerSection8.png",
      category: "Nutrition Partner"
    },
    {
      name: "Sponsor 10",
      logo: "/assets/sponsorslogo/PartnerSection9.png",
      category: "Equipment Partner"
    },
  ];

  return (
    <section className="py-8 md:py-12 mt-10 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-[heading-1] text-[#1c0f0d]">
            Our Partners
          </h2>
          {/* <p className="text-lg md:text-xl text-[#1c0f0d] font-[popins] mt-2">
            <i>Official Broadcasting Partners</i>
          </p> */}
        </div>

        {/* Partner logos with categories */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8">
          {sponsors.map((sponsor, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center w-[45%] sm:w-[30%] md:w-[22%] lg:w-[18%] p-2"
            >
              <p className="text-sm sm:text-md font-medium text-[#1c0f0d] mb-2 text-center">
                {sponsor.category}
              </p>
              <div className="relative w-full aspect-square max-w-[180px]">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100px, (max-width: 768px) 120px, 150px"
                />
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;