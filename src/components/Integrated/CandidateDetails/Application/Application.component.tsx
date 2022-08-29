// TYPES
import { CandidateType } from "../../../../types/types";

// COMPONENTS
import { Detail } from "../../Detail";

// UTILS
import { getFormattedDate } from "../../../../utils/dateTime.utils";
import { Heading } from "../../../Atomic/Typography/Heading";

const Application = ({ candidate }: { candidate: CandidateType }) => {
  return (
    <div className="">
      <Heading
        variant="h4"
        label="application"
        capitalize
        className="mb-2"
      />
      <div className="p-4 grid grid-cols-2 gap-6 border rounded-md">
        {/* ID */}
        <Detail
          label="registration"
          content={[
            getFormattedDate(candidate.registered.date),
            `(${candidate.registered.age} years ago)`,
          ]}
        />

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
