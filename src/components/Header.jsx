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
    <div className="sticky top-0 z-50 backdrop-blur-sm border-b border-gray-600 mb-6">
        <div className="flex justify-between py-3 md:py-5 px-6 md:px-10 items-center">
            <div className="text-xl md:text-2xl tracking-wide">Viral Dobariya</div>
            <div className="hidden md:flex gap-2 md:gap-4 items-center">
                {menus.map((item, index) => (
                    <NavLink to={item.href} className = {({isActive}) => isActive ? "text-white font-semibold " : "text-gray-300"}>
                        <div className="" key = {index}>
                            {item.name}
                        </div>
                    </NavLink>
                ))}    
            </div>
            <div className="md:hidden" onClick = {toggleDrower}>
                {isDrowerOpen ? <X/> : <Menu/>}
            </div>
        </div>
        {isDrowerOpen && (
                <div className="md:hidden flex flex-col gap-3 md:gap-5 items-center p-4 md:p-6">
                    {menus.map((item, index) => (
                        <NavLink to={item.href} className = {({isActive}) => isActive ? "text-white font-semibold" : "text-gray-300"}>
                            <div className="" key = {index}>{item.name}</div>
                        </NavLink>
                    ))}
                </div>
        )}
    </div>
  )
}

export default Header