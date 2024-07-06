import React from 'react'
import { Link, useParams } from 'react-router-dom';

const LoginPage = () => {

    // const { LoginPage } = useParams();

  return (
    <div className='xl:border xl:rounded-xl bg-white my-[rem] xl:mx-[25rem]'>
        <div>
            {/* <img src={image} alt="" /> */}
            <h1 className='flex flex-col items-center xl:pb-[5rem] pb-[2rem] pt-[2rem] font-bold text-center xl:ml-0 ml-[4rem] mr-[5rem] xl:mr-0 text-[25px]'>SIGN IN TO YOUR ACCOUNT</h1>
        </div>
        <div className='xl:ml-[8rem] xl:pb-[1.5rem] pb-[1.5rem] xl:pl-0 pl-[2rem]'>
            <h2 className='pb-4 text-[18px]'>Email</h2>
            <input type="email" placeholder='example@mail.com' className='border border-gray-950 py-[1rem] xl:pr-[23rem] pr-[5rem] pl-[1rem] rounded-lg text-[23px]'/>
        </div>
        <div className='xl:ml-[8rem] xl:pb-[1.5rem] pb-[1.5rem] xl:pl-0 pl-[2rem]'>
            <h2 className='pb-4 text-[18px]'>Password</h2>
            <input type="password" placeholder='Password'className='border border-gray-950 py-[1rem] xl:pr-[23rem] pr-[5rem] pl-[1rem] rounded-lg text-[23px]'/>
        </div>
        <div className='flex justify-between xl:ml-[8rem] ml-[2rem] mr-[2rem] pb-[2rem]'>
            <div className='flex gap-2'>
                <div>
                    <button className='xl:rounded-md rounded-md border-gray-500 border xl:p-[.8rem] p-[.5rem] '></button>
                </div>
                <h3 className='xl:text-[23px] text-[14px]  pt-2'>Keep me signed in</h3>
            </div>
            <h3 className='text-[#1F3FEBCC] xl:mr-[8rem] xl:text-[23px] text-[14px] pt-2'>Reset Password</h3>
        </div>
        <div className='xl:ml-[8rem] pb-[2rem] '>
            <button className='border rounded-[5px] border-[#F31D1D] py-[.5rem] xl:px-[17.3rem] px-[8rem] xl:mr-[5rem] xl:ml-0 ml-[2rem] bg-[#F31D1D] text-white text-[23px] mb-[2rem]'>Sign In</button>
            <h2 className='xl:mx-[8rem] mx-[4rem] xl:text-[23px] text-[14px] '>Don't have an account? 
            <Link to={'/signupPage'}>
                <span className='text-[#1F3FEBCC]'> Create one</span>
            </Link>
            </h2>
        </div>
    </div>
  )
}

export default LoginPage