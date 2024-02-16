import React from 'react'
import GridItem from './GridItem'

const GridView = ({products,addToCart}) => {
  return (
    <div className='md:p-10'>
        <div className='w-full mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8'>
            {
                products.map((product) => {
                    return <GridItem key={product.id} product={product} addToCart={addToCart}/>
                })
            }

        </div>
    </div>
  )
}

export default GridView