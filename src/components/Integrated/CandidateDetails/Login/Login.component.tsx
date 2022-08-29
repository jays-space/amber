import { useState } from "react";

// TYPES
import { CandidateType } from "../../../../types/types";

// COMPONENTS
import { Detail } from "../../Detail";
import { Button } from "../../../Atomic/Button";

const Login = ({ candidate }: { candidate: CandidateType }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div className="mt-6">
      <div className="md:flex items-center mb-4">
        <Button
          variant="secondary"
          icon={isVisible ? "visible" : "hidden"}
          label={isVisible ? "hide login info" : "show login info"}
          onClick={() => setIsVisible((v) => !v)}
        />
      </div>

      {/* account */}
      {isVisible && (
        <div className="mt-10 md:mt-0 md:p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:border rounded-md">
          <Detail
            lowercase
            label="uuid"
            content={[candidate.login.uuid]}
            className="!text-sm !md:text-base break-all"
          />
          <Detail
            lowercase
            label="username"
            content={[candidate.login.username]}
            className="!text-sm !md:text-base break-all"
          />
          <Detail
            lowercase
            label="password"
            content={[candidate.login.password]}
            className="!text-sm !md:text-base break-all"
          />
          <Detail
            lowercase
            label="salt"
            content={[candidate.login.salt]}
            className="!text-sm !md:text-base break-all"
          />
          <Detail
            lowercase
            label="md5"
            content={[candidate.login.md5]}
            className="!text-sm !md:text-base break-all"
          />
          <Detail
            lowercase
            label="sha1"
            content={[candidate.login.sha1]}
            className="!text-sm !md:text-base break-all"
          />
          <Detail
            lowercase
            label="sha256"
            content={[candidate.login.sha256]}
            className="!text-sm !md:text-base break-all"
          />
        </div>
      )}
    </div>
  );
};

export default Login;
