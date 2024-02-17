import React from 'react'
import Rating from '../common/Rating'

const ProductDesc = ({title,rating,brand,price,discountPercentage,description,stock}) => {
    const mrp = price + (price * discountPercentage / 100);
  return (
    <div className='flex flex-col justify-center p-4'>
        <div className='flex justify-between items-center'>
            <h3 className='text-4xl font-thin text-gray-100 font-ubuntu select-none'>{title}</h3>
            <Rating rating={rating}/>
        </div>
        <p className=' text-[8px] -mt-1 font-extralight text-gray-200 font-mono pl-1'>by {brand}</p>
        <p className='w-4/5 text-base text-gray-200 mt-2'>
            {description}
        </p>
        <div className='flex flex-col my-5 gap-1'>
            <div className='flex justify-start items-end gap-2'>
                <p className='text-base font-light text-red-300'>-{discountPercentage}%</p>
                <p className='text-5xl font-thin text-gray-100 font-mono'>${price}</p>
            </div>
            <p className='text-sm text-gray-200 font-ubuntu'>MRP: ${mrp}</p>
        </div>
        <div className='flex justify-end items-center bottom-0 right-0 p-3 text-gray-100 font-thin font-mono'>{stock >= 40 ? `In stock` : `Only ${stock} left`}</div>
    </div>
  )
}

export default ProductDesc