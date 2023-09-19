import React from "react";
import { Card, CardBody, Radio, CardFooter, Button } from "@material-tailwind/react";

export function CheckOut() {
  return (
    <Card className="w-[24rem] h-[55vh] mx-auto mt-10">
      <h1 className="bg-blue-600 px-3 rounded-sm p-3 text-white">
        Detail Pesanan
      </h1>
      <CardBody>
        <div className="bg-white shadow-sm rounded-xl p-1">
          <h1 className="font-bold">Opsi Pengiriman</h1>
            <div className="flex items-center flex-col justify-between">
              <label htmlFor="html" className="flex items-center">
                <Radio id="html" name="type" label="Dana" />
                <span className="ml-[10rem]">Rp.10.000</span>
              </label>
              <label htmlFor="html" className="flex items-center -mt-2">
                <Radio id="html" name="type" label="Goopay" />
                <span className="ml-[9rem]">Rp.10.000</span>
              </label>
            </div>
        </div>
      </CardBody>
      <CardFooter className="flex justify-between">
        <h1>Total :</h1>
        <h1>Rp.20.000 :</h1>
      </CardFooter>
      <Button className="mx-auto w-[10rem] mt-2">Buat Pesanan</Button>
    </Card>
  );
}
