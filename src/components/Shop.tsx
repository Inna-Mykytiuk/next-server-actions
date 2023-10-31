"use client";

import React from "react";
import Image from 'next/image'
import { useAppSelector, useAppDispatch } from "../../redux/hooks";

const Shop = () => {
  const data = [
    {
      id: 1,
      title: "Samsung Galaxy A51",
      price: "350",
      image_url: "https://procell.pe/wp-content/uploads/2020/10/a51.png",
    },
    {
      id: 2,
      title: "Samsung Galaxy A12",
      price: "150",
      image_url:
        "https://cdn.ycan.shop/stores/3b145e8182eb3d8cbdd6633fd0df4d38/products/mfc0KT7Cq53NqdCLRPwjTUp75zpoV2NLmNMXEG52.png",
    },
    {
      id: 3,
      title: "Samsung Galaxy S21",
      price: "450",
      image_url:
        "https://cdn.ycan.shop/stores/3b145e8182eb3d8cbdd6633fd0df4d38/products/mfc0KT7Cq53NqdCLRPwjTUp75zpoV2NLmNMXEG52.png",
    },
  ];
  // const data = useAppSelector((state) => {
  //   console.log("Full state:", state);
  //   return state.shop.data || [];
  // });

  // console.log("Data:", data);
  return (
    <div id="grid">
      {data.map((item, i) => (
        <div key={i} className="w-full bg-slate-700 rounded-md p-[1rem]">
          <Image
            width={100}
            height={100}
            className="w-[250px] mx-auto" src={item.image_url} alt="img" />
          <div className="py-4">
            <p>{item.title}</p>
            <p>${item.price}</p>
          </div>
          <button
            className="bg-blue-700 w-full text-center mt-5 py-2 hover:bg-blue-800
          rounded-md">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export { Shop };