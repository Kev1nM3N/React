import React, { useState } from 'react'

function Cart() {
    const [cart, setCart] = useState({
        item: `apple`, 
        quantity: 0,
    })

    function addApple () {
        setCart((prevCart) => ({
            ...prevCart,
            quantity: prevCart.quantity + 1
        }))
    }

    function removeApple () {
        setCart((prevCart) => ({
            ...prevCart,
            quantity: prevCart.quantity - 1
        }))
    }


    
  return (
    <div className='flex items-center justify-center w-full h-20 outline outline-red-600 text-center'>
        <h1>Shopping</h1>
        <button onClick={addApple} className='py-1 px-6 outline mx-4 outline-blue-700 text-lg'>+</button>
        <h1>You have {cart.quantity} apples</h1>
        <button onClick={removeApple} className='py-1 px-6 outline mx-4 outline-blue-700 text-lg'>-</button>
    </div>
  )
}

export default Cart