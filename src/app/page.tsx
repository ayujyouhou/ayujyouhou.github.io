import { HeroSection } from "@/components/hero-section"
import { SocialLinksSection } from "@/components/social-links-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { HobbiesSection } from "@/components/hobbies-section"
import { ServicesSection } from "@/components/services-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <SocialLinksSection />
      <AboutSection />
      <ProjectsSection />
      <HobbiesSection />
      <ServicesSection />
      <ContactSection />
    </>
  )
}
