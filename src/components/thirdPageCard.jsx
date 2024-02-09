import React from 'react'

const ThirdPageCard = ({val}) => {
  return (
    <div className={`h-56  mt-[10vh] w-full flex justify-evenly  font-carter-one ${val}`}>
        <div className=' h-full w-1/3 bg-slate-300'></div>
        <div className=' h-full w-1/3 text-white flex items-center text-[3.5vw]'>
          <h1>lorem ipsun sit amet</h1>
        </div>
    </div>
  )
}

export default ThirdPageCard