import Layout from '@/components/Layout'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { AboutSection, EventsSection, HeroSection, InchargeSection, PresidentSection, ProjectsSection, SuccessSection, WingsSection } from '@/components/landing-page'

export default function Home() {
  return (
    <Layout className="gap-20">
      <Navbar />
      <div className="flex-1 space-y-16">
        <HeroSection />
        <main className="mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          <AboutSection />
          <EventsSection />
          <WingsSection />
          <ProjectsSection />
          <InchargeSection />
          <PresidentSection />
          <SuccessSection />
        </main>
      </div>
      <Footer />
    </Layout>
  )
}
