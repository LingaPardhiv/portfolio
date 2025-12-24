import React from 'react'

const Navbar = () => {
  return (
    <div className='flex text-black font-inter font-black py-1 '>
      <div className='p-2 px-5 w-1/7'>Linga Pardhiv</div>
        <div className='w-3/4 justify-around flex '>
          <ul className='flex gap-8 p-2'>
            <a href="#main"><li>Home</li></a>
            <a href="#about"><li>About</li></a>
            <a href="#projects"><li>Projects</li></a>
            <a href="#contact"><li>Contact</li></a>
          </ul>
        </div>
    </div>
  )
}

export default Navbar
