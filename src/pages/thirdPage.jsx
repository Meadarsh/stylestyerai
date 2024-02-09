import React from 'react'
import ThirdPageCard from '../components/thirdPageCard'

const ThirdPage = () => {
  const a=[1,2,3,3]
  return (
    <div className='bg-black py-[10vh]'>
    {a.map((value,index)=>( index % 2 === 0 ?<ThirdPageCard val='flex-row-reverse' />:<ThirdPageCard/>))}
    </div>
  )
}

export default ThirdPage