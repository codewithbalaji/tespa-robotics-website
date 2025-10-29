import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const CaseStudiesSection = () => {
    return (
        <section className="bg-gray-100 py-16 md:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                    {/* Left Content */}
                    <div className="lg:max-w-2xl">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#112C41] leading-relaxed mb-8">
                            Automation That{' '}
                            <span className="italic font-serif">Transforms</span> Manufacturing
                        </h2>

                        <p className="text-[#112C41] text-lg md:text-xl leading-relaxed">
                            Discover how Tespa's turnkey robotic solutions have helped
                            industries improve productivity, quality, and efficiency
                        </p>
                    </div>

                    {/* Right Button */}
                    <div className="lg:flex-shrink-0">
                        <Link
                            href="/case-studies"
                            className="inline-flex items-center gap-3 bg-[#112C41] text-white px-8 py-4 rounded-full hover:bg-[#1a3f5c] transition-colors text-base font-medium"
                        >
                            CASE STUDIES
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CaseStudiesSection