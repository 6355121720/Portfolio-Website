// import React from 'react'

// const SkillBox = ({item, key}) => {
//   return (
//     <div key={key} className = " flex gap-2 md:gap-4 mb-4 md:mb-6">
//         <div className = "font-semibold md:text-xl min-w-24 md:min-w-32 bg-gradient-to-r from-cyan-300 to-cyan-800 text-transparent bg-clip-text">{item.name}</div>
//         <div className="flex flex-wrap">
//         {item.content.map((item2, index) => (
//             <div key={index} className = "rounded-full min-w-12 md:min-w-16 text-center py-1 px-2 md:py-1 md:px-3 m-1 bg-gray-700 text-gray-300 ">{item2}</div>
//         ))}
//         </div>
//     </div>
//   )
// }

// export default SkillBox



import React from 'react'

const SkillBox = ({item, key}) => {
  return (
    <div key={key} className="flex gap-3 md:gap-6 mb-6 md:mb-8 p-4 md:p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-slate-600/70 transition-all duration-300 hover:bg-slate-800/50">
        <div className="font-bold md:text-xl min-w-28 md:min-w-36 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 text-transparent bg-clip-text flex items-center">
          {item.name}
        </div>
        <div className="flex flex-wrap gap-2 md:gap-3">
        {item.content.map((item2, index) => (
            <div 
              key={index} 
              className="rounded-full min-w-12 md:min-w-16 text-center py-2 px-3 md:py-2 md:px-4 bg-slate-700/80 hover:bg-slate-600/80 text-gray-200 hover:text-white border border-slate-600/50 hover:border-slate-500/70 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/10 text-sm md:text-base"
            >
              {item2}
            </div>
        ))}
        </div>
    </div>
  )
}

export default SkillBox