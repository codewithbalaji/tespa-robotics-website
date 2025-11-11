'use client'

import { motion, animate } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const StatsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    {
      number: 1974,
      suffix: '',
      label: 'Founded',
    },
    {
      number: 50,
      suffix: '+',
      label: 'Years of Experience',
    },
    {
      number: 60,
      suffix: '+',
      label: 'Engineers',
    },
    {
      number: 3,
      suffix: '',
      label: 'Manufacturing Facilities',
    },
  ]

  const Counter = ({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (inView) {
        const controls = animate(0, value, {
          duration: 2,
          ease: 'easeOut',
          onUpdate: (latest) => setCount(Math.round(latest)),
        })
        return () => controls.stop()
      }
    }, [inView, value])

    return (
      <span>
        {count}
        {suffix}
      </span>
    )
  }

  return (
    <section ref={ref} className="relative bg-[#112C41] py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Animated Background Gradient */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          backgroundSize: '100% 100%',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center relative"
            >
              {/* Glassmorphism Card */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 h-full flex flex-col items-center justify-center hover:bg-white/15 transition-all duration-300 min-h-[200px]">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className="text-5xl md:text-6xl font-bold text-white mb-4"
                >
                  {isInView ? <Counter value={stat.number} suffix={stat.suffix} inView={isInView} /> : '0'}
                </motion.div>
                <div className="w-12 h-1 bg-white/50 mx-auto mb-4" />
                <p className="text-white/90 text-base md:text-lg font-medium leading-tight">
                  {stat.label}
                </p>
              </div>

              {/* Decorative Corner */}
              <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-white/30 rounded-tr-lg" />
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-white/30 rounded-bl-lg" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
