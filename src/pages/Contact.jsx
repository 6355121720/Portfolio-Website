// import {useState, useRef, useEffect } from 'react'
// import emailjs from '@emailjs/browser'
// import { socials } from '../data/portfolioData'
// import thankImg from '../assets/thank.jpeg'
// import { useNavigate } from 'react-router-dom'

// const Contact = () => {

//   // const [form, setForm] = useState({name: "", email: "", message:"", title:"Contacting You through Portfolio."})
//   // const [thank, setThank] = useState(false)
//   // const nav = useNavigate()
//   // const formRef = useRef()

//   // useEffect(() => {
//   //   emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
//   // })

//   // const returnHome = () => {
//   //   nav('/')
//   // }

//   // const formChange = (e) => {
//   //   setForm({...form, [e.target.name]: e.target.value})
//   // }

//   // const submitHandler = (e) => {
//   //   if (form.name == "" || form.email == "" || form.message == ""){
//   //     alert("Give valid input data.")
//   //     return
//   //   }
//     // e.preventDefault();
//     // console.log(import.meta.env.VITE_EMAILJS_SERVICE_ID)
//     // emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, formRef.current)
//     // .then(() => {
//     //   setThank(true)
//     //   e.target.reset()
//     // })
//     // .catch(() => {
//     //   alert("Give valid input data.")
//     // })

//   // }

//   return (
//     <>
//     <div className = "mx-12 md:mx-20 lg:mx-28 my-16 md:my-24">
//       <div className="text-2xl md:text-4xl lg:text-5xl tracking-wide font-bold mb-7 md:mb-10 text-center">Contact Me</div>
//       <div className = "md:text-xl text-gray-400 mb-8 md:mb-16 text-center">Feel free to reach out for collaborations, questions, or just to say hello—I'll get back to you as soon as possible.</div>
//       <div className="flex flex-wrap gap-2 md:gap-4 justify-center mb-12 md:mb-20">
//         {socials.map((item, index) => (
//           <a key = {index} href = {item.link} className="border-1 border-gray-300 bg-gray-600 rounded-full overflow-hidden"><img src={item.image} alt={item.name} className = "h-7 md:h-9 lg:h-12" /></a>
//         ))}
//       </div>
//       <div className = "flex items-center justify-center">
//       <form action = {"https://formsubmit.co/" + import.meta.env.VITE_FORMSUBMIT_KEY} method="POST" className = "flex items-center flex-col min-w-[60vw] md:min-w-[40vw] lg:min-w-[30vw]" >
//         <label htmlFor="name" className = "font-semi bold self-start p-2 md:p-3">Name : </label>
//         <input type="text" name="name" id="name" className = "p-1 rounded-2xl border-2 border-white min-w-[60vw] md:min-w-[40vw] lg:min-w-[30vw]"  />
//         <br/>
//         <label htmlFor="email" className = "font-semi bold self-start p-2 md:p-3" >Email : </label>
//         <input type="text" name="email" id="email" className = "p-1 rounded-2xl border-2 border-white min-w-[60vw] md:min-w-[40vw] lg:min-w-[30vw]" />
//         <br/>
//         <label htmlFor="message" className = "font-semi bold self-start p-2 md:p-3">Message : </label>
//         <textarea name="message" id="message" className = "p-1 rounded-2xl border-2 border-white min-w-[60vw] md:min-w-[40vw] lg:min-w-[30vw]" />
//         <br/>
//         <input type="submit" className = "md:text-xl py-1 md:py-2 px-2 md:px-4 rounded-2xl bg-blue-500 border-1 border-white" />
//       </form>
//       </div>
//     </div>
//     {/* {(thank) && (
//       <div className = "z-49 flex items-center justify-center bg-black backdrop-opacity-60 py-40 md:py-60 lg:py-80">
//         <div className = "rounded-2xl border-2 border-gray-200 flex flex-col gap-2 md:gap-3 text-center p-3 md:p-5">
//           <img src={thankImg} className = "w-[50vw] md:w-[40] lg:w-[30] rounded-xl" />
//           <div className = "p-3 md:p-5 flex-flex-col gap-2 md:gap-3">
//             <div className="md:text-xl tracking-wide">
//               <span className = "text-red-500">Thank you for contacting us.</span>
//               We truly appreciate your interest, and we will reach out to you soon.
//               We’d be honored to feature your feedback in our testimonials and keep you in our hearts.
//             </div>
//             <div onClick = {returnHome} className = "text-xl md:text-2xl lg:text-3xl rounded-xl border border-gray-300 bg-red-400 font-semibold tracking-wide">RETURN HOME</div>
//           </div>
//         </div>
//       </div>
//     )} */}
//     </>
//   )
// }

// export default Contact


import { socials } from "../data/portfolioData.js";



const Contact = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-gray-100">
      <div className="mx-12 md:mx-20 lg:mx-28 py-16 md:py-24">
        <div className="text-3xl md:text-4xl lg:text-5xl tracking-wide font-bold mb-6 md:mb-8 text-center text-gray-100">Contact Me</div>
        <div className="md:text-xl text-gray-300 mb-12 md:mb-16 text-center leading-relaxed">Feel free to reach out for collaborations, questions, or just to say hello—I'll get back to you as soon as possible.</div>
        <div className="flex flex-wrap gap-4 md:gap-6 justify-center mb-12 md:mb-20">
          {socials.map((item, index) => (
            <a key={index} href={item.link} className="p-3 md:p-4 bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-slate-500 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-slate-500/20 overflow-hidden">
              <img src={item.image} alt={item.name} className="h-6 md:h-8 lg:h-10 hover:brightness-200" />
            </a>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <form method="POST" action={"https://formsubmit.co/el/" + import.meta.env.VITE_FORMSUBMIT_KEY} className="flex items-center flex-col min-w-[60vw] md:min-w-[40vw] lg:min-w-[30vw] bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-2xl p-8 md:p-12 shadow-2xl space-y-6">
            <label htmlFor="name" className="font-bold self-start text-gray-200 text-base md:text-lg">Name:</label>
            <input type="text" name="name" id="name" className="w-full p-3 md:p-4 rounded-2xl bg-slate-900 border-2 border-slate-600 text-gray-100 placeholder-gray-400 focus:outline-none focus:border-slate-400 hover:border-slate-500 transition-all duration-300" placeholder="Enter your name" />
            
            <label htmlFor="email" className="font-bold self-start text-gray-200 text-base md:text-lg">Email:</label>
            <input type="email" name="email" id="email" className="w-full p-3 md:p-4 rounded-2xl bg-slate-900 border-2 border-slate-600 text-gray-100 placeholder-gray-400 focus:outline-none focus:border-slate-400 hover:border-slate-500 transition-all duration-300" placeholder="your.email@example.com" />
            
            <label htmlFor="message" className="font-bold self-start text-gray-200 text-base md:text-lg">Message:</label>
            <textarea name="message" id="message" rows={5} className="w-full p-3 md:p-4 rounded-2xl bg-slate-900 border-2 border-slate-600 text-gray-100 placeholder-gray-400 focus:outline-none focus:border-slate-400 hover:border-slate-500 transition-all duration-300 resize-none" placeholder="Tell me about your project or just say hello..."></textarea>
            
            <button type="submit" className="w-full md:text-xl py-3 md:py-4 px-6 md:px-8 rounded-2xl bg-slate-700 hover:bg-slate-600 border border-slate-500 hover:border-slate-400 text-gray-100 hover:text-white font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-slate-500/20 cursor-pointer">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact