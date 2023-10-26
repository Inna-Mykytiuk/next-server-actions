'use client'
import { useTransition } from "react"
import { addProductToDatabase, deleteProductFromDatabase } from "@/actions/serverActions";

const AddProductButton = () => {
  // const [isPending, startTransaction] = useTransition();

  const formData = new FormData();
  formData.append("product", "Cocoa");
  formData.append("price", "21");

  return (
    <>
      <button
        onClick={() => addProductToDatabase(formData)}
        className='border bg-blue-500 text-white p-2 rounded-md'>
        Add
      </button>
      {/* <button
        onClick={() => deleteProductFromDatabase(formData)}
        className='border bg-blue-500 text-white p-2 rounded-md'>
        Add
      </button> */}
    </>
    // <button
    //   onClick={() => startTransaction(() => addProductToDatabase(formData))}
    //   className='border bg-blue-500 text-white p-2 rounded-md'>
    //   {isPending ? 'Adding' : 'Product added'}
    // </button>

  )
}

export { AddProductButton };