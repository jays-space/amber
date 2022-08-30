import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Text } from "..";

describe("<Text />", () => {
  const string =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus exercitationem unde dicta expedita a facilis quo, ad inventore molestiae dolorum?";

  it("should render correctly", () => {
    render(<Text>{string}</Text>);

    const textElement = screen.getByTestId("paragraph");
    expect(textElement).toContainHTML("p");
    expect(textElement).toHaveTextContent(string);
    expect(textElement).toMatchSnapshot();
  });

  it("should render bolded string content", () => {
    render(<Text strong>{string}</Text>);

    const textElement = screen.getByTestId("paragraph");
    expect(textElement.classList).toContain("font-semibold");
    expect(textElement.classList).toContain("text-cyan-900");
  });
});
