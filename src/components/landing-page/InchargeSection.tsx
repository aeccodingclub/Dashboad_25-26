const InchargeSection = () => {
  return (
    <section
      className="scroll-m-16 relative flex flex-col items-center text-gray-900 dark:text-gray-200
                 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-0.25
                 before:rounded-b-xl
                 before:bg-gradient-to-r before:from-blue-400 before:via-pink-400 before:to-purple-400
                 before:opacity-60 dark:before:opacity-40"
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: "url('/bg/stripes-bg-1.jpeg')" }}
      />

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid max-w-6xl md:grid-cols-[1fr_2fr] gap-16 items-center">
          {/* Avatar - Left side (but second on mobile) */}
          <div className="flex flex-col items-center order-2 md:order-1 gap-8">
            <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gray-300 dark:border-gray-600">
              <img
                src="/about/gunajit-sir.png"
                alt="Club In-Charge"
                width={320}
                height={320}
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Name + designation */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-200">
                Dr. Gunajit Kalita
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Professor In-Charge
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Coding Club, AEC
              </p>
            </div>
          </div>

          {/* Text content - Right side (but first on mobile) */}
          <div className="flex flex-col gap-6 text-gray-900 dark:text-gray-200 order-1 md:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-center md:text-left">
              From the Club In-Charge
            </h2>
            <div className="text-base sm:text-lg leading-relaxed space-y-4 max-w-prose mx-auto px-4 sm:px-6 md:px-0">
              <p>
                Programming is a cardinal element in the computer science
                stream. The digital world is driven by computer programs. The
                heart of the programs is the code. The computer people are very
                enthusiastic about programming. This aura also attracts people
                from other streams to jam the RAM. For this reason, some of the
                students from the Department of Computer Science and Engineering
                of Assam Engineering College (AEC) came up with the idea of a
                club—called the Coding Club of AEC.
              </p>
              <p>
                From time to time, this club has been organizing various events.
                The most notable one is the annual coding competition during
                Pyrokinesis. Taking this opportunity, I applaud the efforts of
                the club committee members and also the other members for
                nurturing the club to sustain. As Professor in-charge, I wish
                the Coding Club of AEC may attain an envious height of success
                soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InchargeSection
