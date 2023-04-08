import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTodo } from "./gateway";

export function useCreateTodoMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });
}
