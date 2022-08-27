// COMPONENTS
import { Text } from "../../../Atomic/Typography/Text";
import { Location } from "./Location";
import { Position } from "./Position";
import { Stage } from "./Stage";
import { User } from "./User";

interface ITableRow {
  data: {
    key: number;
    name: string;
    location: {
      city: string;
      country: string;
    };
    stage: string;
    position: {
      role: string;
      team: string;
    };
    date: Date;
    owner: string;
  }[];
}

const TableRow = ({ data }: ITableRow) => {
  return (
    <div className="my-6 py-3 px-4 rounded-lg shadow-md bg-white">
      {data.map((row) => (
        <div
          key={row.key}
          className="grid grid-cols-7 py-4 border-b last-of-type:border-none"
        >
          <User
            candidate
            name={row.name}
            avatar="https://randomuser.me/api/portraits/men/59.jpg"
          />

          <Location city={row.location.city} country={row.location.country} />

          <Stage currentStage={row.stage} />

          <Position position={row.position} />

          <Text strong className="text-xl">
            {row.date.toLocaleDateString()}
          </Text>

          <User
            name={row.owner}
            avatar="https://randomuser.me/api/portraits/men/59.jpg"
          />
        </div>
      ))}
    </div>
  );
};

export default TableRow;
