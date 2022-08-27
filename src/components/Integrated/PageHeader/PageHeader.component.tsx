// COMPONENTS
import { Button } from "../../Atomic/Button";
import { Tag } from "../../Atomic/Tag";
import { Heading } from "../../Atomic/Typography/Heading";
import { Filter } from "../Filter";

const PageHeader = () => {
  return (
    <div className="flex justify-between items-center">
      {/* left content */}
      <div className="flex flex-row items-center">
        <Heading variant="h1" label="32 employees" capitalize />
        <Tag label="+1 new hire" />
        <Filter />
      </div>

      {/* right content */}
      <div className="flex flex-row items-center">
        <Button variant="primary" />
        <Button variant="primary" icon="filter" />
        <Button variant="secondary" icon="filter" />
        <Button variant="secondary" />
        <Button variant="icon" icon="filter" />
      </div>
    </div>
  );
};

export default PageHeader;
