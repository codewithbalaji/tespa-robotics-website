'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const ApplicationSection = () => {
    const applications = [
        {
            title: 'DEBURRING',
            image: '/app-deburring.jpg',
            href: '/applications/deburring',
        },
        {
            title: 'FLAME/PLASMA CUTTING',
            image: '/app-cutting.jpg',
            href: '/applications/cutting',
        },
        {
            title: 'MIG/TIG WELDING',
            image: '/app-welding.jpg',
            href: '/applications/welding',
        },
        {
            title: 'MATERIAL HANDLING',
            image: '/app-handling.jpg',
            href: '/applications/handling',
        },
        {
            title: 'ASSEMBLY',
            image: '/app-assembly.jpg',
            href: '/applications/assembly',
        },
    ]

    // Duplicate the array for seamless infinite scroll
    const duplicatedApplications = [...applications, ...applications]

    return (
        <section className="bg-white py-16 md:py-20 lg:py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                {/* Header */}
                <div className="flex justify-between items-start mb-12">
                    <div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#112C41] font-light">
                            APPLICATION
                        </h2>
                        <p className="text-2xl md:text-3xl text-[#112C41] mt-2">
                            designed to <span className="italic font-serif">redefine</span>
                        </p>
                    </div>

                    <Link
                        href="/applications"
                        className="bg-[#112C41] text-white px-6 py-3 rounded hover:bg-[#1a3f5c] transition-colors text-sm font-medium"
                    >
                        View More
                    </Link>
                </div>
            </div>

            {/* Scrolling Cards Container */}
            <div className="relative">
                <div className="flex gap-6 animate-scroll">
                    {duplicatedApplications.map((app, index) => (
                        <Link
                            key={`${app.title}-${index}`}
                            href={app.href}
                            className="flex-shrink-0 w-[320px] md:w-[380px] group"
                        >
                            <div className="relative h-[200px] md:h-[240px] overflow-hidden bg-gray-200">
                                <Image
                                    src={app.image}
                                    alt={app.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="flex items-center justify-between mt-4 px-2">
                                <h3 className="text-[#112C41] font-medium text-sm md:text-base tracking-wide">
                                    {app.title}
                                </h3>
                                <ArrowRight
                                    size={20}
                                    className="text-[#112C41] transition-transform group-hover:translate-x-1"
                                />
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Gradient Overlays */}
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
            </div>

            <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
        </section>
    )
}

export default ApplicationSection