import React from 'react'
import Flash from '../assets/flash.png'
function Navbar() {
  return (
    <div className="w-full bg-[#2d2d30] ">
        <div className='max-w-[1280px] h-[90px] flex justify-between
     items-center mx-auto px- font-sans'>
      <div className='flex'>
      <img className=' size-11 animate-pulse' src={Flash} alt="logo" />
      <h1 className='text-white font-medium text-3xl font-[poppins]'>SpeedBriefs</h1>
        {/* <ul className='flex space-x-4 text-lg'>
            <li>My Pins</li>
            <li>Theme button</li>
        </ul> */}
        </div>
    </div>
    </div>
  )
}

export default Navbar