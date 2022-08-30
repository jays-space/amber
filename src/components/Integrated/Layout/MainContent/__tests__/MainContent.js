import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MainContent } from "..";

describe("<MainContent />", () => {
  it("should render correctly", () => {
    render(<MainContent />);

    const contentComponent = screen.getByTestId("main-content");
    expect(contentComponent).toBeInTheDocument();

    expect(contentComponent).toMatchSnapshot();
  });
});
