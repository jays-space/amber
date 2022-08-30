// TYPES
import {
  CandidateIDType,
  CandidateRegisteredType,
} from "../../../../types/types";

// COMPONENTS
import { Detail } from "../../Detail";

// UTILS
import { getFormattedDate } from "../../../../utils/dateTime.utils";
import { Heading } from "../../../Atomic/Typography/Heading";

interface IApplication {
  registered: CandidateRegisteredType;
  id: CandidateIDType;
}

/**
 * @param registered -> candidate registered data
 * @param id -> candidate id data
 * @returns grid component with data
 */

const Application = ({ registered, id }: IApplication) => {
  return (
    <div title="about-application">
      <Heading
        variant="h4"
        label="application"
        capitalize
        className="mb-6 lg:mb-2"
      />
      <div className="md:p-4 grid grid-cols-1 md:grid-cols-2 gap-6 md:border rounded-md">
        {/* ID */}
        <Detail
          label="registration"
          content={[
            getFormattedDate(registered.date),
            `(${registered.age} years ago)`,
          ]}
          className="hidden md:grid"
        />

        <div className="grid gap-6 md:hidden">
          <Detail
            label="registration"
            content={[getFormattedDate(registered.date)]}
          />

          <Detail
            label="registration"
            content={[`(${registered.age} years ago)`]}
          />
        </div>

        {/* identification details */}
        <Detail label="identification" content={[id.name, `- ${id.value}`]} />
      </div>
    </div>
  );
};

export default Application;
