"use server";
import { revalidateTag } from "next/cache";
import { Product } from "@/typing";

export const addProductToDatabase = async (e: FormData) => {
  const product = e.get("product")?.toString();
  const price = e.get("price")?.toString();

  if (!product || !price) return;

  const newProduct: Product = {
    product: product,
    price: price,
  };

  await fetch("https://64f619332b07270f705e24d7.mockapi.io/api/products", {
    method: "POST",
    body: JSON.stringify(newProduct),
    headers: {
      "Content-Type": "application/json",
    },
  });
  //Оновлення стану після додавання картки
  revalidateTag("products");
};

export const deleteProductFromDatabase = async (productId: number) => {
  if (!productId) return;

  await fetch(
    `https://64f619332b07270f705e24d7.mockapi.io/api/products/${productId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  // Update state after deleting the product
  revalidateTag("products");
};
