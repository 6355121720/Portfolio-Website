// import React from 'react'
// import EducationBox from '../components/EducationBox'
// import {educations, hobbies} from '../data/aboutData'

// const About = () => {
//   return (
//     <div>
//       <div className="text-center pt-6 md:pt-10 px-[20vw] pb-10 md:pb-16">
//         <div className = "text-2xl md:text-4xl tracking-wide font-semibold pb-3 md:pb-6">
//           About Me
//         </div>
//         <div className = "md:text-xl text-gray-300 pb-3 md:pb-6">
//           My name is Viral Dobariya, and I am a full-stack developer with a strong interest in building efficient, scalable, and user-centric digital solutions. With a solid foundation in frontend technologies like React and Tailwind CSS, along with backend experience using modern frameworks like Express and Spring Boot, I am committed to writing clean, maintainable code and delivering high-quality products.
//         </div>
//         <div className = "md:text-xl text-gray-300 pb-3 md:pb-6">
//           I am always exploring ways to improve my skills and contribute to impactful, meaningful projects.
//         </div>
//       </div>
//       <div className="py-4 md:py-8 px-[20vw] pb-20 md:pb-32">
//         <div className="text-2xl md:text-4xl tracking-wide font-semibold pb-6 md:pb-10 text-center">Education</div>
//         <div className="flex flex-col gap-3 md:gap-5 items-center">
//           {educations.map((item, index) => (
//             <EducationBox key = {index} item = {item} />
//           ))}
//         </div>
//       </div>
//       <div className= "px-[12vw] md:px-[18vw] lg:px-[20vw] text-center">
//           <div className = "pb-6 md:pb-10 text-2xl md:text-4xl font-semibold tracking-wide ">Hobbies</div>
//           <div className = "flex flex-wrap mb-4 md:mb-8 justify-center">
//           {hobbies.map((item, index) => (
//             <div key={index} className="min-w-20 py-1 md:py-2 px-2 md:px-4 my-2 md:my-4 mx-3 md:mx-5 rounded-full bg-gray-600 border border-gray-300">
//               {item}
//             </div>
//           ))}
//           </div>
//       </div>
//     </div>
//   )
// }

// export default About



import React from 'react'
import EducationBox from '../components/EducationBox'
import {educations, hobbies} from '../data/aboutData'

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-gray-100">
      {/* About Me Section */}
      <div className="text-center pt-12 md:pt-16 px-[20vw] pb-16 md:pb-20">
        <div className="text-3xl md:text-4xl tracking-wide font-bold pb-6 md:pb-8 text-gray-100">
          About Me
        </div>
        <div className="md:text-xl text-gray-300 pb-6 md:pb-8 leading-relaxed">
          My name is Viral Dobariya, and I am a full-stack developer with a strong interest in building efficient, scalable, and user-centric digital solutions. With a solid foundation in frontend technologies like React and Tailwind CSS, along with backend experience using modern frameworks like Express and Spring Boot, I am committed to writing clean, maintainable code and delivering high-quality products.
        </div>
        <div className="md:text-xl text-gray-300 pb-3 md:pb-6 leading-relaxed">
          I am always exploring ways to improve my skills and contribute to impactful, meaningful projects.
        </div>
      </div>

      {/* Education Section */}
      <div className="py-8 md:py-12 px-[20vw] pb-24 md:pb-32">
        <div className="text-3xl md:text-4xl tracking-wide font-bold pb-8 md:pb-12 text-center text-gray-100">
          Education
        </div>
        <div className="flex flex-col gap-4 md:gap-6 items-center">
          {educations.map((item, index) => (
            <EducationBox key={index} item={item} />
          ))}
        </div>
      </div>

      {/* Hobbies Section */}
      <div className="px-[12vw] md:px-[18vw] lg:px-[20vw] text-center pb-16 md:pb-24">
        <div className="pb-8 md:pb-12 text-3xl md:text-4xl font-bold tracking-wide text-gray-100">
          Hobbies
        </div>
        <div className="flex flex-wrap mb-4 md:mb-8 justify-center">
          {hobbies.map((item, index) => (
            <div 
              key={index} 
              className="min-w-20 py-2 md:py-3 px-4 md:px-6 my-2 md:my-3 mx-2 md:mx-3 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-slate-500 text-gray-200 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-slate-500/20"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About