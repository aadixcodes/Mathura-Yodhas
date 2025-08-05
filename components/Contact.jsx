import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Contact() {

  const Icons = [
    {
      id: 1,
      icon: <FaFacebookF />,
      url: 'https://www.facebook.com/profile.php?id=61578258997892'
    },

    {
      id: 2,
      icon: <FaInstagram />,
      url: 'https://www.instagram.com/mathurayodhas/'
    },

    {
      id: 3,
      icon: <FaTwitter />,
      url: 'https://x.com/MathuraYodhas?t=JqL2vap9U8ccwBVACPaUzA&s=08',
    },

    {
      id: 4,
      icon: <FaYoutube />,
      url: 'https://www.youtube.com/channel/UC6caSs7bKrCkAueXAjxpmBA',
    }
  ]



    return (
      <section
        className="w-full relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/background.png')" }} // 🔁 Replace with actual image path
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

                <p className="font-bold mb-3">Get in touch with Mathura Yodhas - <br />where champitons are made.</p>

                <p className="text-sm">
                  Reach out to Mathura Yodhas for collaborations queries , or support. We're
                  here to assist you and celebrate the spirit of sports together.
                </p>
              </div>



              <div className="mb-4">
                <h4 className="font-semibold text-lg">Stadium Name</h4>
                <p className="text-sm">
                  Shaheed Vijay Singh Pathik Sports Complex<br />
                  Mathura.
                </p>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-lg">Phone No</h4>
                <p className="text-sm">
                +91 8620000002
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg">Email</h4>
                <p className="text-sm">info@mathurayodhas.com</p>
              </div>

              <div className="flex gap-4 mt-4 justify-start">
              {Icons.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-500 p-2 rounded-2xl hover:bg-amber-600 transition"
                >
                  <h2 className="text-black hover:text-white">{item.icon}</h2>
                </a>
               ))}
              </div>

            </div>

          </div>
  
          {/* Map Placeholder */}

          <div className="w-full flex justify-center">
            <div className="mt-12 w-full max-w-5xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56637.33497684581!2d77.64295492408567!3d27.474444439030357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397371163d4d5205%3A0x4273a09defe10ea5!2sMathura%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1754363455843!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mathura Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
