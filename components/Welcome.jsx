


'use client';
import React from "react";
import Image from "next/image";

const Welcome = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#1c0f0d] font-[heading-1] mb-2 opacity-95 leading-tight">
            Welcome to Mathura Yodhas
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#1c0f0d] font-[popins] font-bold">
            "One City. One Legacy. One Yodha Spirit."
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-stretch">
          {/* Image Content - Adjust object-position with object-[position] class */}
          <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-full min-h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/assets/Banner.jpg"
              alt="Noida Thunders Team"
              fill
              className="object-cover object-center" // Change to object-top or object-bottom as needed
              loading="lazy"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" /> */}
          </div>

          {/* Text Content - Flex container for perfect alignment */}
          <div className="flex flex-col justify-center h-full py-4 sm:py-6 md:py-8 lg:py-0">
            <div className="space-y-4 sm:space-y-6 md:space-y-8 text-[#1c0f0d] text-base sm:text-lg md:text-xl font-[popins] leading-relaxed">
              <p>
                In Mathura, every sunrise echoes the rhythm of a conch, and every breath is a verse from the Gita. This isn't just the birthplace of Krishna — it's the cradle of strategy, strength, and soul.
              </p>

              <p>
                Here, volleyball is not just a sport — it's sadhana. The Mathura Yodhas are warriors forged in spiritual fire. They don't just play — they invoke, protect, and command.
              </p>

              <p>
                This is where discipline meets devotion, and where every match becomes a Mahayudh. This is Mathura Yodhas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;