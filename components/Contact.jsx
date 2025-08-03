export default function Contact() {
    return (
      <section
        className="w-full relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/backgroun.png')" }} // 🔁 Replace with actual image path
      >
        {/* White light overlay */}
        <div className="absolute inset-0 bg-white/10 bg-opacity-40 z-0" />
  
        {/* Main Content */}
        <div className="relative z-10 py-10 px-4 md:px-16">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Left Side: Form */}
            <div className="bg-white bg-opacity-80 p-6 shadow-lg rounded-xl">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 font-[popins]">Drop a Message</h2>
              <form className="space-y-4">
                <div className="flex flex-col md:flex-row md:space-x-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full md:w-1/2 mb-4 md:mb-0 p-3 bg-white bg-opacity-70 rounded-md border"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full md:w-1/2 p-3 bg-white bg-opacity-70 rounded-md border"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Your mail"
                  className="w-full p-3 bg-white bg-opacity-70 rounded-md border"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full p-3 bg-white bg-opacity-70 rounded-md border"
                />
                <textarea
                  placeholder="Your Message.."
                  className="w-full p-3 h-32 bg-white bg-opacity-70 rounded-md border"
                />
                <button
                  type="submit"
                  className="bg-[#660822] text-white px-6 py-2 rounded-md hover:bg-[#8a1432] transition"
                >
                  Submit
                </button>
              </form>
            </div>
  
            {/* Right Side: Contact Info */}
            <div className="bg-[#660822] text-white p-6 rounded-xl shadow-lg font-[popins]">
              <h2 className="text-3xl font-bold mb-6 font-[popins]">Contact Us</h2>
              <div className="mb-4">
                <h4 className="font-semibold text-lg">Office Address</h4>
                <p className="text-sm">
                  Jl Raya Puputan, No.90<br />
                  Renon, Denpasar, Bali, Indonesia
                </p>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold text-lg">Training Field</h4>
                <p className="text-sm">
                  Lapangan Puputan<br />
                  Niti Mandala Renon, Denpasar, Bali
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg">Contact</h4>
                <p className="text-sm">Phone: (+62) 1919-2020</p>
                <p className="text-sm">Email: contact@socca.com</p>
              </div>
            </div>
          </div>
  
          {/* Map Placeholder */}

          <div className="w-full flex justify-center">
            <div className="mt-12 w-full max-w-5xl">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112178.51076159457!2d77.31942423472935!3d28.522327774263665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1753900962452!5m2!1sen!2sin"
                className="w-full h-[400px] rounded-lg shadow-md"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                </div>
            </div>
        </div>
      </section>
    );
  }
  