import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CandidatesPageHeader } from "..";
import { BrowserRouter } from "react-router-dom";

const HeaderWithMockedRouter = ({ noOfCandidates }) => {
  return (
    <BrowserRouter>
      <CandidatesPageHeader noOfCandidates={noOfCandidates} />
    </BrowserRouter>
  );
};

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("<CandidatesPageHeader />", () => {
  it("should render correctly", () => {
    render(<HeaderWithMockedRouter noOfCandidates={1} />);

    const headerComponent = screen.getByTestId("candidates-page-header");
    expect(headerComponent).toBeInTheDocument();
    
    const headingElement = screen.getByRole("heading", { name: "1 candidate" });
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toMatchSnapshot();
  });

  it("should render candidate count greater tha one", () => {
    render(<HeaderWithMockedRouter noOfCandidates={10} />);

    const headingElement = screen.getByRole("heading", { name: "10 candidates" });
    expect(headingElement).toBeInTheDocument();
  });
});
