import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state

interface ToDoItem {
  id: number;
  text: string;
  date: Date;
  completed: boolean;
}

interface ToDoState {
  todoList: ToDoItem[];
}

// Define the initial state using that type
const initialState: ToDoState = {
  todoList: [],
};

export const todoSlice = createSlice({
  name: "todo",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload.id
      );
    },
    updateTodo: (state, action) => {
      state.todoList = state.todoList.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            id: action.payload.id,
            text: action.payload.text,
            date: new Date(),
            completed: action.payload.completed,
          };
        } else {
          return {
            ...todo,
          };
        }
      });
    },
    todoCompleted: (state, action) => {
      state.todoList = state.todoList.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return {
            ...todo,
          };
        }
      });
    },
  },
});

export const { addTodo, removeTodo, updateTodo, todoCompleted } =
  todoSlice.actions;
export default todoSlice.reducer;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;
