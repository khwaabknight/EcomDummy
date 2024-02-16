import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div className='flex gap-3 p-2 bg-zinc-700 
    mt-4 w-1/3'>
        <img src={product.thumbnail} className='aspect-video object-cover'/>
        <div className='flex flex-col'>
            <div className='flex justify-between items-center'>
                <h3>{product.title}</h3>
                <p>{product.rating}</p>
            </div>
            <div>
                {product.description}
            </div>
        </div>
        
    </div>
  )
}

export default ProductCard