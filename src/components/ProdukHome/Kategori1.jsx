import React from "react";
import { Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons"; // Import the shopping cart icon

const items = [
  {
    imgUrl: "https://via.placeholder.com/300",
    nama_barang: "HandPhone",
    harga : "Rp.2.000.000",
    desc : "Lorem Ipsum"
  },
  {
    imgUrl: "https://via.placeholder.com/300",
    nama_barang: "Laptop",
    harga : "Rp.2.000.000",
    desc : "Lorem Ipsum"
  },
  {
    imgUrl: "https://via.placeholder.com/300",
    nama_barang: "Komputer",
    harga : "Rp.2.000.000",
    desc : "Lorem Ipsum"
  },
  {
    imgUrl: "https://via.placeholder.com/300",
    nama_barang: "Tablet",
    harga : "Rp.2.000.000",
    desc : "Lorem Ipsum"
  },
  {
    imgUrl: "https://via.placeholder.com/300",
    nama_barang: "Bebas",
    harga : "Rp.2.000.000",
    desc : "Lorem Ipsum"
  },
];

function Kategori1() {
  return (
    <>
      <h1 className="bg-slate-200 p-1 w-1/12 m-5 ml-[4rem] text-center rounded-md">
        Kategori 1
      </h1>
      <div className="flex justify-center">
        {items.map((item, index) => (
          <div key={index} className="w-[14.1rem] ml-2 px-2">
            <div className="bg-white rounded-md overflow-hidden shadow-lg mb-10">
              <img src={item.imgUrl} alt="" className="w-full" />
              <div className="py-8 px-6 font-bold text-[20px]">{item.nama_barang}</div>
              <div className="px-7 -mt-7">{item.harga}</div>
              <div className="px-7 ">{item.desc}</div>
              <div className="ml-[100px] p-2">
              <Button icon={<ShoppingCartOutlined />}></Button> 
              <Button className="bg-[#F14320] text-white">Beli</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Kategori1;
