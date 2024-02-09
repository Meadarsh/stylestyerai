import React from 'react'
const FourthPage = () => {
  return (
    <div className='h-[80vh] relative overflow-hidden bg-black'>
            <div className='h-[25vw] w-[25vw] absolute -left-16 rounded-full bg-gray-400 shadow-2xl shadow-white'></div>
            <div className='h-[30vw] w-[20vw] absolute left-[50%] top-[50%] rounded-full bg-gray-400 shadow-2xl shadow-white'></div>
            <div className='h-[15vw] w-[15vw] absolute -right-5 rounded-full bg-gray-400 shadow-2xl shadow-white'></div>
            <div className="upperText absolute bg-[rgba(0,0,0,.6)] backdrop-blur-3xl h-full pt-[6vh] w-full">
             <h1 className=' text-white font-caudex w-[70%] ml-[7vw] leading-none font-normal text-[8vw]'>
             LOREM IPSUM SIT AMET,
             CANSECTETUR <span className='bg-gradient-to-r from-lime-600 to-blue-500 inline-block text-transparent bg-clip-text' >ADIPISCING</span> ELIT
             </h1>
            </div>
    </div>
  )
}

export default FourthPage