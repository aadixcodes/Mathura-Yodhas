import Image from "next/image";

const Spotlight = () => {
  return (
    <section className="bg-white py-12 px-4 mt-8">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  font-[heading-1] text-center text-black mb-10">
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
              diam euismod imperdiet. Ut lobortis et dolor magna aliquam. Ut
              egestas felis nec massa tincidunt donec porttitor vulputate nec
              magna eros. Massa tincidunt dui ut ornare lectus. Lorem viverra
              arcu sagittis ut volutpat odio. Aenean sed adipiscing diam donec
              adipiscing.
            </p>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/3 flex justify-center">
            <Image
              src="/assets/iconplayer.jpg" // Replace with actual path
              alt="Vinit Kumar"
              width={250}
              height={300}
              className="rounded shadow-md object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spotlight;
