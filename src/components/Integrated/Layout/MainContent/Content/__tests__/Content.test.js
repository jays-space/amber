import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Content } from "..";

describe("<Content />", () => {
  it("should render correctly", () => {
    render(<Content />);

    const contentComponent = screen.getByRole("main");
    expect(contentComponent).toBeInTheDocument();

    expect(contentComponent).toMatchSnapshot();
  });
});
