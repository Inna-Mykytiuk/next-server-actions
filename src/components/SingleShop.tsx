import React from "react";
import Image from 'next/image'
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { removeCard } from "../../redux/slice/shoppingSlice";

const SingleShop = () => {
  const data = useAppSelector((state) => {
    // console.log("Full state:", state);
    return state.shop.shoppingCard || [];
  });
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col gap-4 my-4">
      {data.map((item, i) => (
        <div
          key={i}
          className="flex items-center justify-between bg-slate-700 p-2 rounded-md">
          <div className="flex items-center gap-6">
            <Image
              width={100}
              height={100}
              className="w-[250px] mx-auto" src={item.image_url} alt="img" />
            <div>
              <p>{item.title}</p>
              <p>${item.price}</p>
            </div>
          </div>
          <button
            onClick={() => dispatch(removeCard(item))}
            className="hover:opacity-75 text-[1.5rem]">🗑️</button>
        </div>
      ))}
    </div>
  );
};

export { SingleShop };