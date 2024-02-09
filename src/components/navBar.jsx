import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full bg-black text-white h-24 font-changa flex justify-between items-center'>
        <div className="logo h-16 w-1/5 ml-5">
            <img src="/logo.png" className='h-full' alt="N/A" />
        </div>
        <div className='buttons flex gap-6 w-1/3 '>
           <a href="#about" className='btn btn-primary'>Home</a>
           <a href="#about" className='btn btn-primary'>About</a>
           <a href="#about" className='btn btn-primary'>Check Our Design</a>
           <a href="#about" className='btn btn-primary'>Contact us</a>
        </div>
        <div className="loginButton bg-gradient-to-r from-lime-500 to-blue-500 h-12 w-36 rounded-xl flex items-center justify-center mr-8 ">
         <h1 className=' uppercase' >Login/Signup</h1>
        </div>
    </div>
  )
}

export default Navbar