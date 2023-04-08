import { createBrowserRouter } from "react-router-dom";
import { ListTodos } from "./todos/features/list/list-todos";
import { CreateTodo } from "./todos/features/create/create-todo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ListTodos />,
  },
  {
    path: "create",
    element: <CreateTodo />,
  },
]);
