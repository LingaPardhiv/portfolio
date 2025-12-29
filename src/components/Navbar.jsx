import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="sticky top-0 z-10 font-inter flex px-10 p-3 font-black text-black bg-white">
      <div className="flex w-full items-center justify-between ">
      <div className="">Linga Pardhiv</div>
        <ul className="flex gap-8 items-center">
          <a href="#"><li>Home</li></a>
          <a href="#about"><li>About</li></a>
          <a href="#projects"><li>Projects</li></a>
          <a href="#contact"><li>Contact</li></a>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
