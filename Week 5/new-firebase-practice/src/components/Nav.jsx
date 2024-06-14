import React from 'react'

function Nav({KDLogo, logIn, buttonText, register}) {
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
            <button onClick={logIn}>{buttonText}</button>
            <button onClick={register}>Register</button>
          </div>
    </nav>
  )
}

export default Nav