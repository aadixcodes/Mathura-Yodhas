"use client";

import React, { useState, useEffect, useRef } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const moreDropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (moreDropdownRef.current && !moreDropdownRef.current.contains(event.target)) {
        setIsMoreOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Top Section */}
      <div className="w-full bg-[#4f0516] hidden md:flex flex-row lg:flex-row items px-6 lg:px-36 py-4 gap-4 lg:gap-0">
        {/* Add top content here if needed */}
      </div>

      <nav className="w-full font-[Para-1] sticky top-0 z-50">
        {/* Bottom Section */}
        <div className="text-black lg:px-36 px-6 bg-[#fcd700] md:bg-[#fcd700] h-20 flex items-center relative">
          {/* Desktop Layout */}
          <div className="hidden sm:flex items-center justify-between w-full">
            {/* Left Links */}
            <div className="flex gap-6 lg:gap-12 font-[popins] text-lg lg:text-xl">
              <Link
                href="/"
                className="cursor-pointer hover:text-[#4f0516] transition-colors whitespace-nowrap"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="cursor-pointer hover:text-[#4f0516] transition-colors whitespace-nowrap"
              >
                About
              </Link>
              <Link
                href="/fixtures"
                className="cursor-pointer hover:text-[#4f0516] transition-colors whitespace-nowrap"
              >
                Fixtures
              </Link>
            </div>

            {/* Center Logo */}
            <div className="flex justify-center items-center h-[8rem] w-[8rem] mt-[2rem] z-10 relative">
              <Image
                src={"/assets/mathura.png"}
                alt="Ayodhya Super Kings"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Right Links */}
            <div className="flex gap-6 lg:gap-12 font-[popins] text-lg lg:text-xl">
              <Link
                href="/team"
                className="cursor-pointer hover:text-[#4f0516] transition-colors whitespace-nowrap"
              >
                Team
              </Link>
              <Link
                href="/blogs"
                className="cursor-pointer hover:text-[#4f0516] transition-colors whitespace-nowrap"
              >
                Blogs
              </Link>

              {/* More Dropdown */}
              <div className="relative" ref={moreDropdownRef}>
                <button 
                  className="cursor-pointer hover:text-[#4f0516] transition-colors flex items-center gap-1 whitespace-nowrap"
                  onClick={() => setIsMoreOpen(!isMoreOpen)}
                >
                  More <span className="text-sm">▾</span>
                </button>
                {isMoreOpen && (
                  <div className="absolute right-0 top-full mt-2 bg-[#fcd700] text-black rounded shadow-md z-50 border border-[#4f0516]/20 min-w-[170px]">
                    <Link
                      href="/gallery"
                      className="block px-4 py-2 hover:bg-[#ffe066] transition-colors"
                      onClick={() => setIsMoreOpen(false)}
                    >
                      Gallery
                    </Link>
                    <Link
                      href="/contact"
                      className="block px-4 py-2 hover:bg-[#ffe066] transition-colors"
                      onClick={() => setIsMoreOpen(false)}
                    >
                      Contact Us
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="sm:hidden w-full flex justify-between items-center h-full px-2">
            {/* Mobile Logo - Stays inside navbar */}
            <div className="h-16 w-16 relative">
              <Image
                src={"/assets/mathura.png"}
                alt="Ayodhya Super Kings"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Mobile Menu Toggle */}
            <div
              className="text-2xl cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <HiOutlineX className="text-3xl" />
              ) : (
                <HiOutlineMenuAlt3 className="text-3xl" />
              )}
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-[#fcd700]/80 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
          )}

          {/* Mobile Menu Sidebar */}
          <div
            className={`fixed top-0 right-0 h-full w-64 bg-[#fcd700] z-50 text-black font-[popins] transform transition-transform duration-300 ease-in-out lg:hidden ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } shadow-2xl`}
          >
            {/* Mobile Menu Header with Logo */}
            <div className="flex justify-center pt-6 pb-4">
              <div className="h-20 w-20 relative">
                <Image
                  src={"/assets/mathura.png"}
                  alt="Ayodhya Super Kings"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Mobile Menu Links */}
            <div className="p-5 flex flex-col gap-6 mt-4 items-center text-xl">
              <Link
                href={"/"}
                className="cursor-pointer hover:text-[#4f0516] w-full text-center py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href={"/about"}
                className="cursor-pointer hover:text-[#4f0516] w-full text-center py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href={"/fixtures"}
                className="cursor-pointer hover:text-[#4f0516] w-full text-center py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Fixtures
              </Link>
              <Link
                href={"/team"}
                className="cursor-pointer hover:text-[#4f0516] w-full text-center py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Team
              </Link>
              <Link
                href={"/gallery"}
                className="cursor-pointer hover:text-[#4f0516] w-full text-center py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href={"/blogs"}
                className="cursor-pointer hover:text-[#4f0516] w-full text-center py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Blogs
              </Link>
              <Link
                href={"/contact"}
                className="cursor-pointer hover:text-[#4f0516] w-full text-center py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact us
              </Link>
            </div>
            <button
              className="absolute top-6 right-6 text-3xl text-black cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <HiOutlineX />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
