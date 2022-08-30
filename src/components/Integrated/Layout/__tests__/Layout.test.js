import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Layout } from "..";

describe("<Layout />", () => {
  it("should render correctly", () => {
    render(<Layout />);

    const layoutComponent = screen.getByTestId("dashboard");
    expect(layoutComponent).toBeInTheDocument();

    expect(layoutComponent).toMatchSnapshot();
  });
});
