import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state

// interface ShopItem {
//   id: number;
//   title: string;
//   price: string;
//   image_url: string;
// }

// const data: ShopItem[] = [
//   {
//     id: 1,
//     title: "Samsung Galaxy A51",
//     price: "350",
//     image_url: "https://procell.pe/wp-content/uploads/2020/10/a51.png",
//   },
//   {
//     id: 2,
//     title: "Samsung Galaxy A12",
//     price: "150",
//     image_url:
//       "https://cdn.ycan.shop/stores/3b145e8182eb3d8cbdd6633fd0df4d38/products/mfc0KT7Cq53NqdCLRPwjTUp75zpoV2NLmNMXEG52.png",
//   },
//   {
//     id: 3,
//     title: "Samsung Galaxy S21",
//     price: "450",
//     image_url:
//       "https://cdn.ycan.shop/stores/3b145e8182eb3d8cbdd6633fd0df4d38/products/mfc0KT7Cq53NqdCLRPwjTUp75zpoV2NLmNMXEG52.png",
//   },
// ];

// interface ShopState {
//   // shopList: number[];
//   data: ShopItem[];
// }

// Define the initial state using that type
// const initialState = {
//   // shopList: [],
//   data: [
//     {
//       id: 1,
//       title: "Samsung Galaxy A51",
//       price: "350",
//       image_url: "https://procell.pe/wp-content/uploads/2020/10/a51.png",
//     },
//     {
//       id: 2,
//       title: "Samsung Galaxy A12",
//       price: "150",
//       image_url:
//         "https://cdn.ycan.shop/stores/3b145e8182eb3d8cbdd6633fd0df4d38/products/mfc0KT7Cq53NqdCLRPwjTUp75zpoV2NLmNMXEG52.png",
//     },
//     {
//       id: 3,
//       title: "Samsung Galaxy S21",
//       price: "450",
//       image_url:
//         "https://cdn.ycan.shop/stores/3b145e8182eb3d8cbdd6633fd0df4d38/products/mfc0KT7Cq53NqdCLRPwjTUp75zpoV2NLmNMXEG52.png",
//     },
//   ],
// };

interface ShopItem {
  id: number;
  title: string;
  price: string;
  image_url: string;
}
interface ShopState {
  data: ShopItem[];
}

const data: ShopItem[] = [
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

const initialState: ShopState = {
  data: data,
};

export const shopSlice = createSlice({
  name: "shop",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
});

// export const {} = shopSlice.actions;
export default shopSlice.reducer;
