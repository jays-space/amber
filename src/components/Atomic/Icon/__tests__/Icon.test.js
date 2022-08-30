import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Icon } from "..";

describe("<Icon />", () => {
  it("should render correctly", () => {
    render(<Icon name="add" />);

    const iconElement = screen.getByTestId("icon-add");
    expect(iconElement).toMatchSnapshot();
  });

  it("should pass custom classes into the element's classes", () => {
    const customClass = "custom-class";
    render(<Icon name="add" className={customClass} />);

    const iconElement = screen.getByTestId("icon-add");
    expect(iconElement.classList).toContain(customClass);
  });

  // test all branches
  describe("it renders the correct icon", () => {
    const iconNames = [
      "filter",
      "download",
      "print",
      "add",
      "more",
      "home",
      "inbox",
      "calendar",
      "task",
      "project",
      "new",
      "person",
      "people",
      "report",
      "settings",
      "minimize",
      "message",
      "email",
      "previous",
      "next",
      "back",
      "notification",
      "visible",
      "hidden",
      "search",
      "menu",
      "spinner",
    ];

    for (let icon of iconNames) {
      it("should render the add icon component", () => {
        render(<Icon name={icon} />);

        const iconElement = screen.getByTestId(`icon-${icon}`);
        expect(iconElement).toBeInTheDocument();
      });
    }
  });
});
