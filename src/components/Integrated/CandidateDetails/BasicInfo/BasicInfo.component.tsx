// TYPES
import { CandidateType } from "../../../../types/types";

// COMPONENTS
import { Detail } from "../../Detail";

// UTILS
import { getFormattedDate } from "../../../../utils/dateTime.utils";
import { Heading } from "../../../Atomic/Typography/Heading";

const BasicInfo = ({ candidate }: { candidate: CandidateType }) => {
  return (
    <div>
      <Heading variant="h4" label="basic info" capitalize className="mb-6 md:mb-2" />
      <div className="md:p-4 grid grid-rows-1 gap-6 md:border rounded-md">
        <Detail
          label="full name"
          content={[
            candidate.name.first,
            candidate.name.last,
            `(${candidate.name.title})`,
          ]}          
        />
        <Detail label="gender" content={[candidate.gender]} />
        <Detail
          label="dob"
          content={[
            getFormattedDate(candidate.dob.date),
            `(${candidate.dob.age})`,
          ]}
        />
        <Detail lowercase label="email" content={[candidate.email]} className="text-sm lg:text-base" />
        <Detail label="phone" content={[candidate.phone]} />
        <Detail label="cell" content={[candidate.cell]} />
      </div>
    </div>
  );
};

export default BasicInfo;
