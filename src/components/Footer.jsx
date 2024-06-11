import React from 'react'

const Footer = () => {
  return (
    <div className='bg-purple-200 flex flex-col justify-center items-center  w-full'>
        <div className='logo font-bold text-2xl'>
        <span className="text-green-600">&lt;</span>
          Pass
          <span className="text-green-600">Op/&gt;</span>
        </div>
        <div className='flex justify-center items-center text-white'>
      Created with<img className='w-7 m-2' src="icons/heart.png" alt="" />by CodeWithNeeraj
    </div>
    </div>
  )
}

export default Footer
