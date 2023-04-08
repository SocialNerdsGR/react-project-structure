import { Formik } from "formik";
import { initialState } from "./form-state";
import { useCreateTodoHandler } from "./use-create-todo-handler";
import { Input } from "../../../shared/components/fields/input";
import { Form } from "react-router-dom";
import { validationSchema } from "./validation-schema";

export function CreateTodo() {
  const { createTodo } = useCreateTodoHandler();

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialState}
      onSubmit={(data) => {
        createTodo(data);
      }}
    >
      <Form>
        <Input name="title" type="text" label="Todo title" />
      </Form>
    </Formik>
  );
}
