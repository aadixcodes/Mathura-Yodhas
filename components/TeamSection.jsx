"use client"
// components/TeamSection.jsx

import { useState } from "react";

export default function TeamSection() {
  const [activeTab, setActiveTab] = useState("yoddahs");

  const players = [
    {
      name: "Player Name",
      number: "19",
      image: "/images/players/player1.jpg",
    },
    // Add more players here...
  ];

  const management = [
    {
      name: "Manager Name",
      number: "01",
      image: "/images/players/manager1.jpg",
    },
    // Add more managers here...
  ];

  const displayedMembers = activeTab === "yoddahs" ? players : management;

  return (
    <section className="py-16 px-4 sm:px-8 bg-[#f9f9f9] relative z-10">
      {/* Toggle Tabs */}
      <div className="flex justify-center gap-4 mb-10">
        <button
          onClick={() => setActiveTab("yoddahs")}
          className={`px-6 py-2 font-bold rounded shadow-md transition ${
            activeTab === "yoddahs"
              ? "bg-yellow-400 text-black"
              : "bg-white border-2 border-yellow-400 text-black"
          }`}
        >
          Our Yoddahs (Squad)
        </button>
        <button
          onClick={() => setActiveTab("sarathis")}
          className={`px-6 py-2 font-bold rounded shadow-md transition ${
            activeTab === "sarathis"
              ? "bg-yellow-400 text-black"
              : "bg-white border-2 border-yellow-400 text-black"
          }`}
        >
          Our Sarathi’s (Management)
        </button>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {displayedMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-md text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full object-cover"
            />
            <div className="bg-[#66071c] py-3 text-white">
              <p className="font-semibold">{member.name}</p>
              <p className="text-sm">{member.number}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

