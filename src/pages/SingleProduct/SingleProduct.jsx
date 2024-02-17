import axios from 'axios'
import React, { useState } from 'react'
import ProductImages from '../../components/SingleProduct/ProductImages';
import ProductDesc from '../../components/SingleProduct/ProductDesc';

const SingleProduct = () => {
    const [product, setProduct] = useState(null)

    useState(() => {
        axios.get(`https://dummyjson.com/products/${window.location.pathname.split('/')[2]}`).then((res) => {
            setProduct(res.data)
            console.log(res.data)
        }).catch((error) => {
            console.log("error while fetching single product:",error)
        })
    },[setProduct]);


    if(!product) {
        return <div className='flex items-center justify-center h-screen text-gray-100 font-semibold text-3xl'>No Product</div>
    }

    return (
        <div className='flex items-center justify-center h-screen w-4/5 mx-auto '>
            <div className='grid md:grid-cols-2 w-full'>
                <div className='flex items-center justify-center border-b pb-5 md:border-none md:pb-0 border-gray-700'>
                    <ProductImages images={product.images || [product.thumbnail]}/>
                </div>
                <div className='flex items-center justify-center mr-10'>
                    <ProductDesc {...product}/>
                </div>
                
            </div>
            
        </div>
    )
}

export default SingleProduct