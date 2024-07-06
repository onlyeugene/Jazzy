import React from 'react'
import image1 from '../../assets/Images/support.svg'
import image2 from '../../assets/Images/secure.svg'
import image3 from '../../assets/Images/apple logo.svg'
import image4 from '../../assets/Images/playstore.png'
import image5 from '../../assets/Images/facebook.svg'
import image6 from '../../assets/Images/twitter.svg'
import image7 from '../../assets/Images/insta.svg'
import image8 from '../../assets/Images/youtube.svg'

const Footer = () => {
  return (
    <div>
        <div className='bg-black text-white font-bold py-2 mt-[1rem]'>
            <div className='xl:flex  xl:justify-between'>
                <div className='xl:flex xl:mx-[13rem] mx-[5rem] xl:mt-[2rem] mt-[2rem] xl:gap-[3rem]'>
                    <div className='xl:flex xl:pb-0 pb-[2rem]'>
                        <div>
                            <img src={image1} alt="" className='ml-[5rem] xl:ml-0'/>
                        </div>
                        <div>
                            <h1 className='xl:text-lg text-2xl xl:ml-2 ml-[4rem] xl:text-center xl:grid flex gap-2 xl:pt-0 pt-3'>24/7 <span className='xl:text-xs text-sm xl:pt-0 pt-2'>Support</span></h1>
                        </div>
                    </div>
                    <div className='xl:flex xl:pb-0 pb-[2rem]'>
                        <div>
                            <img src={image2} alt="" className='ml-[5rem] xl:ml-0'/>
                        </div>
                        <div>
                            <h1 className='xl:text-lg text-2xl ml-2 text-center xl:pt-0 pt-3'>100% <span className='block xl:text-xs text-sm pt-1'>Payment Secured</span></h1>
                        </div>
                    </div>
                </div>
                <div className='xl:flex xl:mx-[15rem] mx-[6rem] mt-[3rem] gap-3'>
                    <div className='flex border rounded-lg py-[.5rem] mb-5 xl:mb-0'>
                        <div>
                            <img src={image3} alt="" />
                        </div>
                        <div>
                            <h1>Download on the<span className='block text-xl'>APP STORE</span></h1>
                        </div>
                    </div>
                    <div className='flex border rounded-lg py-[.5rem]'>
                        <div>
                            <img src={image4} alt="" />
                        </div>
                        <div>
                            <h1>Get it on <span className='block text-xl'>GOOGLE PLAY</span></h1>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='mt-[3rem] xl:mx-[14rem] mx-[2rem]'>
                <h1 className='text-[19.49px] ml-[7rem] xl:ml-0'>Need Help</h1>
                <p className='underline mt-4 text-[9.49px] ml-[6.5rem] xl:ml-0'>+234 803 066 2127 <span className='no-underline'>or</span></p>
                <a href="https://www.help@jazzyburger.com"><p className='underline mt-4 text-[9.49px] ml-[6.5rem] xl:ml-0'>help@jazzyburger.com</p></a>
                <h1 className='mt-[3rem] ml-[7rem] xl:ml-0'>FOLLOW US</h1>
                <div className='flex gap-[1rem] mt-3 mb-2 ml-[2.5rem] xl:ml-0'>
                    <a href="https://www.facebook.com"><img src={image5} alt="facebook" title='facebook' /></a>
                    <a href="https://www.twitter.com"><img src={image6} alt="twitter" title='twitter' /></a>
                    <a href="https://www.instagram.com"><img src={image7} alt="instagram" title='instagram'/></a>
                    <a href="https://www.youtube.com"><img src={image8} alt="youtube" title='youtube' className='mb-[rem]'/></a>
                </div>
            </div>
        </div>
        <h1 className='text-center'>Designed by @onlyeugene</h1>
    </div>
  )
}

export default Footer