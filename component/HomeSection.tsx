import { Product } from "@/typing";
import { addProductToDatabase } from "@/actions/serverActions";
import { AddProductButton } from "@/component/AddProductButton";



import React from 'react'

async function HomeSection() {
  const res = await fetch('https://64f619332b07270f705e24d7.mockapi.io/api/products', {
    cache: 'no-cache',
    next: {
      tags: ['products']
    }
  })

  const products: Product[] = await res.json();
  return (
    <div>
      <h1 className='text-3xl font-bold text-center'>Product Warehouse</h1>

      <AddProductButton />

      <form
        action={addProductToDatabase}
        className='flex flex-col gap-5 max-w-xl mx-auto p-5'>
        <input
          name='product'
          className='border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:border-blue-500'
          placeholder='Enter Product Name' />
        <input
          name='price'
          className='border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:border-blue-500'
          placeholder='Enter Price Name' />
        {/* <input
          type="image"
          formAction={submitImage}
        /> */}

        <button className='border bg-blue-500 text-white p-2 rounded-md'>Add Profuct</button>
      </form>

      <h2 className='font-bold p-5'>List of Products</h2>

      <div className='grid grid-cols-6 gap-4'>
        {products.map((product) => {
          return (
            <div key={product.id} className='p-5 shadow'>
              <p>{product.product}</p>
              <p>${product.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export { HomeSection }
