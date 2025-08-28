import Link from "next/link"

const AboutSection = () => {
  return (
    <section 
      id="about" 
      className="scroll-m-32 relative flex flex-col items-center text-gray-900 dark:text-gray-200"
    >
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: "url('/pattern-bg-1.jpg')" }}
      />

      {/* Content wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-center mb-16">Who Are We?</h1>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-6">
              <p>
                The Coding Club is at the heart of Assam Engineering College&apos;s tech scene — 
                a place where enthusiasts from any department or semester can come together to 
                collaborate and create cutting-edge innovations.
              </p>
              <p>
                Over the years, countless ideas have taken flight here, and each year brings 
                fresh projects that add to our growing legacy. Join us, and make your mark.
              </p>
              <p>
                We&apos;re here to <strong>Dream. Craft. Inspire.</strong>
              </p>
            </div>

            <Link href="/about" className="w-48 h-10 border-2 rounded-lg flex items-center justify-center hover:text-blue-400 transition-colors">
              Learn More
            </Link>
          </div>

          <div className="relative w-full aspect-video">
            <iframe 
              className="absolute inset-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/RHQOSNH8CsA" 
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
