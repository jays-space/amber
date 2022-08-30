import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Filter } from "..";

describe("<Filter />", () => {
  it("should render correctly", () => {
    render(<Filter />);

    const filterComponent = screen.getByTitle("filter-candidates");
    expect(filterComponent).toBeInTheDocument();
    expect(filterComponent).toMatchSnapshot();
  });
});
