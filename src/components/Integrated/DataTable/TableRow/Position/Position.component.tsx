// COMPONENTS
import { Text } from "../../../../Atomic/Typography/Text";

interface IPosition {
  position: {
    role: string;
    team: string;
  };
}

const Position = ({ position }: IPosition) => {
  return (
    <div>
      <span>
        <Text
          strong
          className="w-10/12 text-lg whitespace-nowrap text-ellipsis overflow-hidden"
        >
          {position.role}
        </Text>
      </span>
      <span>
        <Text className="capitalize opacity-75">{position.team}</Text>
      </span>
    </div>
  );
};

export default Position;
