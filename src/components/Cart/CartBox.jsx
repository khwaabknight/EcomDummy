import React from 'react'
import { FaTrash } from "react-icons/fa";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";


const CartBox = ({cart,total}) => {
  return (
    <div className='flex flex-col w-full'>
        <h2 className='md:text-5xl text-4xl text-gray-100 font-light font-mono p-3 border-b border-gray-700'>Cart Summary</h2>
        <div className=' text-gray-100 p-3 flex items-end gap-2'>
            <p className='text-xl'>Total Items :</p>
            <p className='text-3xl'>{cart.length}</p>
        </div>
        <div className=' text-gray-100 p-3 flex items-end gap-2'>
            <p className='text-xl'>Cart Total :</p>
            <p className='text-3xl'>${total}</p>
        </div>
        <div className='flex flex-col md:px-10 gap-2'>
            <button className="border-2 px-8 py-3 border-yellow-500 text-yellow-400 font-semibold hover:bg-gray-700 flex items-center justify-center gap-5">
                <p>Remove All</p>
                <FaTrash />
            </button>
            <button className='bg-yellow-500 flex items-center justify-center px-8 py-3 gap-7 hover:bg-yellow-400'>
                <p>Checkout</p>
                <MdOutlineShoppingCartCheckout/>
            </button>
        </div>

    </div>
  )
}

export default CartBox