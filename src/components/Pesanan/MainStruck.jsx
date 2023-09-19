import React from "react";

function MainStruck() {
  const products = [
    { name: "Laptop", description: "Desc", quantity: 1, price: "Rp. 20.000" },
    { name: "Laptop", description: "Desc", quantity: 1, price: "Rp. 20.000" },
    // Tambahkan produk lainnya jika diperlukan
  ];

  const Pengiriman = [
    { name: "Dana", price: "Rp. 10.000" },
    { name: "Goopay", price: "Rp. 10.000" },
    // Tambahkan produk lainnya jika diperlukan
  ];

  return (
    <div className="bg-gray-200 mx-auto my-9 py-10 px-[3rem] w-[60rem] rounded-[10px] shadow-slate-800">
      <h1 className="font-bold text-xl text-gray-600">Product</h1>
      <div className="text-gray-600 text-lg">
        {products.map((product, index) => (
          <div key={index} className="flex justify-between my-2">
            <div>
              <h1>{product.name}</h1>
              <h2>{product.description}</h2>
            </div>
            <div>
              <h1>x {product.quantity}</h1>
            </div>
            <div>
              <h1>{product.price}</h1>
            </div>
          </div>
        ))}
      </div>
      <hr className="p-[1px] bg-gray-600" />
      <h1 className="font-bold text-gray-600 text-xl my-3">Jasa Pengiriman</h1>
      <div className="text-gray-600 text-xl">
        {Pengiriman.map((product, index) => (
          <div key={index} className="flex justify-between my-2">
            <div>
              <h1>{product.name}</h1>
              <h2>{product.description}</h2>
            </div>
            <div>
              <h1>{product.quantity}</h1>
            </div>
            <div>
              <h1>{product.price}</h1>
            </div>
          </div>
        ))}
      <hr className="p-[1px] bg-gray-600"/>
      <div className="flex justify-between text-[25px] mt-5">
        <h1>Total Pembayaran</h1>
        <h1>Rp.10.000</h1>
      </div>
      </div>
    </div>
  );
}

export default MainStruck;
