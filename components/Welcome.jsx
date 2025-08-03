'use client';
import React from "react";
import Image from "next/image";

const Welcome = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-[#1c0f0d] font-[heading-1] mb-4 opacity-95 leading-tight">
            The soul of Mathura. The Spirit of Yodhas.
          </h1>
          <p className="mt-2 text-base sm:text-lg md:text-xl text-[#1c0f0d] font-[popins] font-bold">
            "We don't retreat. We rise. We strike. We rewrite destiny."
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center">
          {/* Image Content */}
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[430px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/assets/Banner.jpg"
              alt="Noida Thunders Team"
              fill
              className="object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>

          {/* Text Content */}
          <div className="space-y-9 text-[#1c0f0d] text-base sm:text-base font-[popins] leading-relaxed">
            <p>
              The Mathura Yodhas are not just a volleyball team - we are a movement. A union of athletic ambition and ancient pride. Representing one of the 
              most culturally rich cities of India , our team channels the discipline of warriors , the unity of brotherhood , and the fire of youth.
              Every serve , every point , and every celebration is a tribute to land we come from.
            </p>

            <p>
              In mathura , every sunrise echoes the rhythm of a conch , and every breath is a verse from a Gita. This isn't just the birthplace of krishna -
              it's craddle of strategy , strength and soul.
            </p>

            <p>
              This is where discipline meets devotion , and where every match becomes a Mahayudh. <br />
              This is Mathura Yodhas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
