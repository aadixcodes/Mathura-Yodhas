// components/WordsOwner.jsx

import Image from "next/image";

export default function WordsOwner() {
  return (
    <section className="bg-[#5a071a] py-16 px-4 sm:px-8 lg:px-20 text-white">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left - Image */}
        <div className="flex justify-center">
          <Image
            src="/assets/owners.jpg"
            width={300}
            height={500}
            alt="Owners Puneet and Navdeep"
            className="max-w-sm w-full border-2 border-yellow-500 rounded"
          />
        </div>

        {/* Right - Text */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-[popins] text-yellow-400 mb-6">
            Words from Our Owners
          </h2>

          <p className="text-sm text-white italic font-[popins] leading-relaxed mb-6">
            Mathura Yodhas is more than a team — it’s a tribute. A tribute to our roots, our warriors,
            and our youth who dream of rising. When we built this team, we envisioned creating something
            sacred yet fierce, modern yet traditional. Our players represent the strength of our soil and
            the vision of a rising Mathura. With every match, we carry not just our ambition, but the honor
            of our people.
          </p>

          <p className="text-sm text-white italic mb-6 font-[popins]">
            Let the league hear us. Let the country feel us.
            <br />
            When Yodhas enter the court — they enter to conquer.”
          </p>

          <p className="text-xl italic font-medium text-white font-[popins]">
            Puneet Khanna & Navdeep Tiwari
            <br />
            <span className="text-base">Mathura Yodhas</span>
          </p>
        </div>
      </div>
    </section>
  );
}

