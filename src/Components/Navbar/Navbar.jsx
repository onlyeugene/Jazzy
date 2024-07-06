import React, { useState } from 'react'
import image1 from '../../assets/Images/logo.svg'
import image2 from '../../assets/Images/location.svg'
import image3 from '../../assets/Images/plate.svg'
import image4 from '../../assets/Images/selfie.svg'
import image5 from '../../assets/Images/arrow.png'
import image6 from '../../assets/Images/cart.svg'
import { Link } from 'react-router-dom'
import clip1 from '../../assets/Images/sign.png'
import clip2 from '../../assets/Images/log.png'
import clip3 from '../../assets/Images/delete.svg'
import './Navbar.css'

const Navbar = () => {
    const [isHiddenVisible, setIsHiddenVisible] = useState(true);
    const [isHideVisible, setIsHideVisible] = useState(false);

  return (
    <div className='flex justify-between xl:mx-[10rem] mx-2 sticky' onClick={() => setIsHiddenVisible(false)}>
        <div className='flex gap-[1rem] navbar'>
            <Link to={'/'}>
                <img src={image1} alt="logo" title='burger' className='xl:ml-[5rem] ml-[1rem] w-[3rem] xl:w-[5rem]'/>
            </Link>
            <img src={image2} alt="location" title='location' className='w-[1rem] h-auto xl:ml-[4rem] hidden xl:block'/>
            <h2 className='py-[3rem] ml-[2rem] text-red-600 text-lg hidden xl:block'>Lagos, Nigeria</h2>
        </div>


        <div className='xl:mt-10 mt-3 xl:mx-20'>
            <ul className='flex '>
                <a href="#products" className='flex'>
                    <img src={image3} alt="picture of covered plate" className='xl:ml-[1rem] ml-[10rem] xl:w-[2.5rem] w-[2rem]'/>
                    <li className='ml-4 mt-2 text-red-500 hidden xl:block'>All Products</li>
                </a>

                <Link className='flex relative'onMouseOut={() => setIsHiddenVisible(true)}>
                    <img src={image4} alt="profile picture" className='xl:w-[1.8rem] w-[1.7rem] xl:ml-[4rem] mr:[1rem] ml-[1rem]'/>
                    <li className='ml-4 mt-2 text-gray-500 hidden xl:block'>Hi,Guests</li>
                    <img src={image5} alt="picture of an arrow" className='w-[1rem] h-[1rem] mt-[.8rem]  mr-[2rem] hidden xl:block'/>
                    <div className={`border xl:p-[1rem] xl:px-[1rem] p-[1rem] px-[1rem] absolute bg-white rounded-2xl font-bold top-[3rem] xlleft-[-3rem] left-[-8rem] xl:w-[18rem] w-[13rem] ${isHiddenVisible ? '' : 'hidden'}`}>


                        <Link to={`/loginPage`} onClick={() => setIsHiddenVisible(true)} onMouseOut={() => setIsHiddenVisible(false)}>
                            <button className='border flex bg-[#294BFA] border-[#294BFA] rounded-md xl:mb-2 mb-2 xl:py-[.2rem] py-[.2rem] xl:pr-[6rem] pr-[4rem]   text-white'><img src={clip1} alt="" className='w-[.8rem] mr-[3rem] xl:mr-[5rem] ml-[.2rem] mt-[.3rem]'/>Login</button>
                        </Link>


                        <Link to={`/signupPage`} onClick={() => setIsHiddenVisible(false)} >
                            <button className='border flex border-red-500 rounded-md mb-2 py-[.2rem] xl:pr-[5rem] pr-[3rem] text-[#F31D1D]'><img src={clip2} alt="" className='w-[.8rem] xl:mr-[4.5rem] mr-[2.5rem] ml-[.5rem]  xl:ml-[.5rem] xl:mt-[.3rem] mt-[.3rem]'/>Sign Up</button>
                        </Link>
                    </div>
                </Link>


                <Link className='relative' onMouseOver={() => setIsHideVisible(true)} onMouseOut={() => setIsHideVisible(false)}>
                    <li><img src={image6} alt="picture of a cart" className='xl:ml-[rem] ml-[1rem] mr-[.5rem] w-[1.4rem]'/></li>
                    <div className={`border rounded-2xl bg-white absolute  py-[1rem] px-[1rem] top-[3rem] xl:left-[-22rem] left-[-20rem] xl:w-[25rem] w-[22.5rem]  ${isHideVisible ? '' : 'hidden'}`}>
                        <h1 className='border-b-[1px] font-bold xl:pl-[.2rem] py-[.5rem] text-[20px]'>Your Order</h1>

                            
                        <div className=' flex border-b-[1px] '>
                            <h1 className='text-[17px] xl:pr-[3rem] py-[1rem]'>Double Beef Burger</h1>
                            <div className=' ml-[5rem] pt-4'>
                                <h2 className='flex justify-between text-[#C6C3C3] font-bold'><img src={clip3} alt="" className='w-[.7rem] mr-3'/>10500.0</h2>
                            </div>
                        </div>


                        <div className='border-b-[1px] text-[#878787] font-bold'>
                            <h2 className='flex justify-between py-[1rem] '>items SubTotal <span className=''>N SubTotal</span></h2>
                        </div>


                        <Link to={`/cart/CartItems`}>
                            <button className='border border-[#0C982B] bg-[#0C982B] text-white py-[.5rem] xl:px-[6rem] px-[4.5rem] mt-3 xl:ml-[1rem] ml-[.8rem] rounded-md' onClick={() => setIsHideVisible(false)}>Proceed to Checkout</button>
                        </Link>
                    </div>
                </Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar 
