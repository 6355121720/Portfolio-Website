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
    <div className = "pb-8 md:pb-12">
      <div className = "px-[5vw] md:px-[8vw] my-20 md:my-32">
        <div className = "text-2xl md:text-4xl font-semibold tracking-wide text-center mb-9 md:mb-16">Tech Stack</div>
        <div className = "flex flex-col gap-4 md:gap-7 mx-[10vw] md:mx-[15vw]">
          {skills.map((item, index) => (
            <SkillBox key = {index} item = {item} />
          ))}
          
        </div>
      </div>
      <div className = "pt-8 md:pt-12 my-12 md:my-20 mx-[10vw] md:mx-[15vw] flex flex-col items-center">
        <div className = "text-2xl md:text-4xl font-semibold tracking-wide text-center mb-9 md:mb-16"><Brain className="inline md:scale-150 mb-2 mr-2 md:mr-4"/>Problem Solving</div>
        <div className = "text-xl md:text-3xl mb-9 md:mb-16 text-center ">Leetcode Progress</div>
        <div className = "md:text-xl mb-5 md:mb-9">Total Problem Solved : {leetcodeData?.totalSolved ?? 0}</div>
        <div className = "md:text-xl mb-5 md:mb-9"><span className="text-green-400">Easy</span> Problem Solved : {leetcodeData?.easySolved ?? 0}</div>
        <div className = "md:text-xl mb-5 md:mb-9"><span className="text-amber-400">Medium</span> Problem Solved : {leetcodeData?.mediumSolved ?? 0}</div>
        <div className = "md:text-xl mb-5 md:mb-9"><span className="text-red-400">Hard</span> Problem Solved : {leetcodeData?.hardSolved ?? 0}</div>

      </div>
      <div className = "my-20 md:my-32">
        <div className = "text-2xl md:text-4xl font-semibold tracking-wide text-center mb-9 md:mb-16">Projects</div>
        <div className = "flex flex-wrap items-center justify-center">
          {projects.map((item, index) => (
            <ProjectBox key={index} item={item}/>
          ))}
        </div>
      </div>
    </div> 
    : 
    <div className = "flex items-center justify-center my-[30vh] text-2xl md:text-4xl">
      Loading...
    </div>
  )
}

export default Portfolio