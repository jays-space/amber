import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BasicInfo } from "..";

describe("<BasicInfo />", () => {
  const mockBasicInfo = {
    fullName: {
      title: "Mr",
      first: "John",
      last: "Doe",
    },
    dob: {
      date: "1964-04-24T06:25:40.777Z",
      age: 57,
    },
    gender: "male",
    email: "my.email@gmail.com",
    phone: "011 123 45 78",
    cell: "078 123 45 67",
  };

  it("should render correctly", () => {
    render(<BasicInfo basicInfo={mockBasicInfo} />);

    const basicInfoComponent = screen.getByTitle("about-candidate");
    expect(basicInfoComponent).toBeInTheDocument();
    expect(basicInfoComponent).toMatchSnapshot();
  });

  it("should render appropriate heading", () => {
    render(<BasicInfo basicInfo={mockBasicInfo} />);

    const headingElement = screen.getByRole("heading", { name: "basic info" });
    expect(headingElement).toBeInTheDocument();
  });

  it("should render full name details", () => {
    render(<BasicInfo basicInfo={mockBasicInfo} />);

    const fullNameComponent = screen.getByTestId(
      "full name-details"
    );
    expect(fullNameComponent).toBeInTheDocument();
  });

  it("should render gender details", () => {
    render(<BasicInfo basicInfo={mockBasicInfo} />);

    const genderComponent = screen.getByTestId(
      "gender-details"
    );
    expect(genderComponent).toBeInTheDocument();
  });

  it("should render dob details", () => {
    render(<BasicInfo basicInfo={mockBasicInfo} />);

    const dobComponent = screen.getByTestId(
      "dob-details"
    );
    expect(dobComponent).toBeInTheDocument();
  });

  it("should render email details", () => {
    render(<BasicInfo basicInfo={mockBasicInfo} />);

    const emailComponent = screen.getByTestId(
      "email-details"
    );
    expect(emailComponent).toBeInTheDocument();
  });

  it("should render phone details", () => {
    render(<BasicInfo basicInfo={mockBasicInfo} />);

    const phoneComponent = screen.getByTestId(
      "phone-details"
    );
    expect(phoneComponent).toBeInTheDocument();
  });

  it("should render cell details", () => {
    render(<BasicInfo basicInfo={mockBasicInfo} />);

    const cellComponent = screen.getByTestId(
      "cell-details"
    );
    expect(cellComponent).toBeInTheDocument();
  });

});
