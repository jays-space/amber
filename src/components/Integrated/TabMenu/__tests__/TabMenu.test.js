import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TabMenu } from "..";

describe("<TabMenu />", () => {
  it("should render correctly", () => {
    render(<TabMenu />);

    const tabMenuComponent = screen.getByTitle("tab-menu");
    expect(tabMenuComponent).toBeInTheDocument();
    expect(tabMenuComponent).toMatchSnapshot();
  });
});
