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
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text content - Left side */}
          <div className="flex flex-col gap-6 text-gray-900 dark:text-gray-200 md:order-1">
            <h2 className="text-4xl font-bold text-center md:text-left">
              From the Club President
            </h2>
            <div className="text-lg leading-relaxed space-y-4">
              <p>
                Greetings, fellow tech enthusiasts! As your Club President, I am thrilled to 
                welcome you to this incredible journey of innovation and discovery that defines 
                our Coding Club.
              </p>
              <p>
                This club is more than just a place to code – it's a community where ideas 
                flourish, friendships are forged, and dreams take shape. We believe that every 
                student has the potential to create something extraordinary, and our role is 
                to provide the platform and support to make it happen.
              </p>
              <p>
                From hackathons that push your limits to workshops that expand your knowledge, 
                from collaborative projects that teach teamwork to individual pursuits that 
                showcase your unique talents – we're here to support every step of your journey.
              </p>
              <p>
                I invite you to dive deep into the world of possibilities that await you here. 
                Let's code not just for today, but for a future where technology serves humanity 
                and innovation knows no bounds.
              </p>
            </div>
          </div>
          
          {/* Avatar - Right side */}
          <div className="flex justify-center md:order-2">
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-gray-300 dark:border-gray-600">
              <Image
                src="/shivayan.jpg"
                alt="Club President"
                width={320}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PresidentSection
