import { FieldAttributes, useField } from "formik";

export function Input({ label, ...props }: FieldAttributes<{ label: string }>) {
  const [field, meta] = useField(props.name);
  const isInvalid = Boolean(meta.error) && meta.touched;

  return (
    <div>
      <label>{label}</label>
      <input {...field} />
      {isInvalid && <p>{meta.error}</p>}
    </div>
  );
}
