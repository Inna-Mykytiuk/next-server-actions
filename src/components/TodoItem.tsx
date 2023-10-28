"use client";
import {
  AiTwotoneDelete,
  AiTwotoneEdit,
  AiOutlineCheckCircle,
} from "react-icons/ai";
import { FaTimes } from "react-icons/fa";

import React, { useState } from "react";
import moment from "moment/moment";
import Layer from "./Layer";

interface TodoSetProps {
  setEditTodo: React.Dispatch<React.SetStateAction<string | null>>;
}

// interface TodoItemProps {
//   id: number;
//   text: string;
//   date: Date;
//   completed: boolean;
//   setEditTodo: React.Dispatch<React.SetStateAction<string | null>>;
// }
// interface ToDoState {
//   todoList: TodoItemProps[];
// }

const TodoItem = ({ setEditTodo }: TodoSetProps) => {
  const [showText, setShowText] = useState(false);
  const [showFullText, setShowFullText] = useState("");

  const fullText = (id: number) => {
    const todoText = todo.find((todo) => todo.id === id);
    if (todoText) {
      setShowFullText(todoText.text);
      setShowText(true);
    }
  };

  const todo = [
    {
      id: 1,
      text: "Hello world",
      date: new Date(),
      completed: false,
    },
    {
      id: 2,
      text: "Hello world",
      date: new Date(),
      completed: false,
    },
  ];

  return (
    <div id="grid">
      {todo.map((todo, i) => (
        <div key={i} className="bg-todo p-2 rounded-md w-full h-full">
          <span className="text-xs text-slate-400">
            {moment(todo.date).fromNow()}
          </span>

          <div className="flex flex-col justify-between h-[80%]">
            <h1
              className={`pt-3 text-sm ${todo.completed ? "line-through text-slate-400" : ""
                }`}>
              {todo.text.substring(0, 36)}
              {todo.text.length > 36 && (
                <button
                  onClick={() => fullText(todo.id)}
                  className="text-red-400 text-xs hover:text-red-600">
                  ...more
                </button>
              )}
            </h1>

            <div className="flex items-center justify-end gap-1 py-2">
              <span className="cursor-pointer hover:text-slate-500">
                <AiTwotoneDelete />
              </span>
              <span className="cursor-pointer hover:text-slate-500">
                <AiTwotoneEdit />
              </span>
              <span className="cursor-pointer hover:text-slate-500">
                <AiOutlineCheckCircle />
              </span>
            </div>
          </div>

          {showText && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-600/75">
              <span
                onClick={() => setShowText(false)}
                className="absolute top-10 right-10 text-xl cursor-pointer hover:text-slate-500">
                <FaTimes />
              </span>
              <div className="w-[25rem] h-[25rem] bg-todo rounded-md">
                <Layer text={showFullText} />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export { TodoItem }
