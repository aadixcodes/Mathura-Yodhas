// components/UpcomingMatches.jsx

export default function UpcomingMatches() {
  const matches = [
    {
      date: "August 1st, 2025",
      time: "03:30 PM - 05:00 PM",
      stadium: "Stadium Name",
      homeTeam: {
        name: "Mathura Yodhyas",
        logo: "/images/yodhas-logo.png",
      },
      awayTeam: {
        name: "Noida Thunders",
        logo: "/images/thunders-logo.png",
      },
    },
    // Add more matches as needed
  ];

  return (
    <section className="py-16 px-4 sm:px-8 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-extrabold text-[#5a071a]">Upcoming Matches</h2>
      </div>

      <div className="space-y-6">
        {matches.map((match, index) => (
          <div
            key={index}
            className="bg-[#5a071a] rounded-[20px] w-full max-w-4xl mx-auto overflow-hidden shadow-md relative text-white"
          >
            {/* Time Tag */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#fbc02d] px-4 py-1 rounded-full text-black font-bold text-sm">
              {match.time}
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between px-6 py-6">
              {/* Home Team */}
              <div className="flex items-center space-x-2">
                <span className="font-bold text-lg">{match.homeTeam.name}</span>
                <img src={match.homeTeam.logo} alt={match.homeTeam.name} className="w-10 h-10" />
              </div>

              {/* Center Info */}
              <div className="text-center my-4 md:my-0">
                <p className="text-lg font-bold text-white">{match.date}</p>
                <p className="text-sm text-gray-200">{match.stadium}</p>
              </div>

              {/* Away Team */}
              <div className="flex items-center space-x-2">
                <img src={match.awayTeam.logo} alt={match.awayTeam.name} className="w-10 h-10" />
                <span className="font-bold text-lg">{match.awayTeam.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

