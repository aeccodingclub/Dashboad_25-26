import { Link } from "react-router"

const ClubInfo = () => {
  return (
    <section id="info" className="scroll-m-32 flex flex-col gap-16 items-center text-gray-900 dark:text-gray-200">
      <h1 className="text-4xl font-bold">Who Are We?</h1>
      <div className="grid md:grid-cols-2 gap-16">
        <div className="flex flex-col items-center justify-between gap-8">
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
          
          <Link to="/about">
            <button className="w-48 h-10 border-2 rounded-lg cursor-pointer hover:text-blue-400">
              Learn More
            </button>
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
    </section>
  )
}

export default ClubInfo
