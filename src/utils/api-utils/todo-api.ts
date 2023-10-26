import { Todo } from "../../../typing";

const API_PATH = "http://127.0.0.1:3000/api/todos";

export const getTodos = async () => {
  try {
    const response = await fetch(API_PATH, {
      next: {
        revalidate: 0,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch todos. Status: ${response.status}`);
    }

    return (await response.json()) as Todo[];
  } catch (error) {
    console.error("Error in getTodos:", error);
    throw error;
  }
};

export const deleteTodo = async (id: string | number) => {
  return await fetch(`${API_PATH}?id=${id}`, {
    next: {
      revalidate: 0,
    },
    method: "DELETE",
  });
};

export const addTodo = async (title: string) => {
  return await fetch(API_PATH, {
    next: {
      revalidate: 0,
    },
    method: "POST",
    body: JSON.stringify({
      title,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};
