import React from "react";
import MainNavbar from "../components/Navigasion/MainNavbar";
import MainStruck from "../components/Pesanan/MainStruck";
import MainFooter from "../components/Navigasion/MainFooter";
import { Button } from "antd";

function Struck() {
  return (
    <div>
        <MainNavbar />
      <div className="px-[5%] mt-14">
        <div className="flex justify-between">
          <h1 className="bg-white border-solid border-2 px-4 rounded-xl p-1 w-[8rem] border-black text-xl">
            Keranjang
          </h1>
          <a href="">
            <Button className="bg-red-500 text-white">Delete</Button>
          </a>
        </div>
        <hr className="bg-gray-400 p-[1px] w-[72rem] mx-auto mt-2" />
        <MainStruck />
      </div>
      <div>
        <MainFooter />
      </div>
    </div>
  );
}

export default Struck;
