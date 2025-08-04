'use client';
import React from "react";
import Image from "next/image";

const WeAre = () => {
  return (
    <section className="pt-10 pb-4 sm:pt-16 sm:pb-6 md:pt-20 md:pb-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center lg:mb-1 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1c0f0d] font-[heading-1] mb-0 opacity-95 leading-tight">
            We Are Noida Thunders
          </h1>
          <p className="lg:text-2xl font-[popins] italic">Our Origin Story</p>
        </div>  

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-1 items-center">

          {/* Image Content */}
          <div className="relative w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[460px] rounded-lg overflow-hidden">
            <Image
              src="/assets/mathura.png"
              alt="Noida Thunders Team"
              fill
              className="object-contain object-center lg:pl-28"
              loading="lazy"
            />
          </div>
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" /> */}

          {/* Text Content */}
          <div className="space-y-6 text-[#1c0f0d] text-base sm:text-lg font-[popins] leading-relaxed">
            <p>
              Welcome to the world of Noida Thunders — where every serve is electric and every match is a statement.
              Born from the spirit of one of India's fastest-growing cities, Noida Thunders represents more than just volleyball.
              We embody ambition, energy, and the pulse of a young, tech-driven generation ready to roar on and off the court.
              With a lineup of fearless athletes, strategic minds, and unstoppable grit, Noida Thunders is here to storm the Uttar
              Pradesh Pro Volleyball League with unmatched intensity and pride.
            </p>

            <p>
              Whether you're a die-hard sports fan or just love the thrill of the game — this is your team, your city, your thunder.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WeAre;

