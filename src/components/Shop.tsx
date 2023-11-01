"use client";

import React from "react";
import Image from 'next/image'
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { addCard } from "../../redux/slice/shoppingSlice";

const Shop = () => {
  const data = useAppSelector((state) => {
    // console.log("Full state:", state);
    return state.shop.data || [];
  });
  const dispatch = useAppDispatch();
  const shopList = useAppSelector((state) => {
    // console.log("Full state:", state);
    return state.shop.shoppingCard || [];
  });

  const isItemExist = (id: string | number) => {
    return shopList.some((item) => item.id === id);
  }

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
            onClick={() => dispatch(addCard(item))}
            className={`bg-blue-700 w-full text-center mt-5 py-2 hover:bg-blue-800
          rounded-md ${isItemExist(item.id) && "pointer-events-none bg-slate-500"}`}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export { Shop };