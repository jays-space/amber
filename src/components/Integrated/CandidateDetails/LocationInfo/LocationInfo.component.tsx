// TYPES
import { CandidateType } from "../../../../types/types";

// COMPONENTS
import { Heading } from "../../../Atomic/Typography/Heading";
import { Detail } from "../../Detail";

const LocationInfo = ({ candidate }: { candidate: CandidateType }) => {
  return (
    <div>
      <Heading variant="h4" label="address" capitalize className="mb-2" />
      <div className="grid grid-cols-2">
        <div className="p-4 grid grid-cols-2 gap-6 border rounded-md">
          <Detail
            label="street address"
            content={[
              `${candidate.location.street.number.toString()},`,
              candidate.location.street.name,
            ]}
          />
          <Detail label="city" content={[candidate.location.city]} />
          <Detail label="state" content={[candidate.location.state]} />
          <Detail label="country" content={[candidate.location.country]} />
          <Detail label="postcode" content={[candidate.location.postcode]} />
          <Detail
            label="timezone"
            content={[
              candidate.location.timezone.description,
              `(${candidate.location.timezone.offset})`,
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default LocationInfo;
