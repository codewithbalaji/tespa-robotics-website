'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: '/slide1.jpg',
      title: 'Contributing the world of manufacturer with latest high speed robots',
    },
     {
      image: '/slide2.jpg',
      title: 'Tespa partnering with pioneers in robot technology',
    },
     {
      image: '/slide3.jpg',
      title: 'Exclusive welding technologies with excellent welds',
    },
     {
      image: '/slide4.jpg',
      title: 'Robot factory automation concepts, designing and simulations',
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative w-full">
      {/* Carousel */}
      <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden bg-black">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              height={700}
              width={1400}
              className="w-full h-full"
              
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/30" />
            
            {/* Title Overlay */}
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <AnimatePresence mode="wait">
                {index === currentSlide && (
                  <motion.h1
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="text-white text-4xl md:text-5xl lg:text-7xl font-semibold text-center max-w-5xl leading-tight"
                  >
                    {slide.title}
                  </motion.h1>
                )}
              </AnimatePresence>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight size={32} />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Bottom Banner */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="bg-[#112C41] text-white py-8 md:py-10 lg:py-12"
      >
        <div className="w-full px-6 md:px-12 lg:px-16 text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-wide leading-tight">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-gray-400 inline-block"
            >
              ENGINEERING INNOVATION
            </motion.span>{' '}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="italic font-serif text-gray-300 inline-block"
            >
              since
            </motion.span>{' '}
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="font-bold text-white inline-block"
            >
              1974
            </motion.span>
          </h2>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection