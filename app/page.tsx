import { HomeSection } from "@/component/HomeSection"
import { AddTodo } from "@/component/Todo/AddTodo"
import { TodoList } from "@/component/Todo/TodoList"

export default async function Home() {


  return (
    <main className="flex flex-col justify-center items-center">
      {/* <HomeSection /> */}
      <AddTodo />
      <TodoList />
    </main>
  )
}
