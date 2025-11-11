'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const ServicesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const services = [
    {
      icon: '/icon-training.png',
      title: 'Training Centers',
      description:
        'Equip your team with real-world robotics training at our Chennai & Bangalore centers.',
    },
    {
      icon: '/icon-parts.png',
      title: 'Spare Parts & AMC',
      description:
        'Reliable parts and AMC support to keep your systems running 24/7.',
    },
    {
      icon: '/icon-service.png',
      title: 'On-site Service',
      description:
        'Fast programming, commissioning, and service — right at your facility',
    },
  ]

  return (
    <section ref={ref} className="bg-gray-100 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl leading-relaxed flex flex-wrap items-center justify-center gap-3 md:gap-4">
            <span className="text-gray-400 font-light">More Than</span>
            <span className="text-[#112C41] font-semibold">Machines</span>
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative w-32 h-16 md:w-40 md:h-20 rounded-full overflow-hidden inline-block"
            >
              <Image
                src="/hand.png"
                alt="Partnership"
                fill
                className="object-cover bg-[#112C41]"
              />
            </motion.div>
            <span className="text-gray-400 font-light">We provide you a</span>
            <span className="text-[#112C41] font-semibold">Complete Support</span>
          </h2>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white border border-gray-200 p-8 text-center hover:shadow-lg transition-shadow"
            >
              {/* Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
                className="flex justify-center mb-6"
              >
                <div className="relative w-24 h-24">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>

              {/* Title */}
              <h3 className="text-[#112C41] text-xl md:text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[#112C41] text-base leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection