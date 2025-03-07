import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import { App } from "./app.component";

describe("app", () => {
  it("renders hello world", () => {
    render(<App />);
    const linkElement = screen.getByText(/Hello, world/i);
    expect(linkElement).toBeInTheDocument();
  });
});
