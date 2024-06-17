import React from 'react'
import Loadingstate from './Loadingstate'

function Secondhalf({loading, user1, setEmail, setPassword}) {
  return (
    <div className='flex flex-col items-center h-1/2 py-8'>
        {
        loading ? <Loadingstate /> : <h3 className='text-4xl'>Welcome <span>{user1.email}</span></h3>
        }
        <div className='my-3'>
        <h2 className='text-xl'>Your login details</h2>
        <div className='flex flex-col'>
            <div>
            <span>Email:</span>
            <input className='outline outline-1 my-2 ml-2' type='email' name='' onChange={(event) => (
                setEmail(event.target.value)
            )}/>
            </div>
            <div className='-translate-x-4'>
            <span>Password:</span>
            <input className='outline outline-1 my-2 ml-2' type='password' name='' onChange={(event) => (
                setPassword(event.target.value)
            )}/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Secondhalf