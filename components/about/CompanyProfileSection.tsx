'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Building2, Factory, Globe } from 'lucide-react'

const CompanyProfileSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative bg-white py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Zigzag Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#112C41] font-semibold mb-6">
              Company Profile
            </h2>
            <div className="w-20 h-1 bg-[#112C41] mb-8" />
            
            <p className="text-[#112C41] text-lg leading-relaxed mb-6">
              Tespa is a group of professionally managed companies founded in the year{' '}
              <span className="font-semibold text-xl">1974</span>. Tespa Robotics (Chennai) offers
              turnkey robot-based automation systems for manufacturing industries to improve
              the process outputs.
            </p>
            
            <p className="text-[#112C41] text-lg leading-relaxed">
              The turnkey solutions are based on robotic and automation applications
              introducing contemporary world-class standards in robotic cells & line
              automation in a wide spectrum of fields.
            </p>

            {/* Glass Cards */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gradient-to-br from-[#112C41]/10 to-[#112C41]/5 backdrop-blur-sm p-4 rounded-lg border border-[#112C41]/10"
              >
                <Building2 className="text-[#112C41] mb-2" size={24} />
                <p className="text-[#112C41] text-sm font-semibold">3 Facilities</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-br from-[#112C41]/10 to-[#112C41]/5 backdrop-blur-sm p-4 rounded-lg border border-[#112C41]/10"
              >
                <Factory className="text-[#112C41] mb-2" size={24} />
                <p className="text-[#112C41] text-sm font-semibold">60+ Engineers</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-gradient-to-br from-[#112C41]/10 to-[#112C41]/5 backdrop-blur-sm p-4 rounded-lg border border-[#112C41]/10"
              >
                <Globe className="text-[#112C41] mb-2" size={24} />
                <p className="text-[#112C41] text-sm font-semibold">Pan India</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/about.png"
                alt="Tespa Robotics Facility"
                fill
                className="object-cover"
              />
              {/* Glassmorphism Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#112C41]/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-white/10 backdrop-blur-md border-t border-white/20">
                <p className="text-white text-lg font-semibold">State-of-the-art Manufacturing</p>
                <p className="text-white/90 text-sm">Chennai, India</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Industries Served - Reverse Zigzag */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/PRODUCTS&SERVICES.jpg"
                alt="Industries We Serve"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#112C41]/40 to-transparent" />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl text-[#112C41] font-semibold mb-6">
              Industries We Serve
            </h3>
            <div className="w-16 h-1 bg-[#112C41] mb-6" />
            
            <p className="text-[#112C41] text-lg leading-relaxed mb-6">
              Tespa Robotics Engineering Team serves a range of industries for all their 
              robot-based automation needs with three manufacturing facilities in Chennai.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                'Automotive',
                'Power & Energy',
                'EMS',
                'Consumer Goods',
                'Food & Beverages',
                'Pharmaceutical',
              ].map((industry, index) => (
                <motion.div
                  key={industry}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-lg border border-gray-200 hover:border-[#112C41]/30 hover:shadow-md transition-all"
                >
                  <p className="text-[#112C41] font-semibold">{industry}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CompanyProfileSection
