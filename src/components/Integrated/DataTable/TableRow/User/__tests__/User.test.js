import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { User } from "..";

describe("<User />", () => {
  it("should render correctly", () => {
    const candidate = false;

    render(
      <User
        name="john doe"
        avatar="https://randomuser.me/api/portraits/women/92.jpg"
        candidate={candidate}
      />
    );

    const userComponent = screen.getByTitle("user-details");
    expect(userComponent).toBeInTheDocument();
    expect(userComponent).toMatchSnapshot();
  });

  it("should render candidate correctly", () => {
    const candidate = true;

    render(
      <User
        name="john doe"
        avatar="https://randomuser.me/api/portraits/women/92.jpg"
        candidate={candidate}
      />
    );

    const userComponent = screen.getByTitle("user-details");
    expect(userComponent).toBeInTheDocument();
  });

  it("should render default correctly", () => {
    render(
      <User
        name="john doe"
        avatar="https://randomuser.me/api/portraits/women/92.jpg"
      />
    );

    const userComponent = screen.getByTitle("user-details");
    expect(userComponent).toBeInTheDocument();
  });

  it("should render user avatar", () => {
    render(
      <User
        name="john doe"
        avatar="https://randomuser.me/api/portraits/women/92.jpg"
      />
    );

    const avatar = screen.getByRole("img");
    expect(avatar).toBeInTheDocument();
  });
});
