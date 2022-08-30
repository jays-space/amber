import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Sidebar } from "..";

const mockToggleMinimize = jest.fn();

describe("<Sidebar />", () => {
  it("should render correctly", () => {
    render(<Sidebar isCollapsed={false} setIsCollapsed={mockToggleMinimize} />);

    const sidebarComponent = screen.getByTestId("sidebar");
    expect(sidebarComponent).toBeInTheDocument();

    const logo = screen.getByTestId("logo");
    expect(logo).toBeInTheDocument();
    expect(sidebarComponent).toMatchSnapshot();
  });

  it("should render minimized sidebar", () => {
    render(<Sidebar isCollapsed={true} setIsCollapsed={mockToggleMinimize} />);

    const sidebarComponent = screen.getByTestId("sidebar");
    expect(sidebarComponent).toBeInTheDocument();
  });

  it("should simulate minimizing", () => {
    render(<Sidebar isCollapsed={false} setIsCollapsed={mockToggleMinimize} />);

    const toggleButton = screen.getByTitle("toggle-sidebar");
    fireEvent.click(toggleButton);

    expect(mockToggleMinimize).toHaveBeenCalled();
  });
});
