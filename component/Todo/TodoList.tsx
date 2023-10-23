import { Todo } from "./Todo";
import fetchTodos from "@/actions/fetchTodos";

async function TodoList() {
  const todos = await fetchTodos();
  console.log("Todos:", todos);

  let content;
  if (!todos || todos.length === 0) {
    content = <p>No Todos Available</p>;
  } else {
    const sortedTodos = todos.reverse();

    content = (
      <>
        {sortedTodos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </>
    );
  }

  return content;
}

export { TodoList }
