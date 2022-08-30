import { useNavigate } from "react-router-dom";

// TYPES
import {
  CandidateAvatarType,
  CandidateNameType,
  CandidatePositionType,
} from "../../../../types/types";

// COMPONENTS
import { Button } from "../../../Atomic/Button";
import { Heading } from "../../../Atomic/Typography/Heading";
import { Text } from "../../../Atomic/Typography/Text";
import { Stage } from "../../DataTable/TableRow/Stage";

interface ICandidatePageHeader {
  picture: CandidateAvatarType;
  name: CandidateNameType;
  position: CandidatePositionType;
  nat: string;
  stage: number;
}

/**
 * @param picture -> candidate picture data
 * @param name -> candidate name data
 * @param position -> candidate position
 * @param nat -> candidate nationality
 * @returns header component with candidate details and interactive back button
 */

const CandidatePageHeader = ({
  name,
  nat,
  picture,
  stage,
  position,
}: ICandidatePageHeader) => {
  const navigate = useNavigate();
  return (
    <div
      data-testid="candidate-page-header"
      className="flex flex-col lg:flex-row justify-between items-center my-10 lg:my-0"
    >
      {/* candidate details */}
      <div className="flex flex-col lg:flex-row items-center">
        <div className="hidden lg:flex">
          <Button
            variant="icon-dark"
            icon="back"
            onClick={() => navigate(-1)}
          />
        </div>

        <img
          src={picture.large}
          alt={`${name.first} ${name.last}'s avatar`}
          className="rounded-full mx-4"
        />
        <div className="flex flex-col justify-center items-center">
          {/* name + nationality */}
          <div className="flex items-center gap-2">
            <Heading variant="h3" label={`${name.first} ${name.last}`} />
            <Text className="capitalize opacity-75">{`(${nat})`}</Text>
          </div>

          {/* position */}
          <Text className="capitalize opacity-75">{`${position.team} ~ ${position.role}`}</Text>

          {/* stage */}
          <Stage currentStage={stage} />
        </div>
      </div>

      {/* Options */}
      <div className="hidden lg:flex">
        <Button variant="icon-light" icon="previous" />
        <Button variant="icon-light" icon="next" />
        <Button variant="secondary" label="send message" icon="message" />
        <Button variant="secondary" label="send email" icon="email" />
      </div>
    </div>
  );
};

export default CandidatePageHeader;
