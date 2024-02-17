import React, { useEffect, useState } from 'react'
import axios from 'axios';
import FilterAndSearch from '../../components/Products/FilterAndSearch';
import ViewSelection from '../../components/Products/ViewSelection';
import GridView from '../../components/Products/GridView';
import ListView from '../../components/Products/ListView';

const Products = () => {
  const [productsList, setProductsList] = useState([]);
  const [clearFilters, setClearFilters] = useState(false);
  const [view, setView] = useState('GRID')
  const addToCart = (productId) => {
    const cartItems = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    let cartTotal = localStorage.getItem("total")
    ? JSON.parse(localStorage.getItem("total"))
    : 0;

    cartItems.push(productsList[productId]);
    cartTotal += productsList[productId].price;

    localStorage.setItem('cart', JSON.stringify(cartItems));
    localStorage.setItem('total', JSON.stringify(cartTotal));

    console.log(cartItems)
  }

  useEffect(() => {
    axios.get('https://dummyjson.com/products').then((res) => {
      console.log(res.data.products)
      setProductsList(res.data.products)
    }).catch((error) => {
      console.log("error while fetching products:",error)
    }).finally(() => {
      setClearFilters(false);
    })
  },[setProductsList,clearFilters]);

  if(productsList.length === 0 ) {
    return <p className='flex items-center justify-center h-screen'>Loading...</p>
  }

  return (
    <div className='w-4/5 py-10 grid md:grid-cols-6 mx-auto'>
      <div className='col-span-1 pt-20'>
        <FilterAndSearch productsList={productsList} setProductsList={setProductsList} clearFilters={setClearFilters}/>
      </div>
      <div className='md:col-span-5 col-span-1 md:p-10 md:border-l border-gray-700 md:ml-5'>
        <div>
          <ViewSelection view={view} setView={setView} productsLength={productsList.length}/>
        </div>
        <div>
          {
            view === 'GRID' && (
              <GridView products={productsList} addToCart={addToCart}/>
            )
          }
          {
            view === 'LIST' && (
              <ListView products={productsList} addToCart={addToCart}/>
            )
          }
        </div>

      </div>
    </div>
  )
}

export default Products