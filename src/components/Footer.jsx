import React from 'react'

const Footer = () => {
  return (
    <div className="p-8 md:p-10">
      <div className="border-t-1 border-gray-400 flex flex-col items-center gap-3 pt-6 md:pt-8 lg:pt-12">
        <div className="text-xl md:text-2xl text-gray-300">No shortcuts. Just vision and work.</div>
        <div className="text-gray-300 border-t-1 border-gray-600 w-4/6 mt-6 md:mt-10 text-center pt-4 md:pt-6">
          Build with React.js, Tailwind CSS and ❤️.
        </div>
      </div>
    </div>
  )
}

export default Footer