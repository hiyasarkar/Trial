import React from 'react'
import success from "../assets/success.gif"
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <div className='card-component'>
      <img src = {success} alt="front"
        className="h-[200px] w-[250px] rounded-xl mx-auto"/>
        <p className='text-3xl mt-10'>Yayyyyyyy!!</p>
        <p className='text-3xl mt-5'> Happy Valentine's Day!!🤭❤️</p>
        <Link to = "/gifts" className='text-xl'>Click here! Something is for you →</Link>
    </div>
  )
}

export default Success
