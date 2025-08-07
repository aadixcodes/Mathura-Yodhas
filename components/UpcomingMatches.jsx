export default function UpcomingMatches() {
  const matches = [
    {
      date: "August 8th, 2025",
      time: "05:00 PM - 06:30 PM",
      stadium: "Stadium Name",
      homeTeam: {
        name: "Mathura Yodhyas",
        logo: "/assets/mathura.png",
      },
      awayTeam: {
        name: "Moradabad Bulls",
        logo: "/assets/uppvl/moradabad.png",
      },
    },
    {
      date: "August 10th, 2025",
      time: "03:30 PM - 05:00 PM",
      stadium: "Stadium Name",
      homeTeam: {
        name: "Mathura Yodhyas",
        logo: "/assets/mathura.png",
      },
      awayTeam: {
        name: "Gorakhpur Giants",
        logo: "/assets/uppvl/gorakhpur.png",
      },
    },
    {
      date: "August 11th, 2025",
      time: "03:30 PM - 05:00 PM",
      stadium: "Stadium Name",
      homeTeam: {
        name: "Mathura Yodhyas",
        logo: "/assets/mathura.png",
      },
      awayTeam: {
        name: "Noida Thunders",
        logo: "/assets/uppvl/noida.png",
      },
    },

    {
      date: "August 13th, 2025",
      time: "05:00 PM - 06:30 PM",
      stadium: "Stadium Name",
      homeTeam: {
        name: "Mathura Yodhyas",
        logo: "/assets/mathura.png",
      },
      awayTeam: {
        name: "Lucknow Tigers",
        logo: "/assets/uppvl/lucknow.png",
      },
    },

    {
      date: "August 15th, 2025",
      time: "03:30 PM - 05:00 PM",
      stadium: "Stadium Name",
      homeTeam: {
        name: "Mathura Yodhyas",
        logo: "/assets/mathura.png",
      },
      awayTeam: {
        name: "Kashi Warriors",
        logo: "/assets/uppvl/Kashi.png",
      },
    },
  ];

  return (
    <section className="py-20 bg-white">
      {/* <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-[heading-1] text-[#5a071a]">
          Upcoming Matches
        </h2>
      </div> */}

      <div className="space-y-6">
        {matches.map((match, index) => (
          <div
            key={index}
            className="bg-[#5a071a] rounded-tr-[32px] rounded-bl-[32px] w-full max-w-4xl mx-auto overflow-hidden shadow-md relative text-white px-2 py-4 sm:px-6 sm:py-6"
          >
            {/* Match Time */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#fbc02d] px-2 sm:px-4 py-0.5 sm:py-1 rounded-bl-xl rounded-br-xl text-black font-bold text-xs sm:text-sm z-20">
                {match.time}
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
              {/* Home Team */}
              <div className="flex items-center space-x-1 sm:space-x-2">
                <span className="font-bold font-[popins] text-sm sm:text-lg text-center">
                  {match.homeTeam.name}
                </span>
                <img
                  src={match.homeTeam.logo}
                  alt={match.homeTeam.name}
                  className="w-10 h-10 sm:w-20 sm:h-20 object-contain"
                />
              </div>

              {/* VS and Info */}
              <div className="relative text-center px-2 py-2 sm:px-4 sm:py-4">
                <span className="absolute inset-0 flex items-center justify-center text-[2.2rem] sm:text-[5rem] md:text-[6rem] font-extrabold text-white opacity-10 pointer-events-none select-none">
                  VS
                </span>
                <div className="relative z-10">
                  <p className="text-base sm:text-2xl mt-1 sm:mt-2 font-bold font-[popins]">{match.date}</p>
                  <p className="text-xs sm:text-base text-gray-200">{match.stadium}</p>
                </div>
              </div>

              {/* Away Team */}
              <div className="flex items-center space-x-1 sm:space-x-2">
                <img
                  src={match.awayTeam.logo}
                  alt={match.awayTeam.name}
                  className="w-10 h-10 sm:w-20 sm:h-20 object-contain"
                />
                <span className="font-bold font-[popins] text-sm sm:text-lg text-center">
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
