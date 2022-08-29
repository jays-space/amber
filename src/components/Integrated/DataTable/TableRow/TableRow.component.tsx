import { useNavigate } from "react-router-dom";

// TYPES
import { CandidateType } from "../../../../types/types";

// CONSTANTS
import recruiter from "../../../../constants/recruiter.constants";

// COMPONENTS
import { Text } from "../../../Atomic/Typography/Text";
import { Location } from "./Location";
import { Position } from "./Position";
import { Stage } from "./Stage";
import { User } from "./User";
import { Button } from "../../../Atomic/Button";

// UTILS
import { getFormattedDate } from "../../../../utils/dateTime.utils";

interface ITableRow {
  data: CandidateType[];
}

const TableRow = ({ data }: ITableRow) => {
  const navigate = useNavigate();

  return (
    <div className="my-6 rounded-lg shadow-lg bg-white">
      {data.map((row) => (
        <div
          key={row.login.uuid}
          className="grid grid-rows-4 md:grid-rows-1 gap-y-10 md:grid-cols-2 lg:grid-cols-7 py-4 px-4 border-b last-of-type:border-none lg:hover:bg-slate-100 transform ease-out duration-100"
        >
          {/* candidate */}
          <User
            candidate
            name={`${row.name.first} ${row.name.last}`}
            avatar={row.picture.thumbnail}
          />

          {/* from */}
          <Location city={row.location.city} country={row.location.country} />

          {/* stage of application */}
          <Stage select currentStage={row.stage} />

          {/* position */}
          <Position position={row.position} />

          {/* application date */}
          <Text strong className="text-lg">
            {getFormattedDate(row.registered.date)}
          </Text>

          {/* application owner */}
          <User name={recruiter.name} avatar={recruiter.avatar} />

          {/* see more button */}
          <div
            onClick={() => navigate(`${row.name.first}-${row.name.last}`)}
            className="hidden group lg:flex items-center cursor-pointer"
          >
            <Text className="group-hover:border-b-2 border-b-slate-500 capitalize">
              See more
            </Text>
          </div>

          <div className="lg:hidden">
            <Button
              variant="secondary"
              label="see more"
              onClick={() => navigate(`${row.name.first}-${row.name.last}`)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableRow;
