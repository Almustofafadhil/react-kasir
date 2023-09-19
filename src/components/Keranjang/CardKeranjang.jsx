import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

const data = [
  {
    id: 1,
    title: "Product 1",
    description: "Decs Product 1.",
    price: "Rp.20.000",
    imageSrc: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    title: "Product 2",
    description: "Decs Product 2.",
    price: "Rp.20.000",
    imageSrc: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    title: "Product 3",
    description: "Decs Product 3.",
    price: "Rp.20.000",
    imageSrc: "https://via.placeholder.com/300",
  },
];

export function CardKeranjang() {
  return (
    <div>
      {data.map((item) => (
        <Card key={item.id} className="w-[25rem] h-[28vh] mt-10 flex-row">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-3/6 shrink-0 rounded-r-none"
          >
            <img
              src={item.imageSrc}
              alt={item.title}
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <Typography className="font-bold">{item.title}</Typography>
            <Typography className="text-[14px]">{item.description}</Typography>
            <Typography className="text-[14px]">{item.price}</Typography>
            <a href="#">
              <Button variant="text" className="flex items-center mt-10">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </a>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
