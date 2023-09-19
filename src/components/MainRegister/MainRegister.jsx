import React from 'react'
import PunyaAkun from './PunyaAkun'

function MainRegister() {
  return (
    <div>
    <center>
      <div className="border border-gray-400 rounded-[2px] w-[25rem] h-[50vh] ">
        <h1 className="text-3xl mt-10 text-[#0071FF] font-bold">TOKO KU</h1>
        <input
          type="text"
          className="text-black bg-gray-200 p-2 w-[20rem] rounded-md mt-5"
          name=""
          id=""
          placeholder="Username or Email"
          />
        <br />
        <input
          type="text"
          className="text-black bg-gray-200 p-2 w-[20rem] mt-1  rounded-md"
          name=""
          id=""
          placeholder="Password"
          />
        <br />
        <button className="mt-10 border bg-[#6CAEFF] w-[50%] p-1 rounded text-[#F5F5F5]">Daftar</button>
      </div>
    </center>
    <PunyaAkun />
    </div>
  )
}

export default MainRegister