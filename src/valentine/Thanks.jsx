import React from 'react'
import thanks from "../assets/thanks.gif"

const Thanks = () => {
  return (
    <div className='card-component flex flex-col items-center justify-center
        text-2xl text-center'>
      <img
                    src={thanks}
                    alt="thanks"
                    className="h-[180px] w-[250px] rounded-xl mx-auto"
                  />
                  <p className='mt-10'>I know that the whole thing is very bad, Sorry... And thanks for giving me your valuable time</p>
    </div>
  )
}

export default Thanks
