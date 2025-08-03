"use client";
import Image from "next/image";
import Link from "next/link";

const matches = [
  {
    id: 1,
    team1: "Mathura Yodhas",
    team2: "Noida Thunders",
    date: "July 31, 2025 | 02:00PM",
    stadium: "Stadium Name",
    team1Logo: "/assets/mathura.png",
    team2Logo: "/assets/noida.png",
  },
  {
    id: 2,
    team1: "Mathura Yodhas",
    team2: "Noida Thunders",
    date: "July 31, 2025 | 02:00PM",
    stadium: "Stadium Name",
    team1Logo: "/assets/mathura.png",
    team2Logo: "/assets/noida.png",
  },
];

const Schedule = () => {
  return (
    <section 
      className="relative text-white py-10 px-4 overflow-hidden"
      style={{
        backgroundImage: "url('/assets/mathura.png')", // Replace with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#680000]/90 z-0"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="lg:text-4xl font-bold text-yellow-400 font-[popins]">Match Schedule</h2>
            <p className="text-lg text-gray-100 lg:mt-2 font-[popins]">Next Clash on the Court</p>
          </div>
          <Link
            href="/fixtures"
            className="bg-white text-[#680000] px-5 py-2 rounded text-sm font-[popins] hover:bg-yellow-400 transition"
          >
            View More
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {matches.map((match) => (
            <div 
              key={match.id}
              className="relative bg-white/70 rounded-lg p-4 text-center
                         border border-white/20 shadow-lg
                         before:absolute before:inset-0 before:bg-white/5 before:rounded-lg
                         hover:before:bg-white/30 hover:scale-105 transition-all duration-300"
            >
              {/* White glow effect */}
              <div className="absolute inset-0 rounded-lg border border-white/10 pointer-events-none"></div>
              
              <div className="flex justify-around items-center mb-4 relative z-10">
                <div className="text-lg font-semibold text-black font-[popins]">{match.team1}</div>
                <div className="font-bold text-2xl text-yellow-400">VS</div>
                <div className="text-lg font-semibold text-black font-[popins]">{match.team2}</div>
              </div>
              <div className="flex justify-around items-center mb-4 relative z-10">
                  <Image src={match.team1Logo} alt="Team 1 Logo" width={120} height={120} />
                  <Image src={match.team2Logo} alt="Team 2 Logo" width={130} height={130} />
              </div>
              <div className="text-lg text-black relative z-10 font-[popins]">{match.date}</div>
              <div className="text-sm text-black relative z-10 font-[popins]">{match.stadium}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;