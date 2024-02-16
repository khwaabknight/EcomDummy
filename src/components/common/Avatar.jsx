import React from 'react'

const Avatar = ({imgsrc,size}) => {
  return (
    <div
        className={`inline-block rounded-full overflow-hidden ${size || "h-9 w-9 md:h-11 md:w-11"}  bg-gray-200 hover:scale-105 p-px ring-2 ring-gray-400`}
    >
        <img 
            alt="Avatar"
            src={imgsrc || "/placeholder.jpg"}
            fill
        />
    </div>
  )
}

export default Avatar