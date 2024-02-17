import React from 'react'
import ListItem from './ListItem'

const ListView = ({products,addToCart}) => {
  return (
    <div className='p-10'>
      <div className='flex flex-col gap-8'>
        {
          products.map((product,index) => {
            return <ListItem key={product.id} product={product} addToCart={addToCart} index={index}/>
          })
        }

      </div>
    </div>
  )
}

export default ListView