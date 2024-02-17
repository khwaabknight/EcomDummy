import clsx from 'clsx'
import React from 'react'
import { IoIosStar } from 'react-icons/io'

const Rating = ({rating}) => {
  return (
    <p className={clsx('text-gray-50 px-3 py-1 flex justify-center items-center rounded gap-2 select-none',rating >= 3.5 ? "bg-green-500" : rating >= 2.5 ? "bg-orange-500" : "bg-red-600")}><p>{rating}</p><IoIosStar/></p>
  )
}

export default Rating