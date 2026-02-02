import React from 'react'
import { Link } from 'react-router-dom'

const Regret = () => {
  return (
    <div className='card-component flex flex-col items-center justify-center
        text-2xl text-center'>
      I know that I can't include all of your favourite bengali songs in it...still I've tried😔<br/>
      Please see the last gift for you....
      <Link to = "/gifts" className='bg-[#f4e5c2] w-[200px] rounded-lg py-2 text-center
                             transition-all duration-300 hover:scale-110'>Click here!</Link>
    </div>
  )
}

export default Regret
