import clsx from 'clsx';
import React from 'react'
import { FaCartShopping } from 'react-icons/fa6';
import { IoIosStar } from "react-icons/io";
import { Link } from 'react-router-dom';

const ListItem = ({product,addToCart}) => {
    const { id, title, thumbnail, price, description, rating } = product;

  return (
    <div className='grid md:grid-cols-2 hover:scale-[1.02] transition duration-200 ease-in-out'>
        <figure className='w-auto flex items-center justify-center relative overflow-hidden p-3 h-48'>
            <img src={thumbnail} alt={title} className='md:max-w-[90%] object-cover'/>
        </figure>

        <div className="flex flex-col py-3 gap-1">
            
            <div className="flex justify-between items-center ">
                <h3 className='text-2xl text-gray-100 font-medium pt-2 select-none'>{title}</h3>
                <p className={clsx('text-gray-50 px-3 py-1 flex justify-center items-center rounded gap-2 select-none',rating >= 3.5 ? "bg-green-500" : rating >= 2.5 ? "bg-orange-500" : "bg-red-600")}><p>{rating}</p><IoIosStar/></p>
            </div>
            <p className='text-gray-100 font-medium select-none'>$ {price}</p>
            <p className='text-gray-100 select-none'>{description.slice(0, 60)}...</p>

            <div className='flex md:flex-row flex-col justify-center gap-x-10 gap-y-2 mt-3'>
                <Link to={`/products/${id}`} className="border-2 px-8 py-3 border-yellow-500 text-yellow-400 font-semibold hover:bg-gray-700">
                    <button className="btn">Read More</button>
                </Link>
                <button className='bg-yellow-500 flex items-center justify-center px-8 py-3 gap-3 hover:bg-yellow-400' onClick={() => {addToCart(id)}}> 
                  <p>Add to Cart</p>
                  <FaCartShopping />
                </button>
            </div>
        </div>
    </div>
  )
}

export default ListItem