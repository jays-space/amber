import { useState } from "react";

// COMPONENTS
import { Text } from "../../../../Atomic/Typography/Text";

interface IStage {
  currentStage: string;
}

const stages = [
  { name: "new applied", position: 1 },
  { name: "screening", position: 2 },
  { name: "design challenge", position: 3 },
  { name: "interview", position: 4 },
  { name: "test", position: 5 },
  { name: "hire", position: 6 },
];

const Stage = ({ currentStage }: IStage) => {
  const [stageLabel, setStageLabel] = useState<string>("");

  return (
    <div>
      <select
        name="stage"
        onChange={(e) => setStageLabel(e.target.value)}
        className="border-none capitalize text-slate-700 pl-0"
      >
        {stages.map((stage) => (
          <option
            key={stage.position}
            value={stage.name}
            selected={currentStage === stage.name}
            className="p-10 text-lg"
          >
            {stage.name}
          </option>
        ))}
      </select>
      <Text>{stageLabel || currentStage}</Text>
    </div>
  );
};

export default Stage;
