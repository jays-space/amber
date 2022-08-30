import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Header } from "..";

describe("<Header />", () => {
  it("should render correctly", () => {
    render(<Header />);

    const headerComponent = screen.getByTitle("header");
    expect(headerComponent).toBeInTheDocument();

    expect(headerComponent).toMatchSnapshot();
  });

  it("should simulate menu toggle", () => {
    render(<Header />);

    const button = screen.getByTestId("button-icon-light");
    fireEvent.click(button);
    expect(button).toBeInTheDocument();
  });
});
