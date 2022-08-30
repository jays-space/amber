import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Heading } from "../";

describe("<Heading />", () => {
  const headingLabel = "amber software";

  it("should render correctly", () => {
    render(<Heading label={headingLabel} />);

    const headingElement = screen.getByRole("heading", { name: headingLabel });
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toMatchSnapshot();
  });

  it("should render capitalized label", () => {
    render(<Heading label={headingLabel} capitalize />);

    const headingElement = screen.getByRole("heading", { name: headingLabel });
    expect(headingElement).toBeInTheDocument();
  });

  describe("should render all header variants", () => {
    const variants = ["h1", "h2", "h3", "h4"];

    for (let variant of variants) {
      it(`should render ${variant} heading`, () => {
        render(<Heading variant={variant} label={`rendered ${variant} header`} />);

        const headingElement = screen.getByRole("heading", {
          name: `rendered ${variant} header`,
        });
        expect(headingElement).toBeInTheDocument();
      });
    }
  });
});
