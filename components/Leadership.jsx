import Image from "next/image";

export default function Leadership() {
  const coaches = [
    {
      name: "Head Coach",
      image: "/assets/Profile.webp",
    },
    {
      name: "Asst. Coach",
      image: "/assets/Rahul-Beniwal.jpg",
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4 font-[heading-1]">
          Our Leadership
        </h2>

        {/* Subtext */}
        <p className="text-sm sm:text-base md:text-lg text-black max-w-2xl mx-auto mb-10 font-[popins]">
          Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
          {coaches.map((coach, index) => (
            <div
              key={index}
              className="w-[250px] sm:w-[280px] md:w-[300px] text-center shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="bg-white p-2">
                <Image
                  src={coach.image}
                  alt={coach.name}
                  width={300}
                  height={300}
                  className="object-contain mx-auto w-full h-[240px] sm:h-[260px]"
                />
              </div>
              <div className="bg-[#66071c] py-3">
                <p className="text-white font-semibold text-base sm:text-lg">
                  {coach.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
