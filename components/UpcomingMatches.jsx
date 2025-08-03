// components/UpcomingMatches.jsx

export default function UpcomingMatches() {
  const matches = [
    {
      date: "August 1st, 2025",
      time: "03:30 PM - 05:00 PM",
      stadium: "Stadium Name",
      homeTeam: {
        name: "Mathura Yodhyas",
        logo: "/assets/mathura.png",
      },
      awayTeam: {
        name: "Noida Thunders",
        logo: "/assets/ayodhya.png",
      },
    },

    {
      date: "August 1st, 2025",
      time: "03:30 PM - 05:00 PM",
      stadium: "Stadium Name",
      homeTeam: {
        name: "Mathura Yodhyas",
        logo: "/assets/mathura.png",
      },
      awayTeam: {
        name: "Noida Thunders",
        logo: "/assets/ayodhya.png",
      },
    },

    {
      date: "August 1st, 2025",
      time: "03:30 PM - 05:00 PM",
      stadium: "Stadium Name",
      homeTeam: {
        name: "Mathura Yodhyas",
        logo: "/assets/mathura.png",
      },
      awayTeam: {
        name: "Noida Thunders",
        logo: "/assets/ayodhya.png",
      },
    },
    // Add more matches as needed
  ];

  return (
    <section className="py-16 px-4 sm:px-8 bg-white">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-extrabold font-[popins] text-[#5a071a]">Upcoming Matches</h2>
      </div>

      <div className="space-y-6">
      {matches.map((match, index) => (
          <div
            key={index}
            className="bg-[#5a071a] rounded-tr-[50px] rounded-bl-[50px] w-full max-w-5xl mx-auto overflow-hidden shadow-md relative text-white"
          >
            {/* Time Tag */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#fbc02d] px-4 py-1 rounded-full text-black font-bold text-sm">
              {match.time}
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between px-6 py-6">
              {/* Home Team */}
              <div className="flex items-center space-x-2">
                <span className="font-bold font-[popins] text-lg">{match.homeTeam.name}</span>
                <img src={match.homeTeam.logo} alt={match.homeTeam.name} className="w-20 h-20" />
              </div>

              {/* Center Info with VS Background */}
              <div className="relative text-center my-4 md:my-0 px-6 py-4">
                {/* VS Background */}
                <span className="absolute inset-0 flex items-center justify-center text-[5rem] md:text-[6rem] font-extrabold text-white opacity-10 pointer-events-none select-none">
                  VS
                </span>

                {/* Foreground Text */}
                <div className="relative z-10">
                  <p className="text-2xl mt-4 font-bold text-white font-[popins]">{match.date}</p>
                  <p className="text-sm text-gray-200">{match.stadium}</p>
                </div>
              </div>

              {/* Away Team */}
              <div className="flex items-center space-x-2">
                <img src={match.awayTeam.logo} alt={match.awayTeam.name} className="w-20 h-20" />
                <span className="font-bold font-[popins] text-lg">{match.awayTeam.name}</span>
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

