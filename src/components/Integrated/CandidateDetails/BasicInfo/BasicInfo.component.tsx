// TYPES
import { CandidateDOBType, CandidateNameType } from "../../../../types/types";

// COMPONENTS
import { Detail } from "../../Detail";

// UTILS
import { getFormattedDate } from "../../../../utils/dateTime.utils";
import { Heading } from "../../../Atomic/Typography/Heading";

/**
 * @param basicInfo -> candidate information
 * @returns grid component with data
 */

interface IBasicInfo {
  basicInfo: {
    fullName: CandidateNameType;
    dob: CandidateDOBType;
    gender: string;
    email: string;
    phone: string;
    cell: string;
  };
}

const BasicInfo = ({ basicInfo }: IBasicInfo) => {
  const { cell, dob, email, fullName, gender, phone } = basicInfo;

  return (
    <div title="about-candidate">
      <Heading
        variant="h4"
        label="basic info"
        capitalize
        className="mb-6 md:mb-2"
      />
      <div className="md:p-4 grid grid-rows-1 gap-6 md:border rounded-md">
        <Detail
          label="full name"
          content={[fullName.first, fullName.last, `(${fullName.title})`]}
        />
        <Detail label="gender" content={[gender]} />
        <Detail
          label="dob"
          content={[getFormattedDate(dob.date), `(${dob.age})`]}
        />
        <Detail
          lowercase
          label="email"
          content={[email]}
          className="text-sm lg:text-base"
        />
        <Detail label="phone" content={[phone]} />
        <Detail label="cell" content={[cell]} />
      </div>
    </div>
  );
};

export default BasicInfo;
