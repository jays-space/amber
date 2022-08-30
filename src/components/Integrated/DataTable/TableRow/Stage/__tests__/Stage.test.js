import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Stage } from "..";

describe("<Stage />", () => {
  const currentStage = [1, 2, 3, 4, 5];

  it("should render correctly", () => {
    const select = true;
    render(<Stage currentStage={currentStage[2]} select={select} />);

    const stageComponent = screen.getByTitle("application-stage");
    expect(stageComponent).toBeInTheDocument();
    expect(stageComponent).toMatchSnapshot();
  });

  it("should simulate stage change", () => {
    const select = true;
    render(<Stage currentStage={currentStage[2]} select={select} />);

    const selectElement = screen.getByTestId("stage-selector");

    fireEvent.change(selectElement, { target: { value: currentStage[3] } });
    let stages = screen.getAllByTestId("stage-option");
    expect(stages[0].selected).toBeFalsy();
    expect(stages[1].selected).toBeFalsy();
    expect(stages[2].selected).toBeFalsy();
    expect(stages[3].selected).toBeTruthy();
    expect(stages[4].selected).toBeFalsy();
  });

  for (let stage of currentStage) {
    it(`should render the stage ${stage}`, () => {
      const select = true;
      render(<Stage currentStage={stage} select={select} />);

      const stageComponent = screen.getByTitle("application-stage");
      expect(stageComponent).toBeInTheDocument();
    });
  }
});
