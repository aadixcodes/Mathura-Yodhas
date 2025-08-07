


import Image from "next/image";
import Link from "next/link";

const images = [
  "/assets/gallery/1.jpg",
  "/assets/gallery/2.jpg",
  "/assets/gallery/3.jpg",
];

const Gallery = () => {
  return (
    <section className="bg-[#680000] py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-[heading-1] text-yellow-400 mb-2">
          Our Gallery
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-white italic font-[popins] mb-8">
          The Battle in Motion
        </p>

        {/* Gallery Grid - Maintained square aspect ratio */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {images.map((src, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-md aspect-square" // Added aspect-square
            >
              <div className="w-full h-full relative"> {/* Added container div */}
                <Image
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  fill
                  className="object-cover border-2 border-yellow-500 rounded-lg hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>

        {/* View More Button with cursor pointer */}
        <div className="w-full flex items-center justify-center mt-10">
          <Link href="/gallery" passHref>
            <button className="py-2 px-6 sm:py-3 sm:px-7 bg-yellow-500 rounded-full text-sm sm:text-base font-semibold hover:bg-yellow-400 transition cursor-pointer">
              View More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;