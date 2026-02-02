import React from 'react'
import front from "../assets/front.gif"

const Front = () => {
    console.log(front)
  return (
    <div className='bg-[#668ba4] h-[500px] w-[900px] py-4 rounded-xl'>
        <img src = {front} alt = "front" className='h-[160px] w-[250px] rounded-xl mx-auto'/>
        <p className='text-5xl mt-10'>Do you wanna be my valentine?</p>
        <div className='grid grid-cols-2 mt-20'>
            <button>Yes</button>
            <button>No</button>
        </div>
    </div>
  )
}

export default Front
