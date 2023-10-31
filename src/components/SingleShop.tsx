import React from "react";
import Image from 'next/image'

const SingleShop = () => {
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
          <button className="hover:opacity-75 text-[1.5rem]">🗑️</button>
        </div>
      ))}
    </div>
  );
};

export { SingleShop };