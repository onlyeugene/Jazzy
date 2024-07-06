import React, { useState } from 'react'
import { products } from './ProductsDb'
import ProductCard from './ProductCard'
import pic from '../../../../assets/Images/productImage.png'


const Products = () => {
  return (
    <div id="products" className='flex xl:gap-[3rem] xl:ml-[15rem] ml-5 mt-[3rem]'>
        <img src={pic} alt="" className='xl:w-[22rem]  xl:block hidden md:block '/>
        <div className=' xl:grid xl:grid-cols-3 gap-[1rem] md:grid  grid-col-1 md:grid-cols-2 '>
    {products.map((product) => () =>
              <ProductCard
                  key= {product.id}
                  image= {product.image}
                  burgerType= {product.burgerType}
                  price= {product.price}
                  ingredient1= {product.ingredient1}
                  ingredient2= {product.ingredient2}
                  ingredient3= {product.ingredient3}
                  ingredient4= {product.ingredient4}
                  ingredient5= {product.ingredient5}
              />
          )}
        </div>
    </div>
  )
}

export default Products