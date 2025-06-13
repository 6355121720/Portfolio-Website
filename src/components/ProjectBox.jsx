import { GithubIcon } from "lucide-react"
import { ExternalLinkIcon } from "lucide-react"

const ProjectBox = ({key, item}) => {
  return (
    <div key={key} className = "m-5 md:m-9 border border-gray-400 rounded-2xl overflow-hidden max-w-68 md:max-w-80 lg:max-w-96">
        <div className="relative">
            <img src={item.image} className = "w-68 md:w-80 lg:w-96 "/>
            <div className = " p-1 md:p-2 pt-2 md:pt-4 absolute left-0 bottom-0 flex gap-3 md:gap-5 bg-gradient-to-t from-gray-800 to-transparent">
                <a href = {item.github} className = "h-4 md:h-8">
                    {<GithubIcon className = "w-5 md:w-7 lg:w-9" />}
                </a>
                {(item.livelink) ? (
                    <a href = {item.livelink} className = "h-4 md:h-8">
                        {<ExternalLinkIcon className = "w-5 md:w-7 lg:w-9" />}
                    </a>
                ) : (
                    <div className = "h-4 md:h-8 opacity-50">
                        {<ExternalLinkIcon className = "w-5 md:w-7 lg:w-9" />}
                    </div>
                )}
            </div>
        </div> 
        <div className="p-4 md:p-5 lg:p-6 flex flex-col gap-3 md:gap-5">
            <div className="text-xl md:text-2xl">
                {item.name}
            </div>
            <div className="text-gray-400 text-sm md:text-[1rem]">
                {item.desc}
            </div>
            <div className = "flex flex-wrap">
                {item.tags.map((item, index) => (
                    <div key={index} className="text-sm md:text-[1rem] py-1 px-1 md:px-2 m-1 md:m-2 bg-gray-800 text-gray-300 rounded-full">{item}</div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ProjectBox