// import { addTodo } from "@/actions/actions";

"use client";
import { useState, useTransition } from "react";

function AddTodo({ addNewTodo }: { addNewTodo: any }) {
  const [title, setTitle] = useState("");
  const [isPending, startTransition] = useTransition();
  const content = (
    <form
      className="w-full flex mb-10"
      onSubmit={(e) => {
        e.preventDefault();

        if (title.trim().length === 0) {
          return;
        }

        startTransition(() => {
          addNewTodo(title);
        });

        setTitle("");
      }}
    >
      <input
        type='text'
        name='title'
        className='text-2xl p-1 rounded-lg flex-grow w-full'
        placeholder='New Todo'
        autoFocus
        onChange={(e) => setTitle(e.target.value)}
      />

      <button
        type='submit'
        className='p-2 text-xl rounded-2xl text-black border-solid border-black border-2 max-w-xs bg-green-500 hover:cursor-pointer hover:bg-green-400'
      >
        Submit
      </button>
    </form>
  );

  return content;
}

export { AddTodo }