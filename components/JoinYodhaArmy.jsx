import { FaInstagram, FaFacebookF, FaYoutube, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const JoinYodhaArmy = () => {
  return (
    <section 
      className="relative my-6 mx-14 py-12 px-4 overflow-hidden"
      style={{
        backgroundImage: "url('/assets/joinArmy.png')", // Replace with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay with team color */}
      {/* <div className="absolute inset-0 bg-white/10 z-0"></div> */}
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Heading */}
        <h2 className="text-5xl md:text-3xl font-bold text-black mb-2 font-[heading-1]">
          Join the Yodha Army
        </h2>
        <p className="italic text-lg text-black mb-4">
          Be More Than a Fan. Be a Yodha.
        </p>

        {/* Description */}
        <p className="text-black max-w-2xl mx-auto mb-6 text-lg font-[popins]">
          Whether you're chanting from the stands, repping our merch, or cheering on Instagram —
          you're part of this journey. Join the growing community that fuels our fire.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-12 mt-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
             className="text-white hover:scale-110 transition text-2xl bg-[#66071c] p-3 backdrop-blur-sm">
            <FaInstagram />
          </a>
          <a href="mailto:mathurayodhas@gmail.com" 
             className="text-white hover:scale-110 transition text-2xl bg-[#66071c] p-3 backdrop-blur-sm">
            <FaXTwitter />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
             className="text-white hover:scale-110 transition text-2xl bg-[#66071c] p-3 backdrop-blur-sm">
            <FaFacebookF />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" 
             className="text-white hover:scale-110 transition text-2xl bg-[#66071c] p-3 backdrop-blur-sm">
            <FaYoutube />
          </a>
        </div>
      </div>
    </section>
  );
};

export default JoinYodhaArmy;