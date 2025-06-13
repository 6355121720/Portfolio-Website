// import React from 'react'

// const Home = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-100">
//       {/* Hero Section */}
//       <div className="container mx-auto px-6 md:px-12 lg:px-24 pt-16 md:pt-24 pb-12 md:pb-20">
//         <div className="max-w-3xl">
//           <div className="text-xl md:text-2xl text-gray-400 mb-2">Hello, I'm</div>
//           <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-rose-400 to-rose-600 bg-clip-text text-transparent tracking-tight mb-6">
//             Viral Dobariya
//           </h1>
//           <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-8">
//             I Build <span className="text-indigo-400">Exceptional</span> Digital Experiences
//           </h2>
//           <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
//             I'm a passionate full-stack developer specializing in creating elegant, intuitive, and high-performing web applications that solve real-world problems.
//           </p>
//         </div>
//       </div>

//       {/* Resume Section */}
//       <div className="container mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24 text-center">
//         <div className="max-w-2xl mx-auto">
//           <h3 className="text-2xl md:text-4xl font-bold tracking-tight mb-6">
//             Resume
//           </h3>
//           <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
//             Download my resume to learn more about my skills, experience, and qualifications in DevOps and Full Stack Development.
//           </p>
//           <a 
//             href="/public/ViralDobariyaResume.pdf" 
//             download 
//             className="inline-block bg-gradient-to-br from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-medium md:font-semibold px-8 py-3 md:px-10 md:py-4 rounded-xl text-lg md:text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/20"
//           >
//             Download Resume
//           </a>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Home



import React from 'react'

const Home = () => {
  return (
    <div className="pb-12 md:pb-20 min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-gray-100">
      {/* Hero Section */}
      <div className="flex flex-col items-start pt-16 md:pt-24 pb-12 md:pb-20 pl-8 md:pl-12 pr-[30vw] lg:pr-[40vw]">
        <div className="text-xl md:text-2xl text-gray-400 mb-2">Hello, I'm</div>
        <div className="text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-rose-400 via-rose-500 to-rose-600 bg-clip-text text-transparent font-bold tracking-wider pb-6">
          Viral Dobariya
        </div>
        <div className="text-2xl md:text-3xl lg:text-4xl tracking-wide font-semibold pb-8 text-gray-100">
          I Build 
          <span className="text-indigo-400">{" "}Exceptional{" "}</span> 
          Digital Experiences
        </div>
        <div className="md:text-xl text-gray-300 leading-relaxed">
          I'm a passionate full-stack developer specializing in creating elegant, intuitive, and high-performing web applications that solve real-world problems.
        </div>
      </div>

      {/* Resume Section */}
      <div className="mt-20 md:mt-32 text-center">
        <div className="text-3xl md:text-4xl font-bold tracking-wide mb-6 md:mb-8 text-gray-100">
          Resume
        </div>
        <div className="md:text-xl text-gray-300 px-[20vw] mb-8 md:mb-12 leading-relaxed">
          Download my resume to learn more about my skills, experience, and qualifications in DevOps and Full Stack Development.
        </div>
        <a 
          href="/public/ViralDobariyaResume.pdf" 
          download 
          className="inline-block bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 hover:from-blue-500 hover:via-blue-600 hover:to-blue-700 text-white font-semibold px-6 md:px-8 py-3 md:py-4 text-lg md:text-xl rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 border border-blue-500/20"
        >
          Download
        </a>
      </div>
    </div>
  )
}

export default Home