import HeroSection from "@/components/home/HeroSection"
import AboutSection from "@/components/home/AboutSection"
import CapabilitiesSection from "@/components/home/CapabilitiesSection"
import ApplicationSection from "@/components/home/ApplicationSection"
import ServicesSection from "@/components/home/ServicesSection"
import ClientsSection from "@/components/home/ClientsSection"
import CaseStudiesSection from "@/components/home/CaseStudiesSection"

const page = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CapabilitiesSection />
      <ApplicationSection />
      <ServicesSection />
      <ClientsSection />
      <CaseStudiesSection/>
    </>
  )
}

export default page