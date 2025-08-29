import Link from "next/link"

const ProjectsSection = () => {
  const projects = [
    {
      title: "Eco Swachh",
      description: "An AI-powered platform that gamifies sustainable practices and rewards users for promoting cleaner, eco-friendly communities",
      tech: ["Next.js", "MongoDB", "Google Gemini"],
      category: "Web",
      authors: ["Nilav Talukdar"],
      githubUrl: "https://github.com/nilavtalukdar06/smart-waste-management",
      liveUrl: "https://smart-waste-management-one.vercel.app/",
      image: "projects/eco-swachh.png"
    },
        {
      title: "Flood Detector AI",
      description: "AI model that analyzes satellite images to detect and outline flooded areas with high precision",
      tech: ["Mask R-CNN", "PyTorch", "Satellite Imagery"],
      category: "AI/ML",
      authors: ["Aryan Rajkhowa"],
      githubUrl: "https://github.com/RaulOverhaul/Flood_Detection_using_Mask_RCNN",
      liveUrl: "https://github.com/RaulOverhaul/Flood_Detection_using_Mask_RCNN",
      image: "/projects/flood-detection.png"
    },
    {
      title: "Dashify",
      description: "A smart academic dashboard to organize subjects, notes, and lectures in one place for focused learning",
      tech: ["React", "Express", "MongoDB"],
      category: "Web",
      authors: ["Shivayan Chakraborty"],
      githubUrl: "https://github.com/Shivayan09/Dashifyy",
      liveUrl: "https://dashify-frontend-rk1l.onrender.com/",
      image: "/projects/dashify.png"
    },
    {
      title: "Aasaan Retirement",
      description: "A smart financial planning platform that helps Indians calculate and secure a comfortable retirement with ease",
      tech: ["Next.js", "Firebase", "TailwindCSS"],
      category: "Web",
      authors: ["Sambhab Roy"],
      githubUrl: "https://github.com/samX18-epic/aasan-retirement-final",
      liveUrl: "https://retirementaasan.in/",
      image: "/projects/aasaan-retirement.png"
    }
  ]

  return (
    <section id="projects" 
      className="scroll-m-16 relative flex flex-col items-center text-gray-900 dark:text-gray-200
                 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-0.25
                 before:rounded-b-xl
                 before:bg-gradient-to-r before:from-blue-400 before:via-pink-400 before:to-purple-400
                 before:opacity-60 dark:before:opacity-40"
    >
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: "url('/bg/pattern-bg-2.jpg')" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Innovation meets execution—witness the incredible projects crafted by our passionate developers
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative backdrop-blur-md bg-white/5 dark:bg-white/3
                         border border-white/20 dark:border-white/10 rounded-xl overflow-hidden
                         hover:bg-white/10 dark:hover:bg-white/5
                         hover:border-white/30 dark:hover:border-white/20
                         hover:shadow-2xl hover:shadow-black/20 dark:hover:shadow-white/5
                         hover:-translate-y-2 transition-transform duration-300 ease-out"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover object-top opacity-30 group-hover:opacity-60 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20 dark:to-black/20" />
              </div>

              {/* Content */}
              <div className="p-6 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-white/20 dark:bg-white/10 backdrop-blur-sm text-gray-800 dark:text-gray-200 text-xs px-3 py-1 rounded-full font-medium border border-white/20 dark:border-white/10">
                    {project.category}
                  </span>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    by {project.authors.join(", ")}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4 group-hover:text-gray-600 dark:group-hover:text-gray-200 transition-colors duration-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-white/20 dark:bg-white/10 backdrop-blur-sm text-gray-800 dark:text-gray-200 text-sm px-3 py-1 rounded-full border border-white/20 dark:border-white/10 hover:bg-white/30 dark:hover:bg-white/20 hover:scale-105 transition-all duration-200 cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6">
                  <a 
                    href={project.githubUrl}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-all duration-300 hover:underline decoration-2 underline-offset-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub →
                  </a>
                  <a 
                    href={project.liveUrl}
                    className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 font-medium transition-all duration-300 hover:underline decoration-2 underline-offset-4"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Live Demo →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <Link
            href="/#projects"
            className="group relative inline-block text-blue-600 dark:text-blue-400 font-semibold text-lg transition-colors duration-300 hover:text-blue-700 dark:hover:text-blue-300"
          >
            Browse Projects
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
