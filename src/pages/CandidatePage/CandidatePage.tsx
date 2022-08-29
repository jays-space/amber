import { useEffect, useState } from "react";
import { BasicInfo } from "../../components/Integrated/CandidateDetails/BasicInfo";
import { LocationInfo } from "../../components/Integrated/CandidateDetails/LocationInfo";

// COMPONENTS
import { Detail } from "../../components/Integrated/Detail";
import { CandidatePageHeader } from "../../components/Integrated/PageHeader/CandidatePage";
import { TabMenu } from "../../components/Integrated/TabMenu";

// TYPES
import { CandidateType } from "../../types/types";
import { getFormattedDate } from "../../utils/dateTime.utils";

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

        {/* candidate details */}
        <div className="mt-16 mb-2 grid grid-cols-1 gap-4">
          <BasicInfo candidate={candidate} />
          <LocationInfo candidate={candidate} />
        </div>
      </div>
    </div>
  );
};

export default CandidatePage;
