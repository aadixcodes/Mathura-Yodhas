import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const JoinYodhaArmy = () => {
  return (
    <section
      className="relative my-6 mx-4 mb-20 sm:mx-8 md:mx-14 py-12 px-4 overflow-hidden"
      style={{
        backgroundImage: "url('/assets/joinArmy.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Content Wrapper */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-black mb-3 font-[heading-1]">
          Join the Yodha Army
        </h2>

        {/* Subheading */}
        <p className="italic text-base sm:text-lg text-black mb-4">
          Be More Than a Fan. Be a Yodha.
        </p>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-black max-w-2xl mx-auto mb-6 font-[popins]">
          Whether you're chanting from the stands, repping our merch, or cheering on Instagram —
          you're part of this journey. Join the growing community that fuels our fire.
        </p>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 mt-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:scale-110 transition-transform duration-300 text-xl sm:text-2xl bg-[#66071c] p-3 rounded-full"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:mathurayodhas@gmail.com"
            className="text-white hover:scale-110 transition-transform duration-300 text-xl sm:text-2xl bg-[#66071c] p-3 rounded-full"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:scale-110 transition-transform duration-300 text-xl sm:text-2xl bg-[#66071c] p-3 rounded-full"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:scale-110 transition-transform duration-300 text-xl sm:text-2xl bg-[#66071c] p-3 rounded-full"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </section>
  );
};

export default JoinYodhaArmy;
