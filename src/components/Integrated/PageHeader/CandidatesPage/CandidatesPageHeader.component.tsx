// COMPONENTS
import { Button } from "../../../Atomic/Button";
import { Tag } from "../../../Atomic/Tag";
import { Heading } from "../../../Atomic/Typography/Heading";
import { Filter } from "../../Filter";

const CandidatesPageHeader = ({ candidates }: { candidates: number }) => {
  return (
    <div className="flex justify-between items-center">
      {/* left content */}
      <div className="w-full flex flex-row justify-between lg:justify-start items-center">
        <Heading
          variant="h1"
          label={`${candidates} ${candidates > 1 ? "candidates" : "candidate"}`}
          capitalize
        />
        <Tag label="+1 new hire" />
        <Filter />
      </div>

      {/* right content */}
      <div className="hidden lg:flex flex-row items-center">
        <Button variant="icon-dark" icon="more" />

        {/* divider */}
        <span className="h-8 w-0.5 mx-6 bg-slate-600 rounded-lg opacity-40" />

        <Button variant="icon-light" icon="download" />
        <Button variant="icon-light" icon="print" />
        <Button variant="secondary" label="add candidate" icon="add" />
      </div>
    </div>
  );
};

export default CandidatesPageHeader;
