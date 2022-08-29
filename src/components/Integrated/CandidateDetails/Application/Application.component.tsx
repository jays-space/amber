// TYPES
import { CandidateType } from "../../../../types/types";

// COMPONENTS
import { Detail } from "../../Detail";

// UTILS
import { getFormattedDate } from "../../../../utils/dateTime.utils";
import { Heading } from "../../../Atomic/Typography/Heading";

const Application = ({ candidate }: { candidate: CandidateType }) => {
  return (
    <div>
      <Heading variant="h4" label="application" capitalize className="mb-6 lg:mb-2" />
      <div className="md:p-4 grid grid-cols-1 md:grid-cols-2 gap-6 md:border rounded-md">
        {/* ID */}
        <Detail
          label="registration"
          content={[
            getFormattedDate(candidate.registered.date),
            `(${candidate.registered.age} years ago)`,
          ]}
          className="hidden md:grid"
        />

        <div className="grid gap-6 md:hidden">
          <Detail
            label="registration"
            content={[getFormattedDate(candidate.registered.date)]}
          />

          <Detail
            label="registration"
            content={[`(${candidate.registered.age} years ago)`]}
          />
        </div>

        {/* registered */}
        <Detail
          label="identification"
          content={[candidate.id.name, `- ${candidate.id.value}`]}
        />
      </div>
    </div>
  );
};

export default Application;
