import Image from "next/image";

const Spotlight = () => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="lg:text-4xl md:text-3xl font-extrabold font-[heading-1] text-center text-black mb-14">
          Spotlight - Star of the Week
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Text Content */}
          <div className="md:w-2/3 text-black">
            <h3 className="lg:text-2xl font-[popins] font-light mb-2">Yodha in Focus: Vinit Kumar</h3>
            <p className="mb-4 text-lg font-[popins]">
              Explosive at the net and fearless in every dive — Vinit Kumar brings unmatched energy and power to the Yodhas’ frontline. 
              Known for turning momentum with a single spike, he’s not just a player, he’s a force of nature. </p>

            <p className="text-lg font-[popins]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
              diam euismod imperdiet. Ut lobortis et dolor magna aliquam. Ut
              egestas felis nec massa tincidunt donec porttitor vulputate nec
              magna eros. Massa tincidunt dui ut ornare lectus. Lorem viverra
              arcu sagittis ut volutpat odio. Aenean sed adipiscing diam donec
              adipiscing.
            </p>
          </div>

          {/* Image */}
          <div className="md:w-1/3">
            <Image
              src="/assets/iconplayer.jpg" // Replace with the actual image path
              alt="Vinit Kumar"
              width={250}
              height={300}
              className="rounded shadow-md object-cover mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spotlight;

