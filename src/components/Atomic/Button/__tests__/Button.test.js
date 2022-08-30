import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "..";

describe("<Button />", () => {
  it("should render correctly", () => {
    render(<Button />);

    const buttonElement = screen.getByRole("button", { name: "add label" });
    expect(buttonElement).toMatchSnapshot();
  });

  it("should render default button with the default label", () => {
    render(<Button />);

    const buttonElement = screen.getByRole("button", { name: "add label" });
    expect(buttonElement).toBeInTheDocument();
  });

  it("should render default button with a custom label", () => {
    const customLabel = "custom button label";
    render(<Button label={customLabel} />);

    const buttonElement = screen.getByRole("button", {
      name: customLabel,
    });
    expect(buttonElement).toBeInTheDocument();
  });

  it("should render a button with an icon", () => {
    render(<Button icon="add" />);

    const iconElement = screen.getByTestId("icon-add");
    expect(iconElement).toBeInTheDocument();
  });

  it("should render the primary button", () => {
    render(<Button variant="primary" />);

    const buttonElement = screen.getByTestId("button-primary");
    expect(buttonElement).toBeInTheDocument();
  });

  it("should render the secondary button", () => {
    render(<Button variant="secondary" />);

    const buttonElement = screen.getByTestId("button-secondary");
    expect(buttonElement).toBeInTheDocument();
  });

  it("should render the dark icon button", () => {
    render(<Button variant="icon-dark" />);

    const buttonElement = screen.getByTestId("button-icon-dark");
    expect(buttonElement).toBeInTheDocument();
  });

  it("should render the light icon button", () => {
    render(<Button variant="icon-light" />);

    const buttonElement = screen.getByTestId("button-icon-light");
    expect(buttonElement).toBeInTheDocument();
  });

  it("should execute a function that has been passed in on click", () => {
    const mockFunction = jest.fn();
    render(<Button onClick={mockFunction} />);

    const buttonElement = screen.getByRole("button", { name: "add label" });
    fireEvent.click(buttonElement);
    expect(mockFunction).toHaveBeenCalled();
  });

  it("should execute the default function on click", () => {
    const mockFunction = jest.fn();
    render(<Button />);

    const buttonElement = screen.getByRole("button", { name: "add label" });
    fireEvent.click(buttonElement);
    expect(mockFunction).not.toHaveBeenCalled();
  });
});
