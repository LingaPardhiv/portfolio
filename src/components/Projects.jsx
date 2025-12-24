import React from 'react'

const Projects = () => {
  return (
    <div>
      <div className='mt-6 text-white'>
      <h2 id="projects" className='font-bold text-2xl w-125 text-end'>Projects</h2>
      <div className="flex justify-center flex-col items-center">
        <div className='h-55 w-170 bg-zinc-900 rounded-2xl p-5 mt-5 gap-2'>
          <div className='ml-2 font-bold'>BLOCKCHAIN-BASED DIGITAL IDENTITY VERIFICATION SYSTEM FOR E-COMMERCE</div>
          <div className='m-2'> &#8226; Designed and developed a blockchain-based digital identity verification system for e-commerce, enhancing user security, privacy, and control through smart contracts and decentralized storage.</div>
          <div className='m-2'> &#8226; Implemented cryptographic protocols and machine learning tools (Python, Solidity, scikit-learn, pandas, NumPy) to automate fraud detection, eliminate third-party data reliance, and build trust in online transactions.</div>
        </div>
        <div className='h-63 w-170 bg-zinc-900 rounded-2xl p-5 mt-5 gap-2'>
          <div className='ml-2 font-bold'>LOAN ELIGIBILITY PREDICTION: MACHINE LEARNING APPROACH FOR FRAUDULENT LOAN ANALYSIS</div>
          <div className='m-2'> &#8226; Developed a machine learning-based system to predict loan eligibility and detect fraudulent applications using the SYL Bank dataset.</div>
          <div className='m-2'> &#8226; Automated risk assessment with algorithms like Random Forest and KNN, improving accuracy and efficiency in loan processing.</div>
          <div className='m-2'> &#8226; Utilized Python, scikit-learn, pandas, and NumPy for data preprocessing, model training, and performance evaluation.</div>
        </div>
        <div className='h-55 w-170 bg-zinc-900 rounded-2xl p-5 mt-5'>
          <div className='ml-2 font-bold'>COMMUNITY TUTORS: A NEW METHODOLOGY OF IMPLEMENTATION FOR FINDING NEARBY TUTORS</div>
          <div className='m-2'> &#8226; Developed Community Tutors, a website built with HTML, CSS, and JavaScript to connect students with nearby tutors or tuition centers, addressing learning gaps caused by the pandemic.</div>
          <div className='m-2'> &#8226; Implemented detailed tutor profiles, scheduling tools, and transparent fee information to ensure convenient, high-quality local educational support.</div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Projects
