"use client";
import React from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { decrement, increment, reset } from "../../redux/slice/counterSlice";

const CounterElement = () => {
  const counter = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <main className="w-full h-screen text-black">
      <div className="text-center py-[10rem] flex items-center gap-8 justify-center">
        <button
          className="border px-3 py-2 rounded-md hover:bg-gray-200"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{counter}</span>
        <button
          className="border px-3 py-2 rounded-md hover:bg-gray-200"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          className="border px-3 py-2 rounded-md hover:bg-gray-200"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
    </main>
  );
};

export { CounterElement };
