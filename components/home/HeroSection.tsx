'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: '/hero.png',
      title: 'Redefining Robotics For The Factories Of Tomorrow',
    },
     {
      image: '/hero.png',
      title: 'Robot factory automation concepts, designing and simulations  ',
    },
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
              <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-light text-center max-w-5xl leading-tight">
                {slide.title}
              </h1>
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
      <div className="bg-[#112C41] text-white py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide">
            ENGINEERING INNOVATION{' '}
            <span className="italic font-serif">since</span>{' '}
            <span className="font-semibold">1974</span>
          </h2>
        </div>
      </div>
    </section>
  )
}

export default HeroSection