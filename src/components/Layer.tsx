import React from "react";

interface TodoProps {
  text: string
}

const Layer = ({ text }: TodoProps) => {
  return (
    <div className="p-3">
      <h1 className="text-center capitalize font-bold text-lg pb-3">
        this is your full todo text
      </h1>
      <p className="text-slate-200 font-light h-[20rem] overflow-y-auto">
        {text}
      </p>
    </div>
  );
};

export default Layer;