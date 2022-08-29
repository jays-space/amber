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
      <div className="flex items-center mb-4">
        {/* <Heading
          variant="h4"
          label="login info"
          capitalize
          className="mb-2 mr-4"
        /> */}
        <Button
          variant="secondary"
          icon={isVisible ? "visible" : "hidden"}
          label={isVisible ? "hide login info" : "show login info"}
          onClick={() => setIsVisible((v) => !v)}
        />
        {/* <div className="cursor-pointer" onClick={() => setIsVisible((v) => !v)}>
          {isVisible ? <Text>hide</Text> : <Text>show</Text>}
        </div> */}
      </div>

      {/* account */}
      {isVisible && (
        <div className="p-4 grid grid-cols-3 gap-6 border rounded-md">
          <Detail lowercase label="uuid" content={[candidate.login.uuid]} />
          <Detail
            lowercase
            label="username"
            content={[candidate.login.username]}
          />
          <Detail
            lowercase
            label="password"
            content={[candidate.login.password]}
          />
          <Detail lowercase label="salt" content={[candidate.login.salt]} />
          <Detail lowercase label="md5" content={[candidate.login.md5]} />
          <Detail lowercase label="sha1" content={[candidate.login.sha1]} />
          <Detail lowercase label="sha256" content={[candidate.login.sha256]} />
        </div>
      )}
    </div>
  );
};

export default Login;
