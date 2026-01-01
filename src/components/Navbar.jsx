import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu , X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen ]  = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  };
  return (
    <>
    <div className="sticky top-0 z-10 font-inter flex px-10 p-3 font-black text-black bg-white">
      <div className="flex w-full items-center justify-between ">
      <div className="">Linga Pardhiv</div>
        <ul className="hidden md:flex gap-8 items-center">
          <a href="#"><li>Home</li></a>
          <a href="#about"><li>About</li></a>
          <a href="#projects"><li>Projects</li></a>
          <a href="#contact"><li>Contact</li></a>
        </ul>
        <div className='md:hidden'>
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </div>
    </div>
    {isOpen && (
      
      <ul className="flex gap-2 items-center flex-col sticky top-0 z-10 font-inter py-2 font-black text-black bg-white">
          <a href="#"><li>Home</li></a>
          <a href="#about"><li>About</li></a>
          <a href="#projects"><li>Projects</li></a>
          <a href="#contact"><li>Contact</li></a>
        </ul>
     
    )}
    </>
  )
}

export default Navbar
