import { render, screen } from "@testing-library/react";
import { ListTodos } from "./list-todos";
import { describe, it, expect } from "vitest";

describe("ListTodos", () => {
  it("renders headline", () => {
    render(<ListTodos />);

    expect(screen.getByText("List todos")).toBeInTheDocument();
  });
});
