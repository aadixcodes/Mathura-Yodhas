// components/OurPurpose.jsx

export default function OurPurpose() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-20 bg-white">
      {/* Title */}
      <h2 className="text-center text-xl sm:text-2xl font-semibold text-[#520f1b] mb-10">
        <span className="border-2 border-[#520f1b] px-4 py-1 font-[popins] rounded-full">
          OUR PURPOSE
        </span>
      </h2>

      {/* Mission & Vision Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Mission Box */}
        <div className="bg-[#f8dd54] border-4 border-[#7a3d3d] p-6 sm:p-10 flex flex-col justify-center items-center text-center shadow-md">
          <h3 className="text-3xl font-extrabold font-[popins] text-gray-900 mb-4">Mission</h3>
          <p className="text-lg text-gray-800 italic">
            To elevate volleyball in Mathura and beyond by building a team that inspires through
            skill, character, and connection to our roots.
          </p>
        </div>

        {/* Vision Box with Background Image and Overlay */}
        <div className="relative h-[300px] border-4 border-[#7a3d3d] md:h-auto rounded shadow-md overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/bg-image.png')" }}
          />
          <div className="relative z-10 p-6 sm:p-10 flex flex-col justify-center items-center text-center h-full">
            <h3 className="text-3xl font-extrabold font-[popins] text-gray-900 mb-4">Vision</h3>
            <p className="text-lg text-gray-800 italic">
              To become one of the most respected and culturally rooted sports franchises in India,
              blending performance with purpose.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
