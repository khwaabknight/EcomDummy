import React from 'react'
import { Link } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import clsx from 'clsx';
import Rating from '../common/Rating';

const GridItem = ({product,addToCart}) => {
    const { id, title, thumbnail, price,category,rating } = product;
  return (
    
        <div className='bg-gray-700 rounded-md overflow-hidden'>
          <Link to={`/products/${id}`}>
            <figure className=' flex justify-center items-center relative overflow-hidden w-auto cursor-pointer bg-white 
            '>
                <img src={thumbnail} alt={title} className='max-w-[95%] h-60 mt-2 object-cover hover:scale-110 transition duration-500 ease-in-out'/>
                <figcaption className="caption absolute top-2 right-2 bg-slate-900 opacity-90 text-gray-100 font-thin text-sm uppercase px-3 py-1 rounded-3xl">{category}</figcaption>
            </figure>
            </Link>

            <div className="p-2 mx-4 flex flex-col gap-2">
              <div className="flex justify-between items-center ">
                <h3 className='text-gray-100 font-semibold text-base select-none'>{title}</h3>
                <Rating rating={rating}/>
              </div>
              <div className='flex justify-between items-center'>
                <p className="text-gray-50 select-none">$ {price}</p>
                <button className='bg-yellow-500 flex items-center px-4 py-1 rounded gap-3 hover:bg-yellow-400' onClick={() => {addToCart(id)}}> 
                  <p>Add to Cart</p>
                  <FaCartShopping />
                </button>
              </div>

            </div>
            

        </div>
    
  )
}

export default GridItem