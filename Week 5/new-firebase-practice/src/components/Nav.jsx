import React from 'react'
import Loadingstate from './Loadingstate'

function Nav({KDLogo, logIn2, buttonText, register2, loading}) {
  return (
    <nav className='h-[75px] w-full flex justify-around items-center'>
          <figure>
            <img src={KDLogo} width={'150px'}></img>
          </figure>

          <ul className='flex translate-x-8 justify-evenly w-[300px] p-[2px]'>
            <li>Meetings</li>
            <li>Pendants</li>
            <li>Privacy</li>
          </ul>
          
          <div className='w-[200px] flex justify-evenly'>
            { loading ? <Loadingstate /> : 
              <>
                <button onClick={logIn2}>{buttonText}</button>
                <button onClick={register2}>Register</button>
              </>
            }
          </div>
    </nav>
  )
}

export default Nav