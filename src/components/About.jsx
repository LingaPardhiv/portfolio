import React from 'react'

const About = () => {
  return (
      <div className='flex mt-5 flex-col gap-4 text-white'>
        <h2 id="about" className="font-bold text-2xl w-120 text-end">About</h2>
        <div className='h-20 grid place-items-center px-10'>
          <p className='font-bold w-1/2'>I am a Front-End Developer with a strong focus on building clean, responsive, and user-friendly web experiences. I’ve completed my Computer Science Engineering degree and enjoy crafting interfaces that blend creativity with performance.</p>
        </div>
        <div className='h-20 grid place-items-center px-10'>
          <p className='font-bold w-1/2'>I am passionate about modern web technologies, constantly exploring new tools, and turning ideas into polished digital products. Always eager to learn, grow, and collaborate with others to build meaningful projects.</p>
        </div>
      </div>
  )
}

export default About
