import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Position } from "..";

describe("<Position />", () => {
  const mockPositionData = {
    role: "fullstack developer",
    team: "development team",
  };

  it("should render correctly", () => {
    render(<Position position={mockPositionData} />);

    const positionComponent = screen.getByTitle("position-applied");
    expect(positionComponent).toBeInTheDocument();
    expect(positionComponent).toMatchSnapshot();
  });
});
