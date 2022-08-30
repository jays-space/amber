import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { LocationInfo } from "..";

describe("<LocationInfo />", () => {
  const mockLocationData = {
    street: {
      number: 456,
      name: "sicamore street",
    },
    city: "rivonia",
    state: "johannesburg",
    country: "south africa",
    postcode: 1234,
    coordinates: {
      latitude: "-54.4721",
      longitude: "30.6940",
    },
    timezone: {
      offset: "+2:00",
      description: "cape town, harare",
    },
  };

  it("should render correctly", () => {
    render(<LocationInfo location={mockLocationData} />);

    const locationInfoComponent = screen.getByTitle("candidate-address");
    expect(locationInfoComponent).toBeInTheDocument();
    expect(locationInfoComponent).toMatchSnapshot();
  });

  it("should render appropriate heading", () => {
    render(<LocationInfo location={mockLocationData} />);

    const headingElement = screen.getByRole("heading", { name: "address" });
    expect(headingElement).toBeInTheDocument();
  });

  it("should render street address details", () => {
    render(<LocationInfo location={mockLocationData} />);

    const addressComponent = screen.getByTestId("street address-details");
    expect(addressComponent).toBeInTheDocument();
  });

  it("should render city details", () => {
    render(<LocationInfo location={mockLocationData} />);

    const cityComponent = screen.getByTestId("city-details");
    expect(cityComponent).toBeInTheDocument();
  });

  it("should render state details", () => {
    render(<LocationInfo location={mockLocationData} />);

    const stateComponent = screen.getByTestId("state-details");
    expect(stateComponent).toBeInTheDocument();
  });

  it("should render country details", () => {
    render(<LocationInfo location={mockLocationData} />);

    const countryComponent = screen.getByTestId("country-details");
    expect(countryComponent).toBeInTheDocument();
  });

  it("should render postcode details", () => {
    render(<LocationInfo location={mockLocationData} />);

    const postcodeComponent = screen.getByTestId("postcode-details");
    expect(postcodeComponent).toBeInTheDocument();
  });

  it("should render timezone details", () => {
    render(<LocationInfo location={mockLocationData} />);

    const timezoneComponent = screen.getByTestId("timezone-details");
    expect(timezoneComponent).toBeInTheDocument();
  });

  it("should render the map", () => {
    render(<LocationInfo location={mockLocationData} />);

    const imageElement = screen.getByRole("img");
    expect(imageElement).toBeInTheDocument();
  });
});
