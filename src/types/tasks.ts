export interface ITask {
  id: string;
  text: string;
}

export interface ITodo {
  id: number;
  text: string;
  date: Date;
  completed: boolean;
  setEditTodo: React.Dispatch<React.SetStateAction<string | null>>;
}
