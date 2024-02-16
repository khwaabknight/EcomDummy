import clsx from 'clsx'
import React from 'react'

const Input = ({value,changeHandler,required,placeholder,name,type,customClasses}) => {
  return (
    <input 
        required = {required}
        type={type}
        value={value}
        onChange={changeHandler}
        placeholder={placeholder}
        name={name}
        className={clsx(customClasses || 'bg-gray-700 rounded-md text-gray-50 w-full px-4 py-2 focus:outline-none')}
    />
  )
}

export default Input