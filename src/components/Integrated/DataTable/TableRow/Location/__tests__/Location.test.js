import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Location } from "..";

describe("<Location />", () => {
  const mockLocationData = {
    city: "johannesburg",
    country: "south africa",
  };

  it("should render correctly", () => {
    render(
      <Location
        city={mockLocationData.city}
        country={mockLocationData.country}
      />
    );

    const locationComponent = screen.getByTitle("candidate-city-country");
    expect(locationComponent).toBeInTheDocument();
    expect(locationComponent).toMatchSnapshot();
  });
});
