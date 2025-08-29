const PresidentSection = () => {
  return (
    <section 
      className="scroll-m-16 relative flex flex-col items-center text-gray-900 dark:text-gray-200
                 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-0.25
                 before:rounded-b-xl
                 before:bg-gradient-to-r before:from-blue-400 before:via-pink-400 before:to-purple-400
                 before:opacity-60 dark:before:opacity-40"
    >
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: "url('/bg/led-bg-1.jpg')" }}
      />
      
      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid max-w-6xl md:grid-cols-[2fr_1fr] gap-16 items-center">
          
          {/* Text content - Left side */}
          <div className="flex flex-col gap-6 text-gray-900 dark:text-gray-200">
            <h2 className="text-3xl sm:text-4xl font-bold text-center md:text-left">
              From the Club President
            </h2>
            <div className="text-base sm:text-lg leading-relaxed space-y-4 max-w-prose mx-auto px-2 sm:px-4 md:px-0">
              <p>
                &quot;Programming isn&apos;t just about knowledge, it&apos;s about the ability to solve problems.&quot;
              </p>
              <p>
                I&apos;m honored to serve as the President of AEC Coding Club for the 2025-26 session. 
                AEC Coding Club stands out as one of the most dynamic clubs at AEC, fostering a large 
                community of coding enthusiasts overseen by seasoned tech experts. The club opens doors 
                to countless opportunities, offering joyous experiential learning. Each member is 
                encouraged to wholeheartedly participate in various club events.
              </p>
              <p>
                Working alongside a dedicated, innovative, and passionate team is a daily privilege. 
                Our collaboration brings new learning experiences, allowing us to consistently broaden our 
                horizons. With the team&apos;s unwavering support, I am confident that we can cultivate an 
                environment conducive to coding excellence at AEC, propelling the club to greater heights.
              </p>
            </div>
          </div>
          
          {/* Avatar - Right side */}
          <div className="flex flex-col items-center gap-8">
            <div className="w-40 h-40 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-gray-300 dark:border-gray-600">
              <img
                src="/about/shivayan.jpg"
                alt="Club President"
                width={320}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name + designation */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-200">Shivayan Chakraborty</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">President</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">AEC Coding Club</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PresidentSection
