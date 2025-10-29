import Image from 'next/image'
import { Construction } from 'lucide-react'

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-6">
        <Construction size={80} className="mx-auto text-[#112C41] mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold text-[#112C41] mb-4">
          Services
        </h1>
        <p className="text-xl text-gray-600">
          This page is under construction
        </p>
      </div>
    </div>
  )
}

export default page
