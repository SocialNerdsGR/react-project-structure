export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export function isCompleted(todo: Todo): boolean {
  return todo.completed;
}
