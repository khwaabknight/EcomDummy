import React, { useEffect, useState } from 'react'
import ListItem from '../../components/Products/ListItem';
import CartBox from '../../components/Cart/CartBox';

const Cart = () => {
    const [cart, setCart] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []);
    const [total, setTotal] = useState(localStorage.getItem('total') ? JSON.parse(localStorage.getItem('total')) : 0);

    const removeFromCart = (index) => {        
        if(index > -1 && total > 0) {
            let newTotal = total - cart[index].price;
            setTotal(newTotal);
            localStorage.setItem('total', JSON.stringify(newTotal));
            let newCart = [...cart];
            newCart.splice(index,1);
            setCart(newCart);
            localStorage.setItem('cart', JSON.stringify(newCart));
            console.log(newCart);
            console.log(index);
        }
    }


  return (
    <div className='flex justify-center items-center w-10/12 mx-auto mt-10'>
        <div className='grid md:grid-cols-3 gap-6 md:p-10 p-5'>
            <div className='col-span-2 md:border-r border-gray-700  md:order-1 order-2'> 
                {
                    cart.length === 0 ? (
                    <h1 className='text-3xl text-gray-100 text-center'>
                        Your cart is empty
                    </h1>) : (<div className='flex flex-col md:gap-4 gap-8 md:pr-7'>
                        {
                            cart.map((product,index) => (
                                <ListItem key={product.id} product={product} removeFromCart={removeFromCart} index={index}/>
                            ))
                        }
                    </div>)
                }
            </div>
            <div className='md:order-2 order-1 md:col-span-1 col-span-3  w-full'>
                <CartBox cart={cart} total={total} setCart={setCart} setTotal={setTotal}/>
            </div>
        </div>
        
    </div>
  )
}

export default Cart