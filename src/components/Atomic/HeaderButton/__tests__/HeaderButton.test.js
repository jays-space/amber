import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { HeaderButton } from "..";

describe("<HeaderButton />", () => {
  it("should render correctly", () => {
    render(<HeaderButton variant="primary" />);

    const headerButtonElement = screen.getByRole("button");
    const iconElement = screen.getByTestId("icon-add");

    expect(iconElement).toBeInTheDocument();
    expect(headerButtonElement).toBeInTheDocument();
    expect(headerButtonElement).toMatchSnapshot();
  });

  it("should render primary header button with icon", () => {
    render(<HeaderButton variant="primary" />);

    const primaryHeaderButtonElement = screen.getByTestId(
      "header-button-primary"
    );

    const iconElement = screen.getByTestId("icon-add");

    expect(iconElement).toBeInTheDocument();
    expect(primaryHeaderButtonElement).toBeInTheDocument();
  });

  it("should render secondary header button with icon", () => {
    render(<HeaderButton variant="secondary" />);

    const secondaryHeaderButtonElement = screen.getByTestId(
      "header-button-secondary"
    );

    const iconElement = screen.getByTestId("icon-notification");

    expect(iconElement).toBeInTheDocument();
    expect(secondaryHeaderButtonElement).toBeInTheDocument();
  });
});
