// import {useContext } from 'react'
// import { projects, skills } from '../data/portfolioData'
// import SkillBox from '../components/SkillBox'
// import { Brain, BrainCircuitIcon } from 'lucide-react';
// import { leetcodeContext } from '../context/LeetcodeContext';
// import ProjectBox from '../components/ProjectBox';

// const Portfolio = () => {

//   const {loading, leetcodeData} = useContext(leetcodeContext);


//   return (
//     (!loading) 
//     ? 
//     <div className = "pb-8 md:pb-12">
//       <div className = "px-[5vw] md:px-[8vw] my-20 md:my-32">
//         <div className = "text-2xl md:text-4xl font-semibold tracking-wide text-center mb-9 md:mb-16">Tech Stack</div>
//         <div className = "flex flex-col gap-4 md:gap-7 mx-[10vw] md:mx-[15vw]">
//           {skills.map((item, index) => (
//             <SkillBox key = {index} item = {item} />
//           ))}
          
//         </div>
//       </div>
//       <div className = "pt-8 md:pt-12 my-12 md:my-20 mx-[10vw] md:mx-[15vw] flex flex-col items-center">
//         <div className = "text-2xl md:text-4xl font-semibold tracking-wide text-center mb-9 md:mb-16"><Brain className="inline md:scale-150 mb-2 mr-2 md:mr-4"/>Problem Solving</div>
//         <div className = "text-xl md:text-3xl mb-9 md:mb-16 text-center ">Leetcode Progress</div>
//         <div className = "md:text-xl mb-5 md:mb-9">Total Problem Solved : {leetcodeData?.totalSolved ?? 0}</div>
//         <div className = "md:text-xl mb-5 md:mb-9"><span className="text-green-400">Easy</span> Problem Solved : {leetcodeData?.easySolved ?? 0}</div>
//         <div className = "md:text-xl mb-5 md:mb-9"><span className="text-amber-400">Medium</span> Problem Solved : {leetcodeData?.mediumSolved ?? 0}</div>
//         <div className = "md:text-xl mb-5 md:mb-9"><span className="text-red-400">Hard</span> Problem Solved : {leetcodeData?.hardSolved ?? 0}</div>

//       </div>
//       <div className = "my-20 md:my-32">
//         <div className = "text-2xl md:text-4xl font-semibold tracking-wide text-center mb-9 md:mb-16">Projects</div>
//         <div className = "flex flex-wrap items-center justify-center">
//           {projects.map((item, index) => (
//             <ProjectBox key={index} item={item}/>
//           ))}
//         </div>
//       </div>
//     </div> 
//     : 
//     <div className = "flex items-center justify-center my-[30vh] text-2xl md:text-4xl">
//       Loading...
//     </div>
//   )
// }

// export default Portfolio



import {useContext } from 'react'
import { projects, skills } from '../data/portfolioData'
import SkillBox from '../components/SkillBox'
import { Brain, BrainCircuitIcon } from 'lucide-react';
import { leetcodeContext } from '../context/LeetcodeContext';
import ProjectBox from '../components/ProjectBox';

const Portfolio = () => {

  const {loading, leetcodeData} = useContext(leetcodeContext);


  return (
    (!loading) 
    ? 
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-gray-100 pb-12 md:pb-16">
      {/* Tech Stack Section */}
      <div className="px-[5vw] md:px-[8vw] py-20 md:py-32">
        <div className="text-3xl md:text-4xl font-bold tracking-wide text-center mb-12 md:mb-20 text-gray-100">
          Tech Stack
        </div>
        <div className="flex flex-col gap-5 md:gap-8 mx-[10vw] md:mx-[15vw]">
          {skills.map((item, index) => (
            <SkillBox key={index} item={item} />
          ))}
        </div>
      </div>

      {/* Problem Solving Section */}
      <div className="pt-12 md:pt-16 my-16 md:my-24 mx-[10vw] md:mx-[15vw] flex flex-col items-center">
        <div className="text-3xl md:text-4xl font-bold tracking-wide text-center mb-12 md:mb-20 text-gray-100">
          <Brain className="inline md:scale-150 mb-2 mr-3 md:mr-5 text-blue-400"/>
          Problem Solving
        </div>
        <div className="text-2xl md:text-3xl mb-12 md:mb-20 text-center text-gray-200 font-semibold">
          Leetcode Progress
        </div>
        <div className="space-y-4 md:space-y-6 text-center">
          <div className="md:text-xl mb-6 md:mb-10 text-gray-300 bg-slate-800/50 px-6 py-3 rounded-lg backdrop-blur-sm border border-slate-700/50">
            Total Problem Solved : <span className="text-blue-400 font-semibold">{leetcodeData?.totalSolved ?? 0}</span>
          </div>
          <div className="md:text-xl mb-6 md:mb-10 text-gray-300 bg-slate-800/50 px-6 py-3 rounded-lg backdrop-blur-sm border border-slate-700/50">
            <span className="text-green-400 font-semibold">Easy</span> Problem Solved : <span className="text-green-400 font-semibold">{leetcodeData?.easySolved ?? 0}</span>
          </div>
          <div className="md:text-xl mb-6 md:mb-10 text-gray-300 bg-slate-800/50 px-6 py-3 rounded-lg backdrop-blur-sm border border-slate-700/50">
            <span className="text-amber-400 font-semibold">Medium</span> Problem Solved : <span className="text-amber-400 font-semibold">{leetcodeData?.mediumSolved ?? 0}</span>
          </div>
          <div className="md:text-xl mb-6 md:mb-10 text-gray-300 bg-slate-800/50 px-6 py-3 rounded-lg backdrop-blur-sm border border-slate-700/50">
            <span className="text-red-400 font-semibold">Hard</span> Problem Solved : <span className="text-red-400 font-semibold">{leetcodeData?.hardSolved ?? 0}</span>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="my-20 md:my-32">
        <div className="text-3xl md:text-4xl font-bold tracking-wide text-center mb-12 md:mb-20 text-gray-100">
          Projects
        </div>
        <div className="flex flex-wrap items-center justify-center">
          {projects.map((item, index) => (
            <ProjectBox key={index} item={item}/>
          ))}
        </div>
      </div>
    </div> 
    : 
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-gray-100 flex items-center justify-center">
      <div className="text-2xl md:text-4xl font-semibold text-gray-300 animate-pulse">
        Loading...
      </div>
    </div>
  )
}

export default Portfolio