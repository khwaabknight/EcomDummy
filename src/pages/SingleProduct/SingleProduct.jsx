import axios from 'axios'
import React, { useState } from 'react'

const SingleProduct = () => {
    const [product, setProduct] = useState(null)

    useState(() => {
        axios.get(`https://dummyjson.com/products/${window.location.pathname.split('/')[2]}`).then((res) => {
            setProduct(res.data)
        }).catch((error) => {
            console.log("error while fetching single product:",error)
        })
    },[setProduct]);


    if(!product) {
        return <div className='flex items-center justify-center h-screen text-gray-100 font-semibold text-3xl'>No Product</div>
    }

  return (
    <div className='text-white flex items-center justify-center h-screen'>
        {/* Single Product Page */}
        {product.title}
    </div>
  )
}

export default SingleProduct