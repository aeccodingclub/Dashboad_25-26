import Footer from "../components/Footer"
import Layout from "../components/Layout"
import MonthlySchedule from "../components/MonthlySchedule"
import Navbar from "../components/Navbar"
import { HeroSection, ClubInfo, SuccessStories } from "../components/landing-page"

const LandingPage = () => {
  return (
    <Layout className="gap-20">
      <Navbar />
      <div className="flex-1 space-y-16">
        <HeroSection />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          <MonthlySchedule />
          <ClubInfo />
          <SuccessStories />
        </main>
      </div>
      <Footer />
    </Layout>
  )
}

export default LandingPage
