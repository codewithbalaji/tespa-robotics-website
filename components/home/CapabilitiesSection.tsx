'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const CapabilitiesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const imageVariants = [
    { delay: 0.2, x: 50, y: -30 },
    { delay: 0.3, x: -50, y: 30 },
    { delay: 0.4, x: -30, y: 50 },
    { delay: 0.5, x: 30, y: -20 },
    { delay: 0.6, x: 0, y: 40 },
  ]

  return (
    <section ref={ref} className="bg-gray-100 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl text-[#112C41] font-light mb-12 leading-tight"
            >
              Designed. Simulated. Perfected.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[#112C41] text-base md:text-lg leading-relaxed max-w-md"
            >
              Our state-of-the-art design centers use advanced simulation
              software to model workflows, optimize layouts, and validate
              processes before implementation — ensuring cost-effective,
              reliable outcomes.
            </motion.p>
          </div>

          {/* Right Image Collage */}
          <div className="relative h-[500px] md:h-[600px] lg:h-[650px]">
            {/* Top Right - White Robot */}
            <motion.div
              initial={{ opacity: 0, x: imageVariants[0].x, y: imageVariants[0].y }}
              animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.8, delay: imageVariants[0].delay }}
              className="absolute top-0 right-[10%] w-[45%] h-[35%] z-30"
            >
              <Image
                src="/capabilities-1.png"
                alt="White robotic arm"
                fill
                className="object-cover shadow-lg"
              />
            </motion.div>

            {/* Center - Yellow Robot Arm */}
            <motion.div
              initial={{ opacity: 0, x: imageVariants[1].x, y: imageVariants[1].y }}
              animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.8, delay: imageVariants[1].delay }}
              className="absolute top-[20%] left-[5%] w-[70%] h-[42%] z-20"
            >
              <Image
                src="/capabilities-2.png"
                alt="Yellow robotic arm in action"
                fill
                className="object-cover shadow-lg"
              />
            </motion.div>

            {/* Bottom Left - Precision Tool */}
            <motion.div
              initial={{ opacity: 0, x: imageVariants[2].x, y: imageVariants[2].y }}
              animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.8, delay: imageVariants[2].delay }}
              className="absolute bottom-[25%] left-[5%] w-[35%] h-[30%] z-30"
            >
              <Image
                src="/capabilities-3.png"
                alt="Precision manufacturing tool"
                fill
                className="object-cover shadow-lg"
              />
            </motion.div>

            {/* Bottom Right - Blue Robot */}
            <motion.div
              initial={{ opacity: 0, x: imageVariants[3].x, y: imageVariants[3].y }}
              animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.8, delay: imageVariants[3].delay }}
              className="absolute bottom-0 right-0 w-[48%] h-[40%] z-15"
            >
              <Image
                src="/capabilities-4.png"
                alt="Blue robotic system"
                fill
                className="object-cover shadow-lg"
              />
            </motion.div>

            {/* Small Bottom Center - Detail Shot */}
            <motion.div
              initial={{ opacity: 0, x: imageVariants[4].x, y: imageVariants[4].y }}
              animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.8, delay: imageVariants[4].delay }}
              className="absolute bottom-[8%] left-[35%] w-[28%] h-[22%] z-30"
            >
              <Image
                src="/capabilities-5.png"
                alt="Manufacturing detail"
                fill
                className="object-cover shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CapabilitiesSection