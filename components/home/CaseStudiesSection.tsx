'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const CaseStudiesSection = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section ref={ref} className="bg-gray-100 py-16 md:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                    {/* Left Content */}
                    <div className="lg:max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8 }}
                            className="text-3xl md:text-4xl lg:text-5xl text-[#112C41] leading-relaxed mb-8"
                        >
                            Automation That{' '}
                            <span className="italic font-serif">Transforms</span> Manufacturing
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-[#112C41] text-lg md:text-xl leading-relaxed"
                        >
                            Discover how Tespa's turnkey robotic solutions have helped
                            industries improve productivity, quality, and efficiency
                        </motion.p>
                    </div>

                    {/* Right Button */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="lg:flex-shrink-0"
                    >
                        <Link
                            href="/case-studies"
                            className="inline-flex items-center gap-3 bg-[#112C41] text-white px-8 py-4 rounded-full hover:bg-[#1a3f5c] transition-colors text-base font-medium group"
                        >
                            CASE STUDIES
                            <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                <ArrowRight size={20} />
                            </motion.div>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default CaseStudiesSection