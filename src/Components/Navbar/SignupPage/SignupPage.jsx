import React from 'react'
import { Link, useParams } from 'react-router-dom';

const SignupPage = () => {
    const { SignupPage } = useParams();

  return (
    <div>
        <div className='xl:border rounded-xl bg-white xl:mx-[25rem]'>
            <h1 className='uppercase text-[25px] xl:mx-0 mx-[4rem] font-bold flex flex-col items-center text-center xl:pb-[5rem] pb-[2rem] pt-[2rem] '>Create Your Account</h1>
            <div className='xl:ml-[8rem] ml-[2rem] pb-[1.5rem]'>
                <h1 className='pb-4 text-[18px]'>First Name</h1>
                <input type="name" placeholder='First Name'  className='border border-gray-950 py-[1rem] xl:pr-[23rem] pr-[5rem] pl-[1rem] rounded-lg text-[23px]'/>
            </div>
            <div className='xl:ml-[8rem] ml-[2rem] pb-[1.5rem]'>
                <h1 className='pb-4 text-[18px]'>Last Name</h1>
                <input type="name" placeholder='Last Name' className='border border-gray-950 py-[1rem] xl:pr-[23rem] pr-[5rem] pl-[1rem] rounded-lg text-[23px]'/>
            </div>
            <div className='xl:ml-[8rem] ml-[2rem] pb-[1.5rem]'>
                <h1 className='pb-4 text-[18px]'>Phone Number</h1>
                <input type="email" placeholder='example@mail.com' className='border border-gray-950 py-[1rem] xl:pr-[23rem] pr-[5rem] pl-[1rem] rounded-lg text-[23px]'/>
            </div>
            <div className='xl:ml-[8rem] ml-[2rem] pb-[1.5rem]'>
                <h1 className='pb-4 text-[18px]'>Email</h1>
                <div className='relative'>
                    <button className='border rounded-lg py-[1.26rem]  ml-[.05rem] mt-[.05rem] pr-[1rem] pl-[1rem] absolute border-gray-300 bg-gray-300 font-bold'>+234</button>
                    <input type="email" className='border border-gray-950 py-[1rem] xl:pr-[23rem] pr-[5rem] pl-[1rem] rounded-lg text-[23px]'/>
                </div>
            </div>
            <div className='xl:ml-[8rem] ml-[2rem] pb-[1.5rem]'>
                <h1 className='pb-4 text-[18px]'>Password (8 minimum characters) </h1>
                <input type="password" placeholder='Password' className='border border-gray-950 py-[1rem] xl:pr-[23rem] pr-[5rem] pl-[1rem] rounded-lg text-[23px]'/>
            </div>
            <div className='xl:ml-[8rem] ml-[2rem] pb-[1.5rem]'>
                <h1 className='pb-4 text-[18px]'>Confirm Password</h1>
                <input type="password" placeholder='Password' className='border border-gray-950 py-[1rem] xl:pr-[23rem] pr-[5rem] pl-[1rem] rounded-lg text-[23px]'/>
            </div>
            <div className='flex gap-2 xl:ml-[8rem] ml-[2rem] pb-[2rem]'>
                <div>
                    <button className='rounded-md border-gray-500 border xl:p-[.99rem] p-[.4rem]'></button>
                </div>
                <h1 className='xl:text-[23px] text-[14px] xl:pt-0 pt-2'>Keep me signed in</h1>
            </div>
            <div className='xl:ml-[rem] ml-[rem] pb-[1.5rem]'>
                <button className='border rounded-[5px] border-[#F31D1D] py-[.5rem] xl:px-[17.3rem] xl:ml-[8rem] ml-[2rem] px-[8rem] xl:mr-[5rem] mr-[2rem] bg-[#F31D1D] text-white text-[23px] mb-[2rem]'>Sign In</button>
                <h1 className='xl:ml-[20rem] ml-[4.5rem] text-[23px] mb-[1rem]'>Have an account? 
                <Link to={`/loginPage`}>
                    <a href=""><span className='text-[#6279F1]'> Sign In</span></a>
                </Link>
                </h1>
                <h2 className='text-[23px] xl:mx-[10rem] mx-[2.5rem] text-center mb-[1rem]  xl:text-center '>By Creating your Quickmunch account, you agree to the  <span> <span className='text-[#6279F1]'>Terms of use</span> and <span className='text-[#6279F1]'>Privacy Policy</span></span></h2>
            </div>
        </div>
    </div>
  )
}

export default SignupPage