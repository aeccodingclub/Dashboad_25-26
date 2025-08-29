const SuccessSection = () => {
  const profiles = [
    {
      name: "Shayan Dutta",
      avatar: "success/shayan.png",
      achievement: "Kheti Bati — Empowering Farmers",
      details: "Leading Farming App • Agricultural Guidance, Weather, Govt Schemes",
      batch: "2022-26",
      clubRole: "Ex Co-Tech Lead • Backend & Full-Stack Enthusiast",
      rating: "Backend Engineer @ Mealth • https://mymealth.com/",
      message: "Bringing tech solutions to farmers and scaling real-world impact."
    },
        {
      name: "Shivayan Chakravarty",
      avatar: "success/shivayan.png",
      achievement: "Competitive Programming Grind",
      details: "Pre-Finalist @ IIT Roorkee Codify Rumble",
      batch: "2023-27",
      clubRole: "President",
      rating: "Codeforces: 1238 • CodeChef: 1290",
      message: "Balancing dashboards, contests, and caffeine — Dashify was just the start!"
    },
    {
      name: "Nilav Talukdar",
      avatar: "success/nilav.png",
      achievement: "Winner HackGCU 2025",
      details: "Seed Funding • EcoSwachh (Assam Startups)",
      batch: "2023-27",
      clubRole: "Tech Lead • Startup Builder & MERN Dev",
      rating: "Ex-React Dev @ MentorAide • MERN Intern @ ElevateLabs",
      message: "From winning hacks to raising funds — building fast, learning faster!"
    },
    {
      name: "Pritom Kalita",
      avatar: "success/pritom.png",
      achievement: "D3Fest Hackathon Winner",
      details: "IIIT Bhubaneshwar • State Level (22 Teams)",
      batch: "2024-28",
      clubRole: "Web Wing Moderator • Hackathon Champ",
      rating: "Invited to Nationals • Passion for Scalable Solutions",
      message: "Early in the journey but already proving what juniors can achieve."
    }
  ]

  return (
    <section id="success" 
      className="scroll-m-16 relative flex flex-col items-center text-gray-900 dark:text-gray-200
                 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-0.25
                 before:rounded-b-xl
                 before:bg-gradient-to-r before:from-blue-400 before:via-pink-400 before:to-purple-400
                 before:opacity-60 dark:before:opacity-40"
    >
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: "url('bg/space-bg-1.jpg')" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Where passion meets achievement—celebrating the incredible milestones of our coding community
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {profiles.map((profile, index) => (
            <div 
              key={index} 
              className="group relative backdrop-blur-md bg-white/5 dark:bg-white/3
                         border border-white/20 dark:border-white/10 rounded-xl overflow-hidden
                         hover:bg-white/10 dark:hover:bg-white/5
                         hover:border-white/30 dark:hover:border-white/20
                         hover:shadow-2xl hover:shadow-black/20 dark:hover:shadow-white/5
                         hover:-translate-y-2 transition-all duration-300 ease-out"
            >
              {/* Profile Header with Avatar */}
              <div className="relative p-6 pb-0">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <img 
                      src={profile.avatar} 
                      alt={profile.name}
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-white/20 dark:border-white/10 
                                group-hover:border-white/40 dark:group-hover:border-white/20 
                                group-hover:scale-105 transition-all duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1 
                                  group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">
                      {profile.name}
                    </h3>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 flex-wrap">
                      <span className="bg-white/20 dark:bg-white/10 backdrop-blur-sm px-2 py-0.5 rounded-full border border-white/20 dark:border-white/10">
                        {profile.batch}
                      </span>
                      <span>•</span>

                      {/* xs: only first part before • */}
                      <span className="inline sm:hidden">
                        {profile.clubRole.split("•")[0].trim()}
                      </span>

                      {/* sm+: full clubRole */}
                      <span className="hidden sm:inline">
                        {profile.clubRole}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Achievement Content */}
                <div className="px-6 pb-6">
                  <div className="mb-4">
                    <div className="bg-gradient-to-r from-green-400/20 to-emerald-400/20 
                                    backdrop-blur-sm rounded-lg p-3 border border-green-400/20 dark:border-green-400/10
                                    group-hover:from-green-400/30 group-hover:to-emerald-400/30 
                                    group-hover:border-green-400/30 dark:group-hover:border-green-400/20
                                    transition-all duration-300">
                      <h4 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white mb-1">
                        {profile.achievement}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                        {profile.details}
                      </p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="bg-white/20 dark:bg-white/10 backdrop-blur-sm text-gray-800 dark:text-gray-200 
                                    text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full border border-white/20 dark:border-white/10 
                                    hover:bg-white/30 dark:hover:bg-white/20 hover:scale-105 
                                    transition-all duration-200 cursor-pointer inline-block">
                      {profile.rating}
                    </span>
                  </div>

                  <div className="relative">
                    <div className="absolute top-0 left-0 text-3xl sm:text-4xl text-blue-400/30 dark:text-blue-400/20 font-serif leading-none">
                      &quot;
                    </div>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300 italic pl-6 sm:pl-8 pr-2 sm:pr-4 
                                  group-hover:text-gray-600 dark:group-hover:text-gray-200 transition-colors duration-300">
                      {profile.message}
                    </p>
                    <div className="absolute bottom-0 right-0 text-3xl sm:text-4xl text-blue-400/30 dark:text-blue-400/20 font-serif leading-none transform rotate-180">
                      &quot;
                    </div>
                  </div>
                </div>
              </div>

              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-400/5 to-purple-400/5 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://forms.gle/MSBW2LNa5H6aCwcs6/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative text-blue-500 dark:text-blue-400 font-semibold text-lg 
                      transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-300"
          >
            Join Us Today
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 dark:bg-blue-400 
                            transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default SuccessSection
