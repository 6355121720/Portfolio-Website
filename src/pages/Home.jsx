import React from 'react'

const Home = () => {
  return (
    <div className = "my-4">
      <div className="flex flex-col items-start pt-4 md:pt-8 pb-7 md:pb-12 pl-8 md:pl-12 pr-[30vw] lg:pr-[40vw]">
        <div className = "text-xl md:text-2xl">Hello, I'm</div>
        <div className = "text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-rose-300 to-rose-700 bg-clip-text text-transparent font-bold tracking-wider pb-4">Viral Dobariya</div>
        <div className = "text-xl md:text-2xl lg:text-3xl tracking-wide font-semibold pb-6">
          I Build 
          <span className = "text-indigo-400">{" "}Exceptional{" "}</span> 
          Digital Experiences
        </div>
        <div className="md:text-xl text-gray-400">
          I'm a passionate full-stack developer specializing in creating elegant, intuitive, and high-performing web applications that solve real-world problems.
        </div>
      </div>
      <div className="mt-20 md:mt-32 text-center">
        <div className = "text-2xl md:text-4xl font-semibold tracking-wide mb-4 md:mb-8">
          Resume
        </div>
        <div className = "md:text-xl text-gray-300 px-[20vw] mb-7 md:mb-12">
          Download my resume to learn more about my skills, experience, and qualifications in DevOps and Full Stack Development.
        </div>
        <a href = "/public/ViralDobariyaResume.pdf" download className = "bg-gradient-to-t from-blue-500 to-blue-800 w-20 md:w-32 px-3 md:px-5 py-1 md:py-2 md:text-2xl rounded-2xl border-1 border-gray-400">Download</a>
      </div>
    </div>
  )
}

export default Home