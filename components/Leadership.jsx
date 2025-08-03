// components/Leadership.jsx

export default function Leadership() {
  const coaches = [
    {
      name: "Head Coach",
      image: "/images/head-coach.jpg", // Replace with your actual image path
    },
    {
      name: "Asst. Coach",
      image: "/images/asst-coach.jpg", // Replace with your actual image path
    },
  ];

  return (
    <section className="py-16 bg-white px-4 sm:px-6 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership</h2>
        <p className="text-gray-700 max-w-xl mx-auto mb-12">
          Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-items-center">
          {coaches.map((coach, index) => (
            <div key={index} className="text-center shadow-lg rounded-lg overflow-hidden max-w-sm w-full">
              <img src={coach.image} alt={coach.name} className="w-full object-cover" />
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
