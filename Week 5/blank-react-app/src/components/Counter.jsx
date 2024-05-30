import React from 'react'
import { useState } from 'react'

function Counter() {
    const [counter, setCounter] = useState(0);

    function increment () {
        setCounter((number) => number + 2)
    }

    function decrement () {
        setCounter((number) => number - 2)
    }

  return (
    <div className='flex items-center justify-center w-full h-20 outline outline-red-600 text-center'>
        <h1>Counter</h1>
        <button onClick={increment} className='py-1 px-6 outline mx-4 outline-blue-700 text-lg'>+</button>
        {counter}
        <button onClick={decrement} className='py-1 px-6 outline mx-4 outline-blue-700 text-lg'>-</button>
    </div>
  )
}

export default Counter