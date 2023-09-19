import React from 'react'
import Image1 from '../components/MainRegister/Image1'
import MainRegister from '../components/MainRegister/MainRegister'
import Footer from '../components/layouts/Footer'


function Register() {
  return (
    <div>
      <div className='flex p-[5%]'>
        <Image1 />
         <div className='ml-[10.6rem]'>
          <MainRegister />
         </div>
      </div>
      <Footer />
    </div>
  )
}

export default Register