import { Tag } from "../../Atomic/Tag";
import { Heading } from "../../Atomic/Typography/Heading";

const PageHeader = () => {
  return (
    <div>
      <div className="flex flex-row items-center">
        <Heading variant="h1" label="32 employees" capitalize />
        <Tag label="+1 new hire" />
      </div>
    </div>
  );
};

export default PageHeader;
