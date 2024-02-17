import React, { useState } from 'react'

const ProductImages = ({images}) => {
    const [displayImg, setDisplayImg] = useState(0);

  return (
    <div className='grid grid-cols-7 content-center'>
        <div className='col-span-2 flex flex-col gap-2 justify-center '>
            {
                images.map((image,index) => (
                    <figure key={index} className='flex justify-center items-center '>
                        <img src={image} alt={index} onClick={() => setDisplayImg(index)} className='object-cover cursor-pointer shadow-sm w-24 hover:scale-105 hover:opacity-70 transition duration-200 ease-in aspect-square p-1 border border-gray-700'/>
                    </figure>
                ))
            }
        </div>
        <div className='col-span-5 flex items-center p-14'>
            <figure className='flex items-center justify-center'>
                <img src={images[displayImg]} alt={displayImg} className=' max-w-full h-auto'/>
            </figure>
        </div>
    </div>
  )
}

export default ProductImages