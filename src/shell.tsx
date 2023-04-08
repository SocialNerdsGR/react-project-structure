import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

export function Shell() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
