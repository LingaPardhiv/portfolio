import React from 'react'
import tgglogo from '../images/tgglogo.webp'

const Experience = () => {
  return (
    <div>
      <div className='mt-6 text-white'>
      <h2 className='font-bold text-2xl w-full text-center justify-center'>Experience</h2>
      <div className="flex justify-center">
        <div className='h-88 w-170 bg-zinc-900 rounded-2xl p-5 mt-5 '>
        <div className='flex items-start gap-4'>
        <img src={tgglogo} height={50} width={50} alt="" />
        <div className='flex flex-col'>
        <h3 className='font-bold'>Trans Global Geomatics</h3>
        <h3>Front End Developer</h3>
        </div>
        </div>
        <div className="flex ">
            <div className='mt-2 pl-2'> Internship </div>
            <div className='mt-2 px-2'> &#8226; May 2025 - October 2025 </div>
            <div className='mt-2'> &#8226; Hyderabad </div>
        </div>
        <div className='pl-2 mt-2'> &#8226; Developing and optimizing responsive web applications to improve performance, scalability, and user experience.</div>
        <div className='pl-2 mt-2'> &#8226; Diagnosed and resolved frontend issues, ensuring seamless functionality and efficient workflows.</div>
        <div className='pl-2 mt-2'> &#8226; Integrated real-time GPS tracking and data processing capabilities to enhance application reliability and usability.</div>
        <div className='pl-2 mt-2'> &#8226; Engineered GPS tracking systems using Python and web technologies for accurate data capture, efficient processing, and real-time visualization to support data-driven decisions</div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Experience
