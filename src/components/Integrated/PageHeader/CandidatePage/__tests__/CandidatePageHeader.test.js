import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CandidatePageHeader } from "..";
import { BrowserRouter } from "react-router-dom";

const name = {
  title: "ms",
  first: "jane",
  last: "doe",
};
const picture = {
  large: "https://randomuser.me/api/portraits/women/16.jpg",
  medium: "https://randomuser.me/api/portraits/med/women/16.jpg",
  thumbnail: "https://randomuser.me/api/portraits/thumb/women/16.jpg",
};
const nat = "ZA";
const stage = 4;
const position = { role: "fullstack developer", team: "dev team" };

const HeaderWithMockedRouter = ({ name, nat, picture, position, stage }) => {
  return (
    <BrowserRouter>
      <CandidatePageHeader
        name={name}
        nat={nat}
        picture={picture}
        position={position}
        stage={stage}
      />
    </BrowserRouter>
  );
};

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("<CandidatePageHeader />", () => {
  it("should render correctly", () => {
    render(
      <HeaderWithMockedRouter
        name={name}
        nat={nat}
        picture={picture}
        position={position}
        stage={stage}
      />
    );

    const headerComponent = screen.getByTestId("candidate-page-header");
    expect(headerComponent).toBeInTheDocument();
    expect(headerComponent).toMatchSnapshot();
  });

  it("should render candidate avatar", () => {
    render(
      <HeaderWithMockedRouter
        name={name}
        nat={nat}
        picture={picture}
        position={position}
        stage={stage}
      />
    );

    const imageElement = screen.getByRole("img");
    expect(imageElement).toBeInTheDocument();
  });

  it("should simulate navigating back", () => {
    render(
      <HeaderWithMockedRouter
        name={name}
        nat={nat}
        picture={picture}
        position={position}
        stage={stage}
      />
    );

    const button = screen.getByTestId("button-icon-dark");

    fireEvent.click(button);
    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });
});
