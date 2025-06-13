import React from 'react'

const SkillBox = ({item, key}) => {
  return (
    <div key={key} className = " flex gap-2 md:gap-4 mb-4 md:mb-6">
        <div className = "font-semibold md:text-xl min-w-24 md:min-w-32 bg-gradient-to-r from-cyan-300 to-cyan-800 text-transparent bg-clip-text">{item.name}</div>
        <div className="flex flex-wrap">
        {item.content.map((item2, index) => (
            <div key={index} className = "rounded-full min-w-12 md:min-w-16 text-center py-1 px-2 md:py-1 md:px-3 m-1 bg-gray-700 text-gray-300 ">{item2}</div>
        ))}
        </div>
    </div>
  )
}

export default SkillBox