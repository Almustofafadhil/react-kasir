import React from 'react'
import Image from '../mainLogin/Image'
import MainInput from '../mainLogin/MainInput'

  
function Header() {
  return (
    <div>
      <div className='flex p-[5%]'>
        <div className='mt-4'>
        <Image />
        </div>
         <div className='ml-[10.6rem]'>
          <MainInput />
         </div>
      </div>
    </div>
  )
}

export default Header