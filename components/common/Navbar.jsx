"use client";

import React, { useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Section */}
      <div className="w-full bg-[#4f0516] hidden md:flex flex-row lg:flex-row items px-6 lg:px-36 py-4 gap-4 lg:gap-0">
        {/* Add top content here if needed */}
      </div>

      <nav className="w-full font-[Para-1]">
        {/* Bottom Section */}
        <div className="text-black lg:px-36 px-6 bg-[#fcd700] md:bg-[#fcd700] z-50 relative">

          {/* Desktop Links - Hidden on Mobile */}
          <div className="hidden sm:flex justify-center items-center lg:gap-20 font-[popins] text-xl">
            <Link href={"/"} className="cursor-pointer hover:text-[#4f0516]">Home</Link>
            <Link href={"/about"} className="cursor-pointer hover:text-[#4f0516]">About</Link>
            <Link href={"/fixtures"} className="cursor-pointer hover:text-[#4f0516]">Fixtures</Link>

            {/* Logo */}
            <div className="h-20 w-20 relative shrink-0">
              <Image src={'/assets/mathura.png'} alt="Ayodhya Super Kings" fill className="object-contain" priority />
            </div>

            <Link href={"/team"} className="cursor-pointer hover:text-[#4f0516]">Team</Link>
            <Link href={"/blogs"} className="cursor-pointer hover:text-[#4f0516]">Blogs</Link>

            {/* More Dropdown */}
            <div className="relative group">
              <button className="cursor-pointer hover:text-[#4f0516]">More ▾</button>
              <div className="absolute top-full mt-2 bg-[#fcd700] text-black rounded shadow-md opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-200 z-50">
                <Link href="/gallery" className="block px-4 py-2 hover:bg-[#ffe066] whitespace-nowrap">Gallery</Link>
                <Link href="/contact" className="block px-4 py-2 hover:bg-[#ffe066] whitespace-nowrap">Contact Us</Link>
              </div>
            </div>
          </div>

          {/* Mobile Menu Toggle - Visible on Mobile */}
          <div
            className="sm:hidden text-2xl cursor-pointer flex justify-end py-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </div>

          {/* Mobile Menu Overlay */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-black/40 bg-opacity-50 z-40 lg:hidden cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          )}

          {/* Mobile Menu Sidebar */}
          <div
            className={`fixed top-0 right-0 h-full w-64 bg-[#141413]/50 backdrop-blur-2xl z-50 text-white font-[popins] transform transition-transform duration-300 ease-in-out lg:hidden ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="p-5 flex flex-col gap-6 mt-16">
              <Link href={"/"} className="cursor-pointer hover:text-[#fab505]" onClick={() => setIsOpen(false)}>Home</Link>
              <Link href={"/about"} className="cursor-pointer hover:text-[#fab505]" onClick={() => setIsOpen(false)}>About</Link>
              <Link href={"/fixtures"} className="cursor-pointer hover:text-[#fab505]" onClick={() => setIsOpen(false)}>Fixtures</Link>
              <Link href={"/team"} className="cursor-pointer hover:text-[#fab505]" onClick={() => setIsOpen(false)}>Team</Link>
              <Link href={"/gallery"} className="cursor-pointer hover:text-[#fab505]" onClick={() => setIsOpen(false)}>Gallery</Link>
              <Link href={"/blogs"} className="cursor-pointer hover:text-[#fab505]" onClick={() => setIsOpen(false)}>Blogs</Link>
              <Link href={"/contact"} className="cursor-pointer hover:text-[#fab505]" onClick={() => setIsOpen(false)}>Contact us</Link>
            </div>
            <button
              className="absolute top-4 right-4 text-2xl text-white"
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
