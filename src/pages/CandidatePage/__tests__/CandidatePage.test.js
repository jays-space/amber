import { act, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CandidatePage } from "..";
import { BrowserRouter } from "react-router-dom";

const CandidatePageWithMockedRouter = () => {
  return (
    <BrowserRouter>
      <CandidatePage />
    </BrowserRouter>
  );
};

describe("<CandidatePage />", () => {
  it("should render correctly", async () => {
    render(<CandidatePageWithMockedRouter />);

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      const spinnerComponent = screen.getByTestId("spinner");
      expect(spinnerComponent).toBeInTheDocument();
    });

    await act(async () => {
      const pageComponent = await screen.findByTestId("candidate-page");
      expect(pageComponent).toBeInTheDocument();
      expect(pageComponent).toMatchSnapshot();
    });
  });
});
