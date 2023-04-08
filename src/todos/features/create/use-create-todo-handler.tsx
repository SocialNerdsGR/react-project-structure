import { useCallback } from "react";
import { useCreateTodoMutation } from "../../data-access/use-create-todo-mutation";
import { Todo } from "../../domain/todo";

export function useCreateTodoHandler() {
  const { mutate } = useCreateTodoMutation();

  const createTodo = useCallback(
    (todo: Omit<Todo, "id">) => {
      mutate(todo);
    },
    [mutate]
  );

  return { createTodo };
}
