import Image from "next/image"

const SuccessSection = () => {
  const profiles = [
    {
      name: "Poran",
      avatar: "/poran.jpg",
      company: "Google",
      designation: "CEO",
      batch: "2023-27",
      clubRole: "Web Wing Coordinator",
      message: "The Coding Club really built me up good! Those days were peak!"
    },
    {
      name: "Aarav Sharma",
      avatar: "/aarav.jpg",
      company: "OpenAI",
      designation: "AI Research Engineer",
      batch: "2022-26",
      clubRole: "AI/ML Lead",
      message: "From training my first model to deploying production AI — all started in the club."
    },
    {
      name: "Meera Patel",
      avatar: "/meera.jpg",
      company: "Microsoft",
      designation: "Cloud Solutions Architect",
      batch: "2021-25",
      clubRole: "Events & Outreach Head",
      message: "Hackathons, study jams, and a community that felt like family — can't recommend enough."
    },
    {
      name: "Rohit Das",
      avatar: "/rohit.jpg",
      company: "Stripe",
      designation: "Full-Stack Developer",
      batch: "2020-24",
      clubRole: "Competitive Programming Captain",
      message: "The grind, the caffeine, the late-night debugging sessions… best part of my college life."
    }
  ]

  return (
    <section id="success" className="flex flex-col gap-16 items-center text-gray-900 dark:text-gray-200">
      <h1 className="text-4xl font-bold">Success Stories</h1>
      <div className="grid md:grid-cols-2 gap-16">
        {profiles.map((profile, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center p-6 rounded-2xl border border-gray-300 dark:border-gray-700 shadow-md bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow"
          >
            <Image
              src={profile.avatar}
              alt={profile.name}
              className="w-20 h-20 rounded-full object-cover mb-4"
            />
            <h2 className="text-lg font-semibold">{profile.name}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {profile.designation} @ {profile.company}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {profile.batch} • {profile.clubRole}
            </p>
            <p className="mt-3 text-center text-gray-700 dark:text-gray-300 italic">
              “{profile.message}”
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SuccessSection
