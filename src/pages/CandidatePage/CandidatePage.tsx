import { useEffect, useState } from "react";

// TYPES
import { CandidateType } from "../../types/types";

// COMPONENTS
import { BasicInfo } from "../../components/Integrated/CandidateDetails/BasicInfo";
import { LocationInfo } from "../../components/Integrated/CandidateDetails/LocationInfo";
import { Application } from "../../components/Integrated/CandidateDetails/Application";
import { CandidatePageHeader } from "../../components/Integrated/PageHeader/CandidatePage";
import { TabMenu } from "../../components/Integrated/TabMenu";
import { Login } from "../../components/Integrated/CandidateDetails/Login";

const CandidatePage = () => {
  const [candidate, setCandidate] = useState<CandidateType | null>(null);

  useEffect(() => {
    const getData = async () => {
      await fetch("http://localhost:5000/api/v1/employees")
        .then((res) => res.json())
        .then((data) =>
          setCandidate({
            ...data.results[0],
            stage: 5,
            position: { role: "fullstack developer", team: "dev team" },
          })
        )
        .catch((e) => console.error(e));
    };

    getData();
  }, []);

  // Render spinner if data is not yet ready
  if (!candidate) return <h1>"loading..."</h1>;

  return (
    <div className="flex flex-col justify-center">
      <CandidatePageHeader candidate={candidate} />

      {/* content */}
      <div className="my-6 py-3 px-4 rounded-lg shadow-lg bg-white">
        <TabMenu />

        {/* application details */}

        {/* candidate details */}
        <div className="mt-20 px-4">
          <Application candidate={candidate} />
          <div className="mt-10 mb-2 grid grid-flow-row gap-6">
            <div className="grid grid-cols-2 gap-6">
              <BasicInfo candidate={candidate} />
              <LocationInfo candidate={candidate} />
            </div>

            <Login candidate={candidate} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidatePage;
