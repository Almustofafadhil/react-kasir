import React from "react";
import { Button } from "antd";
import MainNavbar from "../components/Navigasion/MainNavbar";
import { CardKeranjang } from "../components/Keranjang/CardKeranjang";
import { CheckOut } from "../components/Keranjang/CheckOut";
import MainFooter from "../components/Navigasion/MainFooter";

function Keranjang() {
  return (
    <div>
      <MainNavbar />
      <div className="px-[5%] mt-14">
        <div className="flex justify-between ">
          <h1 className="bg-white border-solid border-2 px-4 rounded-xl p-1.5 border-black text-xs">
            Keranjang
          </h1>
          <a href="">
            <Button className="bg-red-500 text-white">Delete</Button>
          </a>
        </div>
        <hr className="bg-gray-400 p-[1px] w-[73rem] mx-auto mt-2" />
        <div className="flex">
        <CardKeranjang />
        <CheckOut />
        </div>
      </div>
      <div className="main-footer mt-10">
        <MainFooter />
      </div>
    </div>
  );
}

export default Keranjang;
