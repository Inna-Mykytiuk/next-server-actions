import { Todo } from "@/typing";

// export default async function fetchTodos() {
//   try {
//     const res = await fetch("http://127.0.0.1:3000/todos");
//     const text = await res.text();
//     console.log("API Response:", text);

//     const todos: Todo[] = await res.json();

//     return todos;
//   } catch (err) {
//     console.error("Error fetching todos:", err);
//     if (err instanceof Error) console.log(err.stack);
//   }
// }

export default async function fetchTodos() {
  try {
    const res = await fetch("http://127.0.0.1:3000/todos");

    if (!res.ok) {
      console.error("Error fetching todos. Status:", res.status);
      return []; // or throw an error if you prefer
    }

    const todos: Todo[] = await res.json();

    return todos;
  } catch (err) {
    console.error("Error fetching todos:", err);
    throw err;
  }
}
