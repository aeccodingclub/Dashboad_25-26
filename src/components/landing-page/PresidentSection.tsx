import Image from "next/image"

const PresidentSection = () => {
  return (
    <section className="h-screen flex items-center justify-center relative">
      {/* Background image overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: "url('/shivayan.jpg')"
        }}
      />
      
      <div className="grid max-w-6xl md:grid-cols-[2fr_1fr] gap-16 items-center">
        {/* Text content - Left side */}
        <div className="flex flex-col gap-6 text-gray-900 dark:text-gray-200 md:order-1">
          <h2 className="text-4xl font-bold text-center md:text-left">
            From the Club President
          </h2>
          <div className="text-lg leading-relaxed space-y-4">
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
        <div className="flex flex-col items-center md:order-2 gap-8">
          <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-gray-300 dark:border-gray-600">
            <Image
              src="/shivayan.jpg"
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
    </section>
  )
}

export default PresidentSection
