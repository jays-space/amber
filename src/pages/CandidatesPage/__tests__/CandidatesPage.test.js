import { act, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CandidatesPage } from "..";
import { BrowserRouter } from "react-router-dom";

const CandidatesPageWithMockedRouter = () => {
  return (
    <BrowserRouter>
      <CandidatesPage />
    </BrowserRouter>
  );
};

describe("<CandidatesPage />", () => {
  it("should render correctly", async () => {
    render(<CandidatesPageWithMockedRouter />);

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      const spinnerComponent = screen.getByTestId("spinner");
      expect(spinnerComponent).toBeInTheDocument();
    });

    await act(async () => {
      const pageComponent = await screen.findByTestId("candidates-page");
      expect(pageComponent).toBeInTheDocument();
      expect(pageComponent).toMatchSnapshot();
    });
  });
});
