// import { GithubIcon } from "lucide-react"
// import { ExternalLinkIcon } from "lucide-react"

// const ProjectBox = ({key, item}) => {
//   return (
//     <div key={key} className = "m-5 md:m-9 border border-gray-400 rounded-2xl overflow-hidden max-w-68 md:max-w-80 lg:max-w-96">
//         <div className="relative">
//             <img src={item.image} className = "w-68 md:w-80 lg:w-96 "/>
//             <div className = " p-1 md:p-2 pt-2 md:pt-4 absolute left-0 bottom-0 flex gap-3 md:gap-5 bg-gradient-to-t from-gray-800 to-transparent">
//                 <a href = {item.github} className = "h-4 md:h-8">
//                     {<GithubIcon className = "w-5 md:w-7 lg:w-9" />}
//                 </a>
//                 {(item.livelink) ? (
//                     <a href = {item.livelink} className = "h-4 md:h-8">
//                         {<ExternalLinkIcon className = "w-5 md:w-7 lg:w-9" />}
//                     </a>
//                 ) : (
//                     <div className = "h-4 md:h-8 opacity-50">
//                         {<ExternalLinkIcon className = "w-5 md:w-7 lg:w-9" />}
//                     </div>
//                 )}
//             </div>
//         </div> 
//         <div className="p-4 md:p-5 lg:p-6 flex flex-col gap-3 md:gap-5">
//             <div className="text-xl md:text-2xl">
//                 {item.name}
//             </div>
//             <div className="text-gray-400 text-sm md:text-[1rem]">
//                 {item.desc}
//             </div>
//             <div className = "flex flex-wrap">
//                 {item.tags.map((item, index) => (
//                     <div key={index} className="text-sm md:text-[1rem] py-1 px-1 md:px-2 m-1 md:m-2 bg-gray-800 text-gray-300 rounded-full">{item}</div>
//                 ))}
//             </div>
//         </div>
//     </div>
//   )
// }

// export default ProjectBox



import { GithubIcon } from "lucide-react"
import { ExternalLinkIcon } from "lucide-react"

const ProjectBox = ({key, item}) => {
  return (
    <div key={key} className="m-5 md:m-9 border border-slate-700/50 rounded-2xl overflow-hidden max-w-68 md:max-w-80 lg:max-w-96 bg-slate-800/30 backdrop-blur-sm hover:bg-slate-800/50 hover:border-slate-600/70 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-slate-900/50">
        <div className="relative group">
            <img src={item.image} className="w-68 md:w-80 lg:w-96 transition-transform duration-300 group-hover:scale-110"/>
            <div className="p-2 md:p-3 pt-3 md:pt-5 absolute left-0 bottom-0 flex gap-4 md:gap-6 bg-gradient-to-t from-transparent via-gray-800 to-transparent">
                <a 
                    href={item.github} 
                    className="h-5 md:h-8 text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <GithubIcon className="w-6 md:w-8 lg:w-10 drop-shadow-lg" />
                </a>
                {(item.livelink) ? (
                    <a 
                        href={item.livelink} 
                        className="h-5 md:h-8 text-white hover:text-white transition-all duration-300 transform hover:scale-110"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <ExternalLinkIcon className="w-6 md:w-8 lg:w-10 drop-shadow-lg" />
                    </a>
                ) : (
                    <div className="h-5 md:h-8 opacity-50">
                        <ExternalLinkIcon className="w-6 md:w-8 lg:w-10 text-gray-300" />
                    </div>
                )}
            </div>
        </div> 
        <div className="p-5 md:p-6 lg:p-7 flex flex-col gap-4 md:gap-6">
            <div className="text-xl md:text-2xl font-semibold text-gray-100">
                {item.name}
            </div>
            <div className="text-gray-300 text-sm md:text-base leading-relaxed">
                {item.desc}
            </div>
            <div className="flex flex-wrap gap-2 md:gap-3">
                {item.tags.map((tag, index) => (
                    <div 
                        key={index} 
                        className="text-sm md:text-base py-2 px-3 md:px-4 bg-slate-700/80 hover:bg-slate-600/80 text-gray-200 hover:text-white rounded-full border border-slate-600/50 hover:border-slate-500/70 transition-all duration-300 transform hover:scale-105"
                    >
                        {tag}
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ProjectBox