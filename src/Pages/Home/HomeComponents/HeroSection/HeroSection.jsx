import React from 'react'
import image from '../../../../assets/Images/hero.png'

const HeroSection = () => {
  return (
    <div>
        <img src={image} alt="" className='xl:ml-[15rem] ml-[1rem] w-[23rem] xl:w-[75.5rem] rounded-2xl h-auto p-1 mt-3'/>
    </div>
  )
}

export default HeroSection