import Image from "next/image";

const Spotlight = () => {
  return (
    <section className="bg-white py-12 px-4 mt-2 md:mt-8">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-[heading-1] text-center text-black mb-10">
          Spotlight Star of the Week
        </h2>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Text */}
          <div className="w-full md:w-2/3 text-black">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-[popins] font-semibold mb-4">
              Yodha in Focus: Vinit Kumar
            </h3>

            <p className="text-base sm:text-lg font-[popins] mb-4">
              Explosive at the net and fearless in every dive — Vinit Kumar brings unmatched energy and power to the Yodhas’ frontline. 
              Known for turning momentum with a single spike, he’s not just a player, he’s a force of nature.
            </p>

            <p className="text-base sm:text-lg font-[popins]">
            Vinit Choudhary is a talented and versatile volleyball player, 
            known for playing in every position on the court. He plays for Mathura 
            Yodhas in the UPPVL and has also been part of top leagues like Prime Volleyball 
            and Thunderbolts Kolkata. Vinit's journey, from facing injuries to winning national titles, 
            shows his hard work and strong spirit. Proud of his roots, he continues to inspire 
            young players with his dedication and love for the game.
            </p>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/3 flex justify-center rounded-lg">
            <Image
              src="/assets/Yodhas/ICON/Mathura_Yoddha.jpg" // Replace with actual path
              alt="Vinit Kumar"
              width={300}
              height={330}
              className="rounded shadow-md object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spotlight;
