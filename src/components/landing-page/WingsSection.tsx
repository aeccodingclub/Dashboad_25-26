const WingsSection = () => {
  const wings = [
    {
      title: "Web Wing",
      description: "Master modern web development with React, Next.js, and full-stack technologies",
      icon: "🌐",
      skills: ["React", "Next.js", "Node.js", "TypeScript"]
    },
    {
      title: "AI/ML Wing",
      description: "Explore artificial intelligence and machine learning to build intelligent systems",
      icon: "🤖",
      skills: ["Python", "TensorFlow", "PyTorch", "Data Science"]
    },
    {
      title: "CP/DSA Wing",
      description: "Sharpen problem-solving skills with competitive programming and data structures",
      icon: "⚡",
      skills: ["C++", "Algorithms", "Data Structures", "Problem Solving"]
    }
  ]

  return (
    <section id="wings" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Wings
          </h2>
          <p className="text-lg text-gray-600 dark:text-white max-w-2xl mx-auto">
            Choose your path and specialize in the technology domain that excites you most
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {wings.map((wing, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{wing.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{wing.title}</h3>
              <p className="text-gray-600 mb-6">{wing.description}</p>
              <div className="flex flex-wrap gap-2">
                {wing.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WingsSection
