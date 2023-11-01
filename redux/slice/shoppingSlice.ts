import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface ShopItem {
  id: number;
  title: string;
  price: number;
  image_url: string;
}
interface ShopState {
  shoppingCard: ShopItem[];
  data: ShopItem[];
}

const data: ShopItem[] = [
  {
    id: 1,
    title: "Samsung Galaxy A51",
    price: 350,
    image_url: "https://procell.pe/wp-content/uploads/2020/10/a51.png",
  },
  {
    id: 2,
    title: "Samsung Galaxy A12",
    price: 150,
    image_url:
      "https://cdn.ycan.shop/stores/3b145e8182eb3d8cbdd6633fd0df4d38/products/mfc0KT7Cq53NqdCLRPwjTUp75zpoV2NLmNMXEG52.png",
  },
  {
    id: 3,
    title: "Samsung Galaxy S21",
    price: 450,
    image_url:
      "https://cdn.ycan.shop/stores/3b145e8182eb3d8cbdd6633fd0df4d38/products/mfc0KT7Cq53NqdCLRPwjTUp75zpoV2NLmNMXEG52.png",
  },
];

const initialState: ShopState = {
  shoppingCard: [],
  data: data,
};

export const shoppingSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.shoppingCard.push(action.payload);
    },
    removeCard: (state, action) => {
      state.shoppingCard = state.shoppingCard.filter(
        (item) => item.id !== action.payload.id
      );
    }, // Added the closing parenthesis here
  },
});

export const { addCard, removeCard } = shoppingSlice.actions;
export default shoppingSlice.reducer;
