'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="bg-gray-100 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-4xl lg:text-5xl text-[#112C41] leading-relaxed mb-12 max-w-5xl"
        >
          Headquartered in Chennai with branches across India, our specialize{' '}
          <span className="font-semibold italic">60+ engineers</span> in
          turnkey robotic systems, design simulation, and advanced
          manufacturing solutions.
        </motion.h2>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full h-[300px] md:h-[350px] lg:h-[400px]"
          >
            <Image
              src="/about.png"
              alt="Tespa Robotics facility"
              fill
              className="object-cover rounded-sm"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-[#112C41]"
          >
            <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed">
              From automotive to consumer goods, Tespa robotics has been
              driving industrial automation for{' '}
              <span className="font-semibold italic">50+ years</span>.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection