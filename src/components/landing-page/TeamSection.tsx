const TeamSection = () => {
  const coreMembers = [
    {
      name: "Alex Johnson",
      role: "President",
      wing: "Web",
      bio: "Full-stack developer passionate about building scalable web applications",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Sarah Chen",
      role: "Vice President",
      wing: "AI/ML",
      bio: "AI enthusiast working on computer vision and natural language processing",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Mike Rodriguez",
      role: "Technical Lead",
      wing: "CP/DSA",
      bio: "Competitive programmer and algorithms expert, loves solving complex problems",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Emily Davis",
      role: "Web Wing Lead",
      wing: "Web",
      bio: "Frontend specialist with expertise in React and modern web technologies",
      image: "/api/placeholder/300/300"
    }
  ]

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The passionate leaders driving our coding club forward
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">👤</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-blue-600 font-medium mb-1">{member.role}</p>
              <p className="text-sm text-gray-500 mb-3">{member.wing} Wing</p>
              <p className="text-sm text-gray-600 mb-4">{member.bio}</p>
              <div className="flex justify-center gap-3">
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
