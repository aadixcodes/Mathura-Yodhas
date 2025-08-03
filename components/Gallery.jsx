import Image from "next/image";
import Link from "next/link";

const images = [
  "/assets/Banner.jpg",
  "/assets/Banner.jpg",
  "/assets/Banner.jpg",
  "/assets/Banner.jpg",
  "/assets/Banner.jpg",
  "/assets/Banner.jpg",
];

const Gallery = () => {
  return (
    <section className="bg-[#680000] py-12 px-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-6xl font-[heading-1] md:text-3xl text-yellow-400 font-bold mb-2">
          Our Gallery
        </h2>
        <p className="text-white italic font-[popins] text-lg mb-8">
          The Battle in Motion
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-md">
              <Image
                src={src}
                alt={`Gallery ${index + 1}`}
                width={400}
                height={300}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        <div className="w-full flex items-center justify-center mt-10">
          <Link href={'/gallery'}>
            <button className="py-3 px-7 bg-yellow-500 rounded-full">View More</button>
          </Link>
        </div>


      </div>
    </section>
  );
};

export default Gallery;
