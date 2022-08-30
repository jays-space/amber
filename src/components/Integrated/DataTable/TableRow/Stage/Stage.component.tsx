import { useState } from "react";

// COMPONENTS
import { Text } from "../../../../Atomic/Typography/Text";

interface IStage {
  currentStage: number;
  select?: boolean;
}

/**
 * @param currentStage -> candidate stage of application
 * @param select -> determines whether the user is bale to update the stage data
 * @returns datable component rendering current stage of application
 */

const stages = [
  { name: "new applied", position: 1 },
  { name: "screening", position: 2 },
  { name: "code challenge", position: 3 },
  { name: "interview", position: 4 },
  { name: "hire", position: 5 },
];

const Stage = ({ currentStage, select }: IStage) => {
  // set initial stage based on data from db
  const [stagePosition, setStagePosition] = useState<number>(currentStage);

  const getStageColor = (stagePosition: number) => {
    switch (stagePosition) {
      case 2:
        return "bg-emerald-800 bg-opacity-90";

      case 3:
        return "bg-orange-500";

      case 4:
        return "bg-purple-500";

      case 5:
        return "bg-yellow-500";

      case 1:
      default:
        return "bg-lime-800 bg-opacity-60";
    }
  };

  return (
    <div title="application-stage" className="relative z-20">
      {select && (
        <select
          data-testid="stage-selector"
          name="stage"
          onChange={(e) => setStagePosition(parseInt(e.target.value))} // set the selected position into state
          className="w-full lg:w-fit text-lg font-semibold text-slate-700 capitalize after:absolute after:top-3 after:right-3 after:w-0 after:h-0 after:border-none focus-visible:outline-none"
        >
          {/* render into select all possible stages */}
          {stages.map((stage) => (
            <option
              data-testid="stage-option"
              key={stage.position}
              value={stage.position}
              defaultValue={currentStage}
              className="p-10 text-lg"
            >
              {stage.name}
            </option>
          ))}
        </select>
      )}

      {/* renders a graphic representing the applicant's progression */}
      <div className=" mt-2 flex">
        {stages.map((stage) => {
          // render all possible stages
          // for each stage, check if it is less than the current stage
          if (stage.position <= stagePosition) {
            // if so, render the stage color and number
            return (
              <div
                key={stage.position}
                className={`px-2.5 mx-0.5 first-of-type:ml-0 flex justify-center items-center rounded ${getStageColor(
                  stagePosition
                )}`}
              >
                {<Text className="text-white">{stage.position}</Text>}
              </div>
            );
          } else {
            // else render a black stage (gray)
            return (
              <div
                key={stage.position}
                className={`px-3 mx-0.5 first-of-type:ml-0 flex justify-center items-center rounded bg-neutral-300`}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Stage;
