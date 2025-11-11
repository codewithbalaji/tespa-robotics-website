'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check } from 'lucide-react'
import Image from 'next/image'

const StrengthsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const strengths = [
    '3 Manufacturing and System Assembly Factories in Chennai',
    'Single Window Partner – Turnkey Solution, Robot AMC, Spare Parts, OLP',
    'Strong Design Team for Turnkey Solution Systems Design with Well Equipped Design Centre',
    'Expert Control System Engineering Team',
    'Highly Capable Application Engineering Team & Welding Experts',
    'Team of Trained Robotics Engineers',
    'Branches at Strategic Locations Across the Country - Pune, Bangalore, Gurgaon',
  ]

  return (
    <section ref={ref} className="relative bg-white py-12 md:py-16 lg:py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/strengths.jpg"
          alt="Our Strengths"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#112C41]/95" />
      </div>

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold mb-6">
            Our Strengths
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-4" />
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            What sets us apart in the industrial automation landscape
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="max-w-5xl mx-auto">
          {strengths.map((strength, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="relative mb-6 last:mb-0"
            >
              <div className="flex items-start gap-6">
                {/* Number Badge */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative flex-shrink-0"
                >
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center font-bold text-[#112C41] text-xl shadow-lg">
                    {index + 1}
                  </div>
                  {/* Animated Ring */}
                  <motion.div
                    initial={{ scale: 1, opacity: 0.5 }}
                    animate={{ scale: 1.4, opacity: 0 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                    className="absolute inset-0 rounded-full border-2 border-white"
                  />
                  
                  {/* Connecting Line */}
                  {index < strengths.length - 1 && (
                    <div className="absolute top-14 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-white/30" />
                  )}
                </motion.div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-xl hover:bg-white/15 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-white text-base md:text-lg leading-relaxed flex-1">
                      {strength}
                    </p>
                    
                    {/* Check Icon */}
                    <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <Check size={16} className="text-white" strokeWidth={3} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StrengthsSection
