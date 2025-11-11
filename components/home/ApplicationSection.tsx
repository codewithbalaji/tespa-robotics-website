'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useState } from 'react'

const ApplicationCard = ({ app, index }: { app: any; index: number }) => {
    const [isHovered, setIsHovered] = useState(false)
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseXSpring = useSpring(x)
    const mouseYSpring = useSpring(y)

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg'])
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg'])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const width = rect.width
        const height = rect.height
        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top
        const xPct = mouseX / width - 0.5
        const yPct = mouseY / height - 0.5
        x.set(xPct)
        y.set(yPct)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
        setIsHovered(false)
    }

    return (
        <Link
            href={app.href}
            className="shrink-0 w-[320px] md:w-[380px] block"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                onMouseMove={handleMouseMove}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: 'preserve-3d',
                }}
                animate={{
                    z: isHovered ? 50 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="relative"
            >
                <motion.div
                    style={{
                        transform: 'translateZ(75px)',
                        transformStyle: 'preserve-3d',
                    }}
                    className="relative h-[200px] md:h-[240px] overflow-hidden bg-gray-200 rounded-lg shadow-xl"
                >
                    <Image
                        src={app.image}
                        alt={app.title}
                        fill
                        className="object-cover"
                    />
                    <motion.div
                        className="absolute inset-0 bg-linear-to-t from-[#112C41]/60 to-transparent"
                        animate={{
                            opacity: isHovered ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.div>

                <motion.div
                    style={{
                        transform: 'translateZ(50px)',
                    }}
                    className="flex items-center justify-between mt-4 px-2"
                >
                    <h3 className="text-[#112C41] font-medium text-sm md:text-base tracking-wide">
                        {app.title}
                    </h3>
                    <motion.div
                        animate={{
                            x: isHovered ? 5 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        <ArrowRight size={20} className="text-[#112C41]" />
                    </motion.div>
                </motion.div>
            </motion.div>
        </Link>
    )
}

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
            title: 'GRINDING & POLISHING',
            image: '/app-grinding.jpg',
            href: '/applications/grinding',
        },
        {
            title: 'LOADING & UNLOADING',
            image: '/app-loading.jpg',
            href: '/applications/loading',
        },
    ]

    const duplicatedApplications = [...applications, ...applications]

    return (
        <section className="bg-white py-16 md:py-20 lg:py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                {/* Header */}
                <div className="flex justify-between items-start mb-12">
                    <div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#112C41] font-light">
                            Application
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
            <div className="relative" style={{ perspective: '1000px' }}>
                <div className="flex gap-6 animate-scroll">
                    {duplicatedApplications.map((app, index) => (
                        <ApplicationCard key={`${app.title}-${index}`} app={app} index={index} />
                    ))}
                </div>

                {/* Gradient Overlays */}
                <div className="absolute top-0 left-0 w-32 h-full bg-linear-to-r from-white to-transparent pointer-events-none z-10" />
                <div className="absolute top-0 right-0 w-32 h-full bg-linear-to-l from-white to-transparent pointer-events-none z-10" />
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