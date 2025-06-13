// import React from 'react'

// const Footer = () => {
//   return (
//     <div className="p-8 md:p-10">
//       <div className="border-t-1 border-gray-400 flex flex-col items-center gap-3 pt-6 md:pt-8 lg:pt-12">
//         <div className="text-xl md:text-2xl text-gray-300">No shortcuts. Just vision and work.</div>
//         <div className="text-gray-300 border-t-1 border-gray-600 w-4/6 mt-6 md:mt-10 text-center pt-4 md:pt-6">
//           Build with React.js, Tailwind CSS and ❤️.
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Footer


import React from 'react'

const Footer = () => {
  return (
    <div className="bg-gradient-to-tr via-gray-900 from-slate-900 to-black p-8 md:p-10 pt-0 md:p1-0">
      <div className="border-t border-slate-600/50 flex flex-col items-center gap-4 pt-8 md:pt-10 lg:pt-14">
        <div className="text-xl md:text-2xl text-gray-200 font-medium tracking-wide">
          No shortcuts. Just vision and work.
        </div>
        <div className="text-gray-400 border-t border-slate-700/40 w-4/6 mt-8 md:mt-12 text-center pt-6 md:pt-8 leading-relaxed">
          Built with React.js, Tailwind CSS and ❤️.
        </div>
      </div>
    </div>
  )
}

export default Footer