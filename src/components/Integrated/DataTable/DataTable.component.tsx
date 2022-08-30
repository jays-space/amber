// TYPES
import { CandidateType } from "../../../types/types";

// CONSTANTS
import columns from "../../../constants/datatableColumns.constants";

// COMPONENTS
import { Text } from "../../Atomic/Typography/Text";
import { TableRows } from "./TableRow";

/**
 * @param data -> candidate
 * @returns data table
 */

const DataTable = ({ data }: { data: CandidateType[] }) => {
  return (
    <div title="candidates-table" className="mt-10">
      <div className="hidden lg:grid grid-cols-7 py-3 px-4 rounded-lg shadow-lg bg-white">
        {columns.map((col) => (
          <div data-testid="dataTable-column-item" key={col.key} className="col-span-1">
            <Text className="text-sm font-bold !tracking-wide capitalize">
              {col.title}
            </Text>
          </div>
        ))}
      </div>

      <TableRows data={data} />
    </div>
  );
};

export default DataTable;
