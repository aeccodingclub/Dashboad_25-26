const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Learning Platform",
      description: "Full-stack web application for online learning with video streaming and progress tracking",
      tech: ["Next.js", "Node.js", "PostgreSQL"],
      category: "Web"
    },
    {
      title: "Smart Traffic System",
      description: "AI-powered traffic management system using computer vision and machine learning",
      tech: ["Python", "OpenCV", "TensorFlow"],
      category: "AI/ML"
    },
    {
      title: "Algorithm Visualizer",
      description: "Interactive tool to visualize sorting and graph algorithms for better understanding",
      tech: ["React", "D3.js", "JavaScript"],
      category: "CP/DSA"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates and team features",
      tech: ["React", "Firebase", "TypeScript"],
      category: "Web"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing innovative projects built by our talented club members
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                  {project.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <button className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
                  View Code →
                </button>
                <button className="text-green-600 hover:text-green-800 font-medium transition-colors">
                  Live Demo →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
