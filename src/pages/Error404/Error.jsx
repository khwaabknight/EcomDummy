import React from 'react'
import { Link } from 'react-router-dom'
import { IoArrowBack } from "react-icons/io5";

const Error = () => {
  return (
    <div className='flex flex-col gap-10 items-center justify-center p-20'>
        <img src='/404-error.png' alt='error' className='md:w-96 max-w-[90%]'/>
        <button className='bg-yellow-500 px-5 py-2 hover:bg-yellow-400 hover:scale-105 '>
            <Link to={'/'} className='flex gap-3 justify-center items-center text-gray-800 font-semibold text-xl'>
                <IoArrowBack />
                <p>Go Back</p>
            </Link>
        </button>
    </div>
  )
}

export default Error