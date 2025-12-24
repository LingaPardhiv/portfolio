import Navbar from './components/Navbar'
import './App.css'
import DetailsCard from './components/DetailsCard'
import About from './components/About'
import Skills from './components/Skills'
import bgimage from './images/bg.jpg'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Connect from './components/Connect'


function App() {
  return (
    <>
      <div id='main'><Navbar/></div>
      <div className="overflow-hidden" style={{backgroundImage: `url(${bgimage})`, backgroundSize:'cover',backgroundRepeat:'no-repeat' }}>
      <DetailsCard/>
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Connect/>
      <div className='flex justify-center items-center text-white mt-6'>
        <hr className="w-1/2 border-white border-2" />
      </div>
      <div className='flex justify-center items-center text-white p-6'>© 2025 Linga Pardhiv. All rights reserved.</div>
      </div>
    </>
  )
}

export default App
