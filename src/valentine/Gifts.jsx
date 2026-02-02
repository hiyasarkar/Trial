import React from 'react'
import { Link } from 'react-router-dom'

const Gifts = () => {
  return (
    <div className='card-component flex flex-col items-center justify-center
        text-2xl text-center'>
      <p className='text-3xl'>Open one by one</p>
      <div className='grid grid-cols-3 mt-10 text-2xl justify-items-center place-content-center gap-6'>
        <Link to = "/gift1" className="bg-[#f4e5c2] w-[150px] rounded-lg py-2 text-center
             transition-all duration-300 hover:scale-110">Open the 1st gift</Link>
        <Link to = "/gift2" className="bg-[#f4e5c2] w-[150px] rounded-lg py-2 text-center
             transition-all duration-300 hover:scale-110">Open the 2nd gift</Link>
        <Link to = "/gift3" className="bg-[#f4e5c2] w-[150px] rounded-lg py-2 text-center
             transition-all duration-300 hover:scale-110">Open the 3rd gift</Link>
      </div>
    </div>
  )
}

export default Gifts
