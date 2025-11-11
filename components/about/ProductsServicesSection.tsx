'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Cog,
  Wrench,
  Package,
  Zap,
  Code,
  GraduationCap,
  Lightbulb,
} from 'lucide-react'

const ProductsServicesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const services = [
    {
      icon: Cog,
      title: 'Robotic System Solution',
      number: '01',
    },
    {
      icon: Wrench,
      title: 'Integration Robot Service Support',
      number: '02',
    },
    {
      icon: Package,
      title: 'New Robot Product Solution',
      number: '03',
    },
    {
      icon: Zap,
      title: 'Advanced Welding Machines',
      number: '04',
    },
    {
      icon: Code,
      title: 'Offline / Simulation Programming Support',
      number: '05',
    },
    {
      icon: GraduationCap,
      title: 'Robot Training',
      number: '06',
    },
    {
      icon: Lightbulb,
      title: 'Design and Consultancy',
      number: '07',
    },
  ]

  return (
    <section ref={ref} className="relative bg-gray-50 py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #112C41 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#112C41] font-semibold mb-6">
            Products & Services
          </h2>
          <div className="w-20 h-1 bg-[#112C41] mx-auto mb-6" />
          <p className="text-[#112C41] text-lg md:text-xl max-w-3xl mx-auto">
            Comprehensive Solutions Offered by Tespa
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  transition: { duration: 0.3 } 
                }}
                className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 p-8 rounded-xl hover:shadow-2xl transition-all overflow-hidden group"
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#112C41]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Number Background */}
                <div className="absolute top-4 right-4 text-6xl font-bold text-gray-100 group-hover:text-[#112C41]/10 transition-colors duration-300">
                  {service.number}
                </div>

                {/* Icon with Glassmorphism */}
                <div className="relative z-10 mb-6">
                  <div className="inline-block p-4 bg-gradient-to-br from-[#112C41]/10 to-[#112C41]/5 rounded-lg group-hover:from-[#112C41]/20 group-hover:to-[#112C41]/10 transition-all duration-300">
                    <Icon size={40} className="text-[#112C41]" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-[#112C41] text-xl font-semibold leading-tight group-hover:text-[#112C41] transition-colors">
                  {service.title}
                </h3>

                {/* Decorative Line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#112C41] to-transparent"
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProductsServicesSection
