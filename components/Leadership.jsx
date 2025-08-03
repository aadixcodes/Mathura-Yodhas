// components/Leadership.jsx

import Image from "next/image";

export default function Leadership() {
  const coaches = [
    {
      name: "Head Coach",
      image: "/assets/Profile.webp", // Replace with your actual image path
    },
    {
      name: "Asst. Coach",
      image: "/assets/Profile.webp", // Replace with your actual image path
    },
  ];

  return (
    <section className="py-16 bg-white px-4 sm:px-6 lg:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 font-[popins]">Our Leadership</h2>
        <p className="text-gray-700 max-w-xl mx-auto mb-12 font-[popins]">
          Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 justify-items-center">
          {coaches.map((coach, index) => (
            <div key={index} className="text-center shadow-lg rounded-lg overflow-hidden max-w-sm w-full">
            <Image
              src="/assets/iconplayer.jpg"
              alt="Vinit Kumar"
              width={300}
              height={300}
              className="rounded shadow-md object-contain mx-auto"/>
              <div className="bg-[#66071c] py-4">
                <p className="text-white font-semibold text-lg">{coach.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
