import { useNavigate } from "react-router-dom";

// TYPES
import { CandidateType } from "../../../../types/types";
import { getFormattedDate } from "../../../../utils/dateTime.utils";

// COMPONENTS
import { Text } from "../../../Atomic/Typography/Text";
import { Location } from "./Location";
import { Position } from "./Position";
import { Stage } from "./Stage";
import { User } from "./User";

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
          className="grid grid-cols-7 py-4 px-4 border-b last-of-type:border-none hover:bg-slate-100 transform ease-out duration-100"
        >
          <User
            candidate
            name={`${row.name.first} ${row.name.last}`}
            avatar={row.picture.thumbnail}
          />

          <Location city={row.location.city} country={row.location.country} />

          <Stage select currentStage={row.stage} />

          <Position position={row.position} />

          <Text strong className="text-lg">
            {getFormattedDate(row.registered.date)}
          </Text>

          <User
            name="duduzile hlongwane"
            avatar="https://media-exp1.licdn.com/dms/image/C4D03AQELG5uq0_LIug/profile-displayphoto-shrink_100_100/0/1637782454380?e=1667433600&v=beta&t=976dwrMZyY3VL1L48bQwAOvR730al8Ad2-vGvz4pgE8"
          />

          <div
            onClick={() => navigate(`${row.name.first}-${row.name.last}`)}
            className="group flex items-center cursor-pointer"
          >
            <Text className="group-hover:border-b-2 border-b-slate-500 capitalize">
              See more
            </Text>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableRow;
