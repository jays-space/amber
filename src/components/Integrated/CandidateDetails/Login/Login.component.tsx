import { useState } from "react";

// TYPES
import { CandidateAuthType } from "../../../../types/types";

// COMPONENTS
import { Detail } from "../../Detail";
import { Button } from "../../../Atomic/Button";

/**
 * 
 * @param authData -> candidate login data 
 * @returns grid component with data
 */

const Login = ({ authData }: { authData: CandidateAuthType }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div title="about-account" className="mt-6">
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
            content={[authData.uuid]}
            className="!text-sm !md:text-base break-all"
          />
          <Detail
            lowercase
            label="username"
            content={[authData.username]}
            className="!text-sm !md:text-base break-all"
          />
          <Detail
            lowercase
            label="password"
            content={[authData.password]}
            className="!text-sm !md:text-base break-all"
          />
          <Detail
            lowercase
            label="salt"
            content={[authData.salt]}
            className="!text-sm !md:text-base break-all"
          />
          <Detail
            lowercase
            label="md5"
            content={[authData.md5]}
            className="!text-sm !md:text-base break-all"
          />
          <Detail
            lowercase
            label="sha1"
            content={[authData.sha1]}
            className="!text-sm !md:text-base break-all"
          />
          <Detail
            lowercase
            label="sha256"
            content={[authData.sha256]}
            className="!text-sm !md:text-base break-all"
          />
        </div>
      )}
    </div>
  );
};

export default Login;
