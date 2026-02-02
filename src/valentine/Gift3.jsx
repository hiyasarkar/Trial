import React from 'react' 
import pic1 from "../assets/pic1.png"
import pic2 from "../assets/pic2.png"
import pic3 from "../assets/pic3.png"
import pic4 from "../assets/pic4.png"
import pic5 from "../assets/pic5.png"
import pic6 from "../assets/pic6.jpeg"
import picture from "../assets/picture.gif"
import { Link } from 'react-router-dom'

const Gift3 = () => {
  return (
    <div>
      <img
              src={picture}
              alt="picture"
              className="h-[180px] w-[250px] rounded-xl mx-auto"
            />
    <div className='grid grid-cols-3 mt-10 text-2xl justify-items-center place-content-center gap-7'>
      <Image value = {pic1} text = "Your favourite picture IG"/>
      <Image value = {pic2} text = "That day when I was upset and you came to make my mood"/>
      <Image value = {pic3} text = "Saraswati Puja 2025"/>
    </div>

    <div className='grid grid-cols-3 mt-10 text-2xl justify-items-center place-content-center gap-7'>
      <Image value = {pic4} text = "Saraswati Puja 2026"/>
      <Image value = {pic5} text = "Random picture at busstand"/>
      <Image value = {pic6} text = "First meet after coming from Bangalore"/>
    </div>

    <Link to = "/thanks" className='bg-yellow-600 w-[200px] rounded-lg py-2 text-center
                             transition-all duration-300 hover:scale-110 text-xl'>Click here!</Link>
    </div>
  )
}


function Image({value, text}){
    return(
        <div>
        <img src = {value} className="h-[150px] w-[300px] mx-auto rounded-xl"/>
        <p>{text}</p>
        </div>
    )
}
export default Gift3
