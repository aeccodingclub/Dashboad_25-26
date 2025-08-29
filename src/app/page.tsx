import Layout from '@/components/Layout'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { AboutSection, EventsSection, HeroSection, InchargeSection, PresidentSection, ProjectsSection, SuccessSection, WingsSection } from '@/components/landing-page'

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <div>
        <HeroSection />
        <main>
          <AboutSection />
          <WingsSection />
          <ProjectsSection />
          <EventsSection />
          <InchargeSection />
          <PresidentSection />
          <SuccessSection />
        </main>
      </div>
      <Footer />
    </Layout>
  )
}
