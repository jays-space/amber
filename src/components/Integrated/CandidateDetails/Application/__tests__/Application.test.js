import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Application } from "..";

describe("<Application />", () => {
  const mockRegisteredData = {
    date: "2016-09-28T11:15:47.538Z",
    age: 5,
  };

  const mockIDData = {
    name: "AVS",
    value: "756.9989.7526.17",
  };

  it("should render correctly", () => {
    render(<Application registered={mockRegisteredData} id={mockIDData} />);

    const applicationComponent = screen.getByTitle("about-application");
    expect(applicationComponent).toBeInTheDocument();
    expect(applicationComponent).toMatchSnapshot();
  });

  it("should render appropriate heading", () => {
    render(<Application registered={mockRegisteredData} id={mockIDData} />);

    const headingElement = screen.getByRole("heading", { name: "application" });
    expect(headingElement).toBeInTheDocument();
  });

  it("should render registration details", () => {
    render(<Application registered={mockRegisteredData} id={mockIDData} />);

    const registrationComponents = screen.getAllByTestId(
      "registration-details"
    );
    expect(registrationComponents.length).toBeGreaterThan(1);
  });

  it("should render identification details", () => {
    render(<Application registered={mockRegisteredData} id={mockIDData} />);

    const identificationComponent = screen.getByTestId(
      "identification-details"
    );
    expect(identificationComponent).toBeInTheDocument();
  });
});
