import React from 'react'
import { AddTodo } from "@/component/Todo/AddTodo"
import { TodoItem } from "@/component/Todo/TodoItem"

import { Todo } from "@/typing"
import * as TodoApi from '@/utils/api-utils/todo-api'
import { revalidatePath } from "next/cache";

type Todos = Array<Todo>;

export default async function Todo() {
  const todos: Todos = await TodoApi.getTodos();

  const addNewTodo = async (title: string) => {
    "use server";
    await TodoApi.addTodo(title);
    revalidatePath("/");
  };

  const deleteTodo = async (id: string | number) => {
    "use server";
    await TodoApi.deleteTodo(id);
    revalidatePath("/");
  };
  return (
    <div className="w-[400px] max-w-[97%] mx-auto flex flex-col items-center justify-center min-h-screen py-2">
      <AddTodo addNewTodo={addNewTodo} />

      <ul className="w-full flex flex-col space-y-2">
        {(todos || []).map((todo) => (
          <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
        ))}
      </ul>
    </div>
  )
}

