// COMPONENTS
import { Button } from "../../../Atomic/Button";
import { Heading } from "../../../Atomic/Typography/Heading";
import { Filter } from "../../Filter";

/**
 * @param noOfCandidates -> number of candidates returned by db
 * @returns header component with dynamic candidates count
 */

const CandidatesPageHeader = ({
  noOfCandidates,
}: {
  noOfCandidates: number;
}) => {
  return (
    <div
      data-testid="candidates-page-header"
      className="flex justify-between items-center"
    >
      {/* left content */}
      <div className="w-full flex flex-1 flex-row justify-between lg:justify-start items-center">
        <Heading
          variant="h1"
          label={`${noOfCandidates} ${
            noOfCandidates > 1 ? "candidates" : "candidate"
          }`}
          capitalize
          className="mr-10"
        />

        <Filter />
      </div>

      {/* right content => hidden on smaller screens */}
      <div className="hidden lg:flex flex-row items-center justify-end">
        <Button variant="icon-dark" icon="more" />

        {/* divider */}
        <span className="h-8 w-0.5 mx-6 bg-slate-600 rounded-lg opacity-40" />

        <Button variant="icon-light" icon="download" />
        <Button variant="icon-light" icon="print" />
        <div className="flex flex-1">
          <Button variant="secondary" label="add candidate" icon="add" />
        </div>
      </div>
    </div>
  );
};

export default CandidatesPageHeader;
