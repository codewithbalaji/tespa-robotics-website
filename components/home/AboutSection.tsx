
import Image from 'next/image'

const AboutSection = () => {
  return (
    <section className="bg-gray-100 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* About Label */}
        <div className="mb-8">
          <span className="text-gray-500 text-sm md:text-base">• About</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#112C41] leading-relaxed mb-12 max-w-5xl">
          Headquartered in Chennai with branches across India, our specialize{' '}
          <span className="font-semibold italic">60+ engineers</span> in
          turnkey robotic systems, design simulation, and advanced
          manufacturing solutions.
        </h2>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="relative w-full h-[300px] md:h-[350px] lg:h-[400px]">
            <Image
              src="/about.png"
              alt="Tespa Robotics facility"
              fill
              className="object-cover rounded-sm"
            />
          </div>

          {/* Text Content */}
          <div className="text-[#112C41]">
            <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed">
              From automotive to consumer goods, Tespa robotics has been
              driving industrial automation for{' '}
              <span className="font-semibold italic">50+ years</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection