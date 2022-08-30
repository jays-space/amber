// TYPES
import { CandidatePositionType } from "../../../../../types/types";

// COMPONENTS
import { Text } from "../../../../Atomic/Typography/Text";

interface IPosition {
  position: CandidatePositionType;
}
/**
 * @param position -> candidate position
 * @returns datable component rendering applied position
 */

const Position = ({ position }: IPosition) => {
  return (
    <div title="position-applied">
      <span>
        <Text
          strong
          className="w-10/12 text-lg capitalize whitespace-nowrap text-ellipsis overflow-hidden"
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
