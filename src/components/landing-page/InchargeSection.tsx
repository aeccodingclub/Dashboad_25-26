import Image from "next/image"

const InchargeSection = () => {
  return (
    <section className="h-screen flex items-center justify-center relative">
      {/* Background image overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: "url('/gunajit-sir.jpg')"
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Avatar - Left side */}
          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-gray-300 dark:border-gray-600">
              <Image
                src="/gunajit-sir.jpg"
                alt="Club In-Charge"
                width={320}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Text content - Right side */}
          <div className="flex flex-col gap-6 text-gray-900 dark:text-gray-200">
            <h2 className="text-4xl font-bold text-center md:text-left">
              From the Club In-Charge
            </h2>
            <div className="text-lg leading-relaxed space-y-4">
              <p>
                Programming is a cardinal element in the computer science stream. 
                The digital world is driven by computer programs. 
                The heart of the programs is the code. The computer people are very enthusiastic about programming. 
                This aura also attracts people from other streams to jam the RAM. 
                For this reason, some of the students from the Department of Computer Science and Engineering of Assam Engineering College (AEC) came up with the idea of a club—called the Coding Club of AEC. 
                From time to time, this club has been organizing various events. 
                The most notable one is the annual coding competition during Pyrokinesis. 
                Taking this opportunity, I applaud the efforts of the club committee members and also the other members for nurturing the club to sustain. 
                As Professor in-charge, I wish the Coding Club of AEC may attain an envious height of success soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InchargeSection
