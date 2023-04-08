import { object, string } from "yup";

export const validationSchema = object().shape({
  title: string().required(),
});
