"use client";
import { AiOutlinePlus } from 'react-icons/ai';
import { Modal } from './Modal';
import { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import { addTodo } from '@/utils/api-utils/todo-api';
import { v4 as uuidv4 } from "uuid";


const AddTask = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTaskValue, setNewTaskValue] = useState<string>("");

  // const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
  //   e.preventDefault();
  //   await addTodo({
  //     id: uuidv4(),
  //     text: newTaskValue,
  //   });
  //   setNewTaskValue("");
  //   setModalOpen(false);
  //   router.refresh();
  // };

  return (
    <div>
      <button
        className="btn btn-primary w-full"
        onClick={() => setModalOpen(true)}>
        Add new task
        <AiOutlinePlus size={18} className="ml-2" />
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>Add ToDo</Modal>
    </div>
  )
}

export { AddTask }
