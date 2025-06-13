// import {useState} from 'react'
// import { X, Menu } from 'lucide-react'
// import { menus } from '../data/menuData'
// import {NavLink} from 'react-router-dom'

// const Header = () => {

//     let [isDrowerOpen, setIsDrowerOpen] = useState(false);

//     let toggleDrower = () => {
//         setIsDrowerOpen(!isDrowerOpen);
//     }

//   return (
//     <div className="sticky top-0 z-50 backdrop-blur-sm border-b border-gray-600">
//         <div className="flex justify-between py-3 md:py-5 px-6 md:px-10 items-center">
//             <div className="text-xl md:text-2xl tracking-wide">Viral Dobariya</div>
//             <div className="hidden md:flex gap-2 md:gap-4 items-center">
//                 {menus.map((item, index) => (
//                     <NavLink to={item.href} className = {({isActive}) => isActive ? "text-white font-semibold " : "text-gray-300"}>
//                         <div className="" key = {index}>
//                             {item.name}
//                         </div>
//                     </NavLink>
//                 ))}    
//             </div>
//             <div className="md:hidden" onClick = {toggleDrower}>
//                 {isDrowerOpen ? <X/> : <Menu/>}
//             </div>
//         </div>
//         {isDrowerOpen && (
//                 <div className="md:hidden flex flex-col gap-3 md:gap-5 items-center p-4 md:p-6">
//                     {menus.map((item, index) => (
//                         <NavLink to={item.href} className = {({isActive}) => isActive ? "text-white font-semibold" : "text-gray-300"}>
//                             <div className="" key = {index}>{item.name}</div>
//                         </NavLink>
//                     ))}
//                 </div>
//         )}
//     </div>
//   )
// }

// export default Header

import {useState} from 'react'
import { X, Menu } from 'lucide-react'
import { menus } from '../data/menuData'
import {NavLink} from 'react-router-dom'

const Header = () => {

    let [isDrowerOpen, setIsDrowerOpen] = useState(false);

    let toggleDrower = () => {
        setIsDrowerOpen(!isDrowerOpen);
    }

  return (
    <div className="sticky top-0 z-50 bg-slate-900/20 backdrop-blur-xl border-b border-slate-600/30 shadow-2xl">
        <div className="flex justify-between py-4 md:py-6 px-6 md:px-10 items-center">
            <div className="text-xl md:text-2xl tracking-wide font-bold text-gray-100 hover:text-white transition-colors duration-300">
                Viral Dobariya
            </div>
            <div className="hidden md:flex gap-6 md:gap-8 items-center">
                {menus.map((item, index) => (
                    <NavLink 
                        key={index}
                        to={item.href} 
                        className={({isActive}) => 
                            isActive 
                                ? "text-white font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent" 
                                : "text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
                        }
                    >
                        <div className="py-2 px-3 rounded-lg hover:bg-slate-800/50 transition-all duration-300">
                            {item.name}
                        </div>
                    </NavLink>
                ))}    
            </div>
            <div 
                className="md:hidden p-2 rounded-lg hover:bg-slate-800/50 transition-all duration-300 cursor-pointer text-gray-300 hover:text-white" 
                onClick={toggleDrower}
            >
                {isDrowerOpen ? <X size={24}/> : <Menu size={24}/>}
            </div>
        </div>
        {isDrowerOpen && (
            <div className="md:hidden flex flex-col gap-4 md:gap-6 items-center p-6 md:p-8 bg-slate-800/20 backdrop-blur-xl border-t border-slate-600/20">
                {menus.map((item, index) => (
                    <NavLink 
                        key={index}
                        to={item.href} 
                        className={({isActive}) => 
                            isActive 
                                ? "text-white font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent" 
                                : "text-gray-300 hover:text-white transition-all duration-300"
                        }
                        onClick={toggleDrower}
                    >
                        <div className="py-2 px-4 rounded-lg hover:bg-slate-700/50 transition-all duration-300">
                            {item.name}
                        </div>
                    </NavLink>
                ))}
            </div>
        )}
    </div>
  )
}

export default Header