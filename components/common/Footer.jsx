import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {

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
    <footer className="footer bg-[#4f0516] text-white font-[popins] text-sm pt-10">
  <div className="max-w-5xl mx-auto px-4 pb-10">
    
    {/* Desktop Layout: Grid for md and up */}
    <div className="hidden md:grid md:grid-cols-3 gap-8">
      {/* Logo & Description */}
      <div>
        <img src="/assets/mathura.png" alt="Noida Thunders Logo" className="w-32 mb-3" />
        <p className="text-white w-[80%] font-[popins]">
          Mathura Yodhas where tradition fuels ambition, and every match is a battle of spirit and pride.
        </p>
        <div className="flex gap-4 mt-4">
          {Icons.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 p-2 rounded-2xl hover:bg-yellow-600 transition"
            >
              <h2 className="text-black hover:text-white">{item.icon}</h2>
            </a>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-xl font-semibold mb-4 text-white font-[popins]">Quick Links</h3>
        <ul className="text-white space-y-2 font-[popins]">
          <li><a href="/about" className="hover:text-yellow-500">About Us</a></li>
          <li><a href="/fixtures" className="hover:text-yellow-500">Fixtures</a></li>
          <li><a href="/team" className="hover:text-yellow-500">Our Team</a></li>
          <li><a href="/gallery" className="hover:text-yellow-500">Gallery</a></li>
          <li><a href="/blogs" className="hover:text-yellow-500">Blogs</a></li>
          <li><a href="/contact" className="hover:text-yellow-500">Contact Us</a></li>
        </ul>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col pl-0 md:pl-20 justify-center">
        <h3 className="text-xl font-semibold mb-4 text-white font-[popins]">Contact Us</h3>
        <ul className="text-white space-y-2">
          <li className="text-start">
            <div className="flex gap-3 items-center justify-start">
              <IoLocationOutline className="text-xl" />
              <strong className="text-lg font-extralight">Address :</strong>
            </div>
            Mathura UP , India <br />
          </li>
          <li className="text-start">
            <div className="flex gap-3 items-center justify-start">
              <IoCallOutline className="text-lg font-extralight" />
              <strong className="text-lg font-extralight">Phone:</strong>
            </div>
            +91 8620000002
          </li>
          <li className="text-start">
            <div className="flex gap-3 items-center justify-start">
              <MdOutlineEmail className="text-xl font-extralight" />
              <strong className="text-lg font-extralight">Email:</strong>
            </div>
            <a href="mailto:info@mathurayodhas.com" className="hover:text-yellow-500">info@mathurayodhas.com</a>
          </li>
        </ul>
      </div>
    </div>

    {/* Mobile Layout: Visible only below md */}
    <div className="flex flex-col items-center text-center md:hidden gap-6">
      {/* Logo Section */}
      <div>
        <img src="/assets/mathura.png" alt="Noida Thunders Logo" className="w-32 mb-3 mx-auto" />
        <p className="text-white max-w-xs mx-auto font-[popins]">
          Mathura Yodhas where tradition fuels ambition, and every match is a battle of spirit and pride.
        </p>
        <div className="flex gap-4 mt-4 justify-center">
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

      {/* Quick Links & Contact Side-by-Side on mobile */}
      <div className="flex justify-between w-full px-2">
        {/* Quick Links */}
        <div className="text-left">
          <h3 className="text-lg font-semibold mb-2 text-white font-[popins]">Quick Links</h3>
          <ul className="text-white space-y-1 text-sm font-[popins]">
            <li><a href="/about" className="hover:text-yellow-500">About Us</a></li>
            <li><a href="/fixtures" className="hover:text-yellow-500">Fixtures</a></li>
            <li><a href="/team" className="hover:text-yellow-500">Our Team</a></li>
            <li><a href="/gallery" className="hover:text-yellow-500">Gallery</a></li>
            <li><a href="/blogs" className="hover:text-yellow-500">Blogs</a></li>
            <li><a href="/contact" className="hover:text-yellow-500">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-left">
          <h3 className="text-lg font-semibold mb-2 text-white font-[popins]">Contact Us</h3>
          <ul className="text-white space-y-1 text-sm">
            <li>
              <strong>Address:</strong><br />
              VSS01 Mamarama<br />
              Road Main City, Western
            </li>
            <li>
              <strong>Phone:</strong><br />
              +91-9123456789
            </li>
            <li>
              <strong>Email:</strong><br />
              <a href="mailto:noidathunders@gmail.com" className="hover:text-yellow-500">noidathunders@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

    {/* Bottom Bar */}
      <div className="font-[popins] bg-[#e0b404] text-black py-4 text-sm mt-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-center justify-between md:px-8 px-4">
          <p className="text-left w-full md:w-auto mb-2 md:mb-0">
            © Copyright 2025 Mathura Yodhas. All Rights Reserved.
          </p>
          <p className="text-right w-full md:w-auto">
            Design & Developed by Varnix Media Pvt. Ltd.
          </p>
        </div>
      </div>


    </footer>
  );
}

