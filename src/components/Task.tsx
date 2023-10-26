import React from 'react'
import { ITask } from '@/types/tasks'

interface TodoProps {
  task: ITask
}

const Task: React.FC<TodoProps> = ({ task }) => {
  return (
    <tr key={task.id}>
      <td>{task.text}</td>
      <td>Blue</td>
    </tr>
  )
}

export { Task }
