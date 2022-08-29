// TYPES
import { CandidateType } from "../../../../types/types";

// COMPONENTS
import { Heading } from "../../../Atomic/Typography/Heading";
import { Detail } from "../../Detail";

const LocationInfo = ({ candidate }: { candidate: CandidateType }) => {
  return (
    <div className="mt-10 lg:mt-0">
      <Heading variant="h4" label="address" capitalize className="mb-6 md:mb-2" />
      <div className="grid md:grid-cols-2 gap-6 md:border rounded-md">
        <div className="md:p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
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

        {/* map render */}
        <div className="overflow-hidden">
          <img
            src="/map.png"
            alt="map of coordinates"
            className="h-full object-cover object-center rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default LocationInfo;
