import HeroSection from '@/components/about/HeroSection'
import CompanyProfileSection from '@/components/about/CompanyProfileSection'
import StatsSection from '@/components/about/StatsSection'
import ProductsServicesSection from '@/components/about/ProductsServicesSection'
import StrengthsSection from '@/components/about/StrengthsSection'
import CaseStudiesSection from '@/components/home/CaseStudiesSection'

const page = () => {
  return (
    <>
      <HeroSection />
      <CompanyProfileSection />
      <StatsSection />
      <ProductsServicesSection />
      <StrengthsSection />
      <CaseStudiesSection/>
    </>
  )
}

export default page
