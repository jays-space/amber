import { useState } from "react";

// COMPONENTS
import { Text } from "../../../../Atomic/Typography/Text";

interface IStage {
  currentStage: number;
  select?: boolean;
}

const stages = [
  { name: "new applied", position: 1 },
  { name: "screening", position: 2 },
  { name: "code challenge", position: 3 },
  { name: "interview", position: 4 },
  { name: "hire", position: 5 },
];

const Stage = ({ currentStage, select }: IStage) => {
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

      default:
        return "bg-lime-800 bg-opacity-60";
    }
  };

  return (
    <div className="relative z-20">
      {select && (
        <select
          name="stage"
          onChange={(e) => setStagePosition(parseInt(e.target.value))}
          className="w-full lg:w-fit text-lg font-semibold text-slate-700 capitalize after:absolute after:top-3 after:right-3 after:w-0 after:h-0 after:border-none focus-visible:outline-none"
        >
          {stages.map((stage) => (
            <option
              key={stage.position}
              value={stage.position}
              selected={currentStage === stage.position}
              className="p-10 text-lg"
            >
              {stage.name}
            </option>
          ))}
        </select>
      )}

      <div className=" mt-2 flex">
        {stages.map((stage) => {
          if (stage.position <= stagePosition) {
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
