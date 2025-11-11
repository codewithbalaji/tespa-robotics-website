'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const ClientsSection = () => {
    // 40 client logos - 10 per row (using actual jpg files)
    const allClients = Array.from({ length: 40 }, (_, i) => `/clients/client-${i}.jpg`)

    const row1 = allClients.slice(0, 10)
    const row2 = allClients.slice(10, 20)
    const row3 = allClients.slice(20, 30)
    const row4 = allClients.slice(30, 40)
    const row5 = allClients.slice(0, 10) // Reuse first 10 for 5th row

    const LogoRow = ({
        logos,
        reverse = false,
    }: {
        logos: string[]
        reverse?: boolean
    }) => {
        // Duplicate logos multiple times for seamless infinite scroll
        const duplicatedLogos = [...logos, ...logos, ...logos, ...logos]

        return (
            <div className="mb-4">
                <div className="relative overflow-hidden">
                    <div
                        className="flex"
                        style={{
                            animation: reverse
                                ? 'marquee-reverse 30s linear infinite'
                                : 'marquee 30s linear infinite',
                        }}
                    >
                        {duplicatedLogos.map((logo, index) => (
                            <div
                                key={index}
                                className={`flex-shrink-0 w-40 h-24 flex items-center justify-center border-r border-[#112C41] ${index % 2 === 0 ? 'bg-gray-200' : 'bg-white'
                                    }`}
                            >
                                <div className="relative w-28 h-16">
                                    <Image
                                        src={logo}
                                        alt={`Client ${(index % logos.length) + 1}`}
                                        fill
                                        className="object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>

            <section className="bg-[#112C41] pt-16 md:pt-20 pb-12 md:pb-16 overflow-hidden">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 md:mb-20"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl text-white">
                        TRUSTED BY <span className="italic font-serif">Industry Leaders</span>
                    </h2>
                </motion.div>

                {/* Logo Rows */}
                <div>
                    <LogoRow logos={row1} />
                    <LogoRow logos={row2} reverse />
                    <LogoRow logos={row3} />
                    <LogoRow logos={row4} reverse />
                    <LogoRow logos={row5} />
                </div>
            </section>
        </>
    )
}

export default ClientsSection