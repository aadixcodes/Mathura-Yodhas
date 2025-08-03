"use client";

import { useState } from "react";

const yoddahs = [
  {
    name: "Player Name",
    number: "19",
    image: "/images/yoddahs/player1.jpg",
  },
  // Add more players...
];

const sarathis = [
  {
    name: "Head Coach",
    image: "/images/sarathis/headcoach.jpg",
  },
  {
    name: "Asst. Coach",
    image: "/images/sarathis/asstcoach.jpg",
  },
  {
    name: "Team Manager",
    image: "/images/sarathis/manager.jpg",
  },
  {
    name: "Physiotherapist",
    image: "/images/sarathis/physio.jpg",
  },
  {
    name: "Trainer",
    image: "/images/sarathis/trainer.jpg",
  },
];

export default function TeamSection() {
  const [activeTab, setActiveTab] = useState("yoddahs");

  const activeList = activeTab === "yoddahs" ? yoddahs : sarathis;

  return (
    <section className="py-10 px-4 sm:px-8 bg-[#f6f6f6] text-center">
      {/* Toggle Buttons */}
      <div className="flex justify-center mb-8 gap-4 flex-wrap">
        <button
          onClick={() => setActiveTab("yoddahs")}
          className={`px-5 py-2 font-bold rounded-md border-2 transition ${
            activeTab === "yoddahs"
              ? "bg-yellow-400 text-black"
              : "border-yellow-400 text-black"
          }`}
        >
          Our Yoddahs (Squad)
        </button>
        <button
          onClick={() => setActiveTab("sarathis")}
          className={`px-5 py-2 font-bold rounded-md border-2 transition ${
            activeTab === "sarathis"
              ? "bg-yellow-400 text-black"
              : "border-yellow-400 text-black"
          }`}
        >
          Our Sarathi’s (Management)
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {activeList.map((person, idx) => (
          <div key={idx} className="text-center">
            <div className="bg-white shadow-lg rounded-md overflow-hidden">
              <img
                src={person.image}
                alt={person.name}
                className="w-full h-auto object-cover"
              />
              <div className="bg-[#66071c] text-white py-2">
                <p className="font-semibold text-sm">{person.name}</p>
                {person.number && <p className="text-xs">{person.number}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
