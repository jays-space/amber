import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Spinner } from "..";

describe("<Spinner />", () => {
  it("should render correctly", () => {
    render(<Spinner />);

    const spinnerComponent = screen.getByTestId("spinner");
    expect(spinnerComponent).toBeInTheDocument();
    expect(spinnerComponent).toMatchSnapshot();
  });
});
