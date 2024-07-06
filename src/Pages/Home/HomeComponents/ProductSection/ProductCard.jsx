import React, { useState } from 'react'

function ProductCard  (prop){
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount (count +1);
    }

    const handleDecrement = () => {
        if (count > 0){
            setCount(count -1)
        }
    }
    const AddtoCart = () =>{
        setCount(0)
    }
  return (
    <div className='xl:pb-0 pb-[2rem]'>
        <div>
            <img src={prop.image} alt="" className='xl:w-full xl:h-full w-[22rem] h-[15rem]'/>
        </div>
        <div className='border py-[.5rem] rounded-md border-red-200  '>
            <div>
                <h2 className='text-[11px] pb-5 pt-2 px-1'>{prop.burgerType}</h2>
            </div>
            <div className='flex pb-[1rem]'>
                <div>
                    <h1 className='text-[11px] text-[#878787] pr-[6rem] pl-1'>Total Price</h1>
                    <p className='pl-1'>#{prop.price}</p>
                </div>
                <div className='xl:ml-0 ml-[6rem]'>
                    <button className='border py-[.1rem] px-[.2rem] rounded-md border-red-400 bg-red-200'> 
                        <span className='border mr-[1rem] border-red-400 rounded-sm px-1 text-red-700 bg-red-50' onClick={handleDecrement}>-</span>
                        {count}
                        <span className='border ml-[1rem] border-red-400 rounded-sm px-1 text-red-700 bg-red-50' onClick={handleIncrement}>+</span>
                    </button>
                    
                </div>
            </div>
            <div className='flex pb-[1.5rem] xl:gap-3 gap-9'>
                <img src={prop.ingredient1} alt="" />
                <img src={prop.ingredient2} alt="" />
                <img src={prop.ingredient3} alt="" />
                <img src={prop.ingredient4} alt="" />
                <img src={prop.ingredient5} alt="" />
            </div>
            <button className='border py-1 xl:pr-[3.5rem] pr-[7.5rem] px-[1rem] rounded-md border-red-400 xl:ml-4 ml-4 items-center bg-[#F31D1D] text-white' onClick={AddtoCart}><span className='border  border-red-400 rounded-sm xl:mr-[3rem] mr-[5rem] px-1 bg-[#D9D9D980] text-white'>+</span>Add to Cart</button>
        </div>
    </div>
  )
}

export default ProductCard