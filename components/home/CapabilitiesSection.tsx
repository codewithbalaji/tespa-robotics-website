import Image from 'next/image'

const CapabilitiesSection = () => {
  return (
    <section className="bg-gray-100 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#112C41] font-light mb-12 leading-tight">
              Designed. Simulated. Perfected.
            </h2>

            <p className="text-[#112C41] text-base md:text-lg leading-relaxed max-w-md">
              Our state-of-the-art design centers use advanced simulation
              software to model workflows, optimize layouts, and validate
              processes before implementation — ensuring cost-effective,
              reliable outcomes.
            </p>
          </div>

          {/* Right Image Collage */}
          <div className="relative h-[500px] md:h-[600px] lg:h-[650px]">
            {/* Top Right - White Robot */}
            <div className="absolute top-0 right-0 w-[45%] h-[35%] z-30">
              <Image
                src="/capabilities-1.png"
                alt="White robotic arm"
                fill
                className="object-cover shadow-lg"
              />
            </div>

            {/* Center - Yellow Robot Arm */}
            <div className="absolute top-[20%] right-[5%] w-[70%] h-[40%] z-20">
              <Image
                src="/capabilities-2.png"
                alt="Yellow robotic arm in action"
                fill
                className="object-cover shadow-lg"
              />
            </div>

            {/* Bottom Left - Precision Tool */}
            <div className="absolute bottom-[25%] left-0 w-[35%] h-[30%] z-30">
              <Image
                src="/capabilities-3.png"
                alt="Precision manufacturing tool"
                fill
                className="object-cover shadow-lg"
              />
            </div>

            {/* Bottom Right - Blue Robot */}
            <div className="absolute bottom-0 right-[8%] w-[40%] h-[35%] z-10">
              <Image
                src="/capabilities-4.png"
                alt="Blue robotic system"
                fill
                className="object-cover shadow-lg"
              />
            </div>

            {/* Small Bottom Center - Detail Shot */}
            <div className="absolute bottom-[5%] right-[25%] w-[25%] h-[20%] z-20">
              <Image
                src="/capabilities-5.png"
                alt="Manufacturing detail"
                fill
                className="object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CapabilitiesSection