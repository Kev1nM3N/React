import React, { useState } from 'react'

function ArrayPractice({main}) {
    const [arr, setArr] = useState([1, 2])

    function addPlus () {
        setArr((prevArray) => [...prevArray, `+`])
    }

    function addMinus(params) {
        
    }

  return (
    <div className='flex items-center justify-center w-full h-20 outline outline-red-600 text-center'>
        <h1>Shopping</h1>
        <button onClick={addPlus} className='py-1 px-6 outline mx-4 outline-blue-700 text-lg'>+</button>
        <h1>You have {arr}  apples</h1>
        <button onClick={addMinus} className='py-1 px-6 outline mx-4 outline-blue-700 text-lg'>-</button>
        <button onClick={main}>test</button>
    </div>
  )
}

export default ArrayPractice