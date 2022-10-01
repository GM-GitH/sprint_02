import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ButtonGreen, ButtonYlw } from "./components/styled/StyledBtn";

describe("Green btn", () => {
  test("Button color", () => {
    render(
      <ButtonGreen type="submit" name="submit" id="submit">
        Login
      </ButtonGreen>
    );
    expect(screen.getByText("Login")).toHaveStyle("background-color: #ebf1ef");
  });
});

describe("Yellow btn", () => {
  test("Button availible", () => {
    render(<ButtonYlw label="test1" availib />);
    expect(screen.getByText("test1")).toHaveStyle("background-color: #FF9C3A");
  });

  test("Button disabled", () => {
    render(<ButtonYlw label="test2" />);
    expect(screen.getByText("test2")).toHaveStyle("background-color: gray");
  });
});
