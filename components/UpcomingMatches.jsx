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
  ];

  return (
    <section className="py-12 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-[heading-1] text-[#5a071a]">
          Upcoming Matches
        </h2>
      </div>

      <div className="space-y-6">
        {matches.map((match, index) => (
          <div
            key={index}
            className="bg-[#5a071a] rounded-tr-[40px] rounded-bl-[40px] w-full max-w-4xl mx-auto overflow-hidden shadow-md relative text-white px-4 py-6 sm:px-6"
          >
            {/* Match Time */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#fbc02d] px-3 sm:px-4 py-1 rounded-full text-black font-bold text-xs sm:text-sm z-20">
              {match.time}
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Home Team */}
              <div className="flex items-center space-x-2">
                <span className="font-bold font-[popins] text-base sm:text-lg text-center">
                  {match.homeTeam.name}
                </span>
                <img
                  src={match.homeTeam.logo}
                  alt={match.homeTeam.name}
                  className="w-14 h-14 sm:w-20 sm:h-20 object-contain"
                />
              </div>

              {/* VS and Info */}
              <div className="relative text-center px-4 py-4">
                <span className="absolute inset-0 flex items-center justify-center text-[3.5rem] sm:text-[5rem] md:text-[6rem] font-extrabold text-white opacity-10 pointer-events-none select-none">
                  VS
                </span>
                <div className="relative z-10">
                  <p className="text-lg sm:text-2xl mt-2 font-bold font-[popins]">{match.date}</p>
                  <p className="text-sm sm:text-base text-gray-200">{match.stadium}</p>
                </div>
              </div>

              {/* Away Team */}
              <div className="flex items-center space-x-2">
                <img
                  src={match.awayTeam.logo}
                  alt={match.awayTeam.name}
                  className="w-14 h-14 sm:w-20 sm:h-20 object-contain"
                />
                <span className="font-bold font-[popins] text-base sm:text-lg text-center">
                  {match.awayTeam.name}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
