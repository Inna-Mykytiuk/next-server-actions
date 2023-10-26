import React from 'react'
import { AddTask } from './AddTask'
import { TodoList } from './TodoList'
import { getAllTodos } from '@/api';

export async function TodosTask() {
  const tasks = await getAllTodos();
  console.log(tasks);
  return (
    <div className='max-w-4xl mx-auto mt-4'>
      <div className='text-center my-5 flex flex-col gap-4'>
        <h1 className='text-2xl font-bold'>Todo List App</h1>
        <AddTask />
        <TodoList tasks={tasks} />
      </div>
    </div>
  )
}


