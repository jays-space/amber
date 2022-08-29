// TYPES
import { CandidateType } from "../../../types/types";

// CONSTANTS
import columns from "../../../constants/datatableColumns.constants";

// COMPONENTS
import { Text } from "../../Atomic/Typography/Text";
import { TableRow } from "./TableRow";

const DataTable = ({ data }: { data: CandidateType[] }) => {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-7 py-3 px-4 rounded-lg shadow-md bg-white">
        {columns.map((col) => (
          <div key={col.key} className="col-span-1">
            <Text className="text-sm font-bold !tracking-wide capitalize">
              {col.title}
            </Text>
          </div>
        ))}
      </div>

      <TableRow data={data} />
    </div>
  );
};

export default DataTable;
