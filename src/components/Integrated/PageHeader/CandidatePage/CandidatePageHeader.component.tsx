import { useNavigate } from "react-router-dom";

// TYPES
import { CandidateType } from "../../../../types/types";

// COMPONENTS
import { Button } from "../../../Atomic/Button";
import { Heading } from "../../../Atomic/Typography/Heading";
import { Text } from "../../../Atomic/Typography/Text";
import { Stage } from "../../DataTable/TableRow/Stage";

const CandidatePageHeader = ({ candidate }: { candidate: CandidateType }) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center">
      {/* candidate details */}
      <div className="flex items-center">
        <Button variant="icon-dark" icon="back" onClick={() => navigate(-1)} />

        <img
          src={candidate.picture.large}
          alt={`${candidate.name.first} ${candidate.name.last}'s avatar`}
          className="rounded-full mx-4"
        />
        <div>
          {/* name + nationality */}
          <div className="flex items-center gap-2">
            <Heading
              variant="h3"
              label={`${candidate.name.first} ${candidate.name.last}`}
            />
            <Text className="capitalize opacity-75">{`(${candidate.nat})`}</Text>
          </div>

          {/* position */}
          <Text className="capitalize opacity-75">{`${candidate.position.team} ~ ${candidate.position.role}`}</Text>

          {/* stage */}
          <Stage currentStage={candidate.stage} />
        </div>
      </div>

      {/* Options */}
      <div className="flex">
        <Button variant="icon-light" icon="previous" />
        <Button variant="icon-light" icon="next" />
        <Button variant="secondary" label="send message" icon="message" />
        <Button variant="secondary" label="send email" icon="email" />
      </div>
    </div>
  );
};

export default CandidatePageHeader;
