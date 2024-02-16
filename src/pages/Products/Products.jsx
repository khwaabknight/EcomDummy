import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios';
import ProductCard from '../../components/Products/ProductCard';

const Products = () => {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products').then((res) => {
      console.log(res.data.products)
      setProductsList(res.data.products)
    }).catch((error) => {
      console.log("error while fetching products:",error)
    })
  },[setProductsList]);
  return (
    <Navbar >
      {
        productsList.length === 0 ? 
        <p>Loading...</p> :   
        <div className='flex flex-col items-center justify-center gap-2 max-h-dvh w-10/12'>        
          <ProductCard product={productsList[0]}/>
          <ProductCard product={productsList[1]}/>
          <ProductCard product={productsList[2]}/>
        </div>
      }
    </Navbar>
  )
}

export default Products