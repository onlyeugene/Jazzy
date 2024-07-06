import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const Cart = () => {
  const { CartItems } = useParams();
  const [count, setCount] = useState(0)
  
  const handleIncrement = () => {
    setCount (count +1);
}

const handleDecrement = () => {
    if (count > 0){
        setCount(count -1)
    }
}


  return (
    <div className='flex gap-[2rem] mx-[15rem]'>

      <div className='border rounded-xl w-[45rem]'>
        <div className='py-[1rem] border-b ml-[1rem] mr-[2rem]'>
          <h1 className='text-[25px] font-bold pb-[1rem]'>Review and place order</h1>
          <h2 className='text-[14px]'>Review / Add address and fulfill payments to complete your purchase </h2>
        </div>

        <div className='py-[1rem] border-b ml-[1rem] mr-[2rem]'>
          <h1 className='text-[20px] pb-[1rem]'>Recipient  Information</h1>
          <button className='border border-gray-900 rounded-md bg-gray-950 text-white py-[.2rem] px-[5rem]'>Add Recipient</button>

        </div>

        <div className='py-[1rem] border-b ml-[1rem] mr-[2rem]'>
          <h1 className='text-[20px] pb-[1rem]'>Delivery Address</h1>
          <button className='border border-gray-900 rounded-md bg-gray-950 text-white py-[.2rem] px-[3.5rem]'>Add Delivery Address</button>
        </div>

        <button className='border border-[#0C982B] rounded-md bg-[#0C982B] text-white px-[17.5rem] py-[.5rem] mt-[3rem] mb-[1rem] ml-[1rem] text-[14px]'>Place Your Order</button>
      </div>

      <div className='border w-[30rem] rounded-xl'>

        <div className='border-b '>
          <h1 className='p-[1rem] font-bold'>Your order from</h1>
        </div>

        <div className='flex border-b justify-between'>
          <div className='p-[1rem]'>
            <h2 className='font-bold text-red-600'>Double Grilled Chicken Burger</h2>
            <button className='border py-[.1rem] px-[.2rem] rounded-md border-red-400 bg-red-200'> <span className='border mr-[1rem] border-red-400 rounded-sm px-1 text-red-700 bg-red-50' onClick={handleDecrement}>-</span>{count}<span className='border ml-[1rem] border-red-400 rounded-sm px-1 text-red-700 bg-red-50' onClick={handleIncrement}>+</span></button>
          </div>

          <div className='p-[1rem] text-[14px]'>
            <img src="" alt="" />
            <h3>N 12000.0</h3>
          </div>
        </div>

        <div className='border-b p-[1rem] text-[14px]'>
          <h1 className='flex justify-between pb-[1rem]'>Items total: <span>N 12000.0</span></h1>
          <h1 className='flex justify-between pb-[1rem]'>Discount: <span>0</span></h1>
          <h1 className='flex justify-between pb-[1rem]'>Delivery Charge: <span>N 0.0</span></h1>
        </div>

        <div className='p-[1rem] text-[14px]'>
          <h1 className='flex justify-between pb-[3rem]'>Total <span>N 12000</span></h1>
        </div>
      </div>
    </div>
  )
}

export default Cart