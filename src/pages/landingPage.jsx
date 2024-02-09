import React from 'react'
import Navbar from '../components/navBar'

const LandingPage = () => {
  return (
    <div className=' bg-black w-full'>
        <Navbar/>
        <div className="heading text-[6.5vw] text-white flex flex-col items-center mt-[7vh] font-carter-one tracking-tight leading-none">
          <h1>MEET <span className="bg-gradient-to-r from-lime-600 to-blue-500 inline-block text-transparent bg-clip-text">MR.STYLESTER</span></h1>
          <h1>HE WILL DESIGN FOR YOU!</h1>
        </div>
       <div className='h-[80vh] flex justify-center'>
       <img src='/lp-img.png' className='h-[90vh] drop-shadow-[-20px_-10px_105px_rgba(110,195,56,.6)]'/>
       </div>
    </div>
  )
}

export default LandingPage