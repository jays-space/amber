import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Login } from "..";

describe("<Login />", () => {
  const mockLoginData = {
    uuid: "d5ac5d23-f1f2-41c7-87fe-6d5d4eaa448c",
    username: "tinykoala839",
    password: "wp2003wp",
    salt: "f9keVBXE",
    md5: "e30841088e1974b003980f11ec19b835",
    sha1: "25e4069400001e76738ee6bf13bd524a6df2f2d8",
    sha256: "f38eff8fdee487e1888fb93dd91fd2cafecd83c9fcbe49658d1a070125854d9a",
  };

  it("should render correctly", () => {
    render(<Login authData={mockLoginData} />);

    const loginInfoComponent = screen.getByTitle("about-account");
    expect(loginInfoComponent).toBeInTheDocument();
    expect(loginInfoComponent).toMatchSnapshot();
  });

  it("should render show button", () => {
    render(<Login authData={mockLoginData} />);

    const buttonElement = screen.getByTestId("button-secondary");
    expect(buttonElement).toHaveTextContent("show login info");
    expect(buttonElement).not.toHaveTextContent("hide login info");
  });

  it("should render hide button on button click", () => {
    render(<Login authData={mockLoginData} />);

    const buttonElement = screen.getByTestId("button-secondary");

    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveTextContent("hide login info");
    expect(buttonElement).not.toHaveTextContent("show login info");
  });

  // test data visibility
  describe("login info not visible", () => {
    for (let key of Object.keys(mockLoginData)) {
      it(`should not render ${key} details`, () => {
        render(<Login authData={mockLoginData} />);

        const detailsComponent = screen.queryByTestId(`${key}-details`);
        expect(detailsComponent).not.toBeInTheDocument();
      });
    }
  });

  describe("login info visible", () => {
    for (let key of Object.keys(mockLoginData)) {
      it(`should not render ${key} details`, () => {
        render(<Login authData={mockLoginData} />);

        const buttonElement = screen.getByTestId("button-secondary");

        fireEvent.click(buttonElement);
        const detailsComponent = screen.queryByTestId(`${key}-details`);
        expect(detailsComponent).toBeInTheDocument();
      });
    }
  });
});
