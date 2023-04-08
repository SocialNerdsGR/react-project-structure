import axios from "axios";
import { Todo } from "../domain/todo";

export async function fetchTodos() {
  return axios.get("/todos");
}

export async function createTodo(todo: Omit<Todo, "id">) {
  return axios.post("/todos", { todo });
}
