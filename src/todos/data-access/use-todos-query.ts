import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "./gateway";

export function useTodosQuery() {
  return useQuery({ queryKey: ["todos"], queryFn: fetchTodos });
}
