import { Monitor, Cpu, Bot } from "lucide-react";

const WingsSection = () => {
  const wings = [
    {
      title: "Web Wing",
      description: "Learn everything from HTML/CSS basics to modern full-stack frameworks like MERN and Next.js. We host workshops, hackathons, and share the latest opportunities—both inside our club and outside contests!",
      icon: Monitor,
      bgGradient: "from-blue-400/20 to-cyan-400/20",
      hoverGradient: "from-blue-400/30 to-cyan-400/30",
      skills: [
        "HTML", "CSS", "JavaScript", "TypeScript", 
        "React", "Next.js", "Node.js", "Express", 
        "TailwindCSS", "GraphQL", "MongoDB", "REST APIs", 
        "MERN Stack", "Full-Stack Dev", "Hackathons"
      ]
    },
    {
      title: "CP/DSA Wing",
      description: "Weekly contests to climb the CP ladder together, with solution discussions every other week. Form teams to compete in college techfests, online contests, and our annual CP event in Pyrokinesis!",
      icon: Cpu,
      bgGradient: "from-purple-400/20 to-pink-400/20",
      hoverGradient: "from-purple-400/30 to-pink-400/30",
      skills: [
        "Python", "C++", "Java", 
        "Algorithms", "Data Structures", "Problem Solving", 
        "Codeforces", "LeetCode", "CP Contests", "Team Competitions"
      ]
    },
    {
      title: "AI/ML Wing",
      description: "We explore and experiment with the latest AI/ML technologies, building innovative projects—from LLMs to object detection to real-world problem solving. Always learning, always creating!",
      icon: Bot,
      bgGradient: "from-green-400/20 to-emerald-400/20",
      hoverGradient: "from-green-400/30 to-emerald-400/30",
      skills: [
        "Python", "NumPy", "Pandas", "TensorFlow", "PyTorch", 
        "Scikit-learn", "Data Science", "Machine Learning", 
        "Large Language Models", "Object Detection", "AI Projects"
      ]
    }
  ];

  return (
    <section id="wings" 
      className="scroll-m-16 relative flex flex-col items-center text-gray-900 dark:text-gray-200
                 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-0.25
                 before:rounded-b-xl
                 before:bg-gradient-to-r before:from-blue-400 before:via-pink-400 before:to-purple-400
                 before:opacity-60 dark:before:opacity-40"
    >
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15 blur-xs"
        style={{ backgroundImage: "url('bg/code-bg-1.jpg')" }}
      />

      <div className="max-w-7xl z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Wings
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover your passion and dive deep into the tech domain that sparks your curiosity
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {wings.map((wing, index) => (
            <div 
              key={index} 
              className={`group relative backdrop-blur-md bg-white/10 dark:bg-white/5
                        border border-white/20 dark:border-white/10 rounded-xl p-6 sm:p-8 
                        hover:bg-gradient-to-br hover:${wing.hoverGradient}
                        hover:border-white/30 dark:hover:border-white/20
                        hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/10
                        transition-all duration-500 ease-in-out
                        before:content-[''] before:absolute before:inset-0 before:rounded-xl
                        before:bg-white/5 dark:before:bg-white/[0.02] before:backdrop-blur-sm
                        hover:before:bg-white/10 dark:hover:before:bg-white/[0.05]
                        before:transition-all before:duration-300`}
            >
              <div className="flex gap-3 sm:gap-4 items-center relative z-10">
                <wing.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-500 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-500 transition-colors duration-300 cursor-default">
                  {wing.title}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-200 my-4 sm:my-6 relative z-10">
                {wing.description}
              </p>
              <div className="flex flex-wrap gap-2 relative z-10">
                {wing.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="bg-white/30 dark:bg-white/10 backdrop-blur-sm text-gray-800 dark:text-gray-200 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full border border-white/20 dark:border-white/10 hover:bg-white/60 dark:hover:bg-white/20 hover:scale-105 transition-all duration-200 cursor-pointer"
                  >
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
