import { useEffect, useState } from "react";
import axios from 'axios';

// TYPES
import { CandidateType } from "../../types/types";

// CONSTANTS
import apiUrl from "../../constants/api.constants";

// COMPONENTS
import { BasicInfo } from "../../components/Integrated/CandidateDetails/BasicInfo";
import { LocationInfo } from "../../components/Integrated/CandidateDetails/LocationInfo";
import { Application } from "../../components/Integrated/CandidateDetails/Application";
import { CandidatePageHeader } from "../../components/Integrated/PageHeader/CandidatePage";
import { TabMenu } from "../../components/Integrated/TabMenu";
import { Login } from "../../components/Integrated/CandidateDetails/Login";
import { Spinner } from "../../components/Integrated/Spinner";

/**
 * @returns candidate page with data from backend
 */

const CandidatePage = () => {
  const [candidate, setCandidate] = useState<CandidateType | null>(null);

  useEffect(() => {
    document.title = "Candidate | Amber";
  }, []);

  useEffect(() => {
    const getData = async () => {
      await axios.get(apiUrl)
        .then(({data}) =>
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
  if (!candidate) return <Spinner />;

  return (
    <div data-testid='candidate-page' className="flex flex-col justify-center">
      <CandidatePageHeader
        name={candidate.name}
        nat={candidate.nat}
        picture={candidate.picture}
        position={candidate.position}
        stage={candidate.stage}
      />

      {/* content */}
      <div className="my-6 py-3 px-4 rounded-lg shadow-lg bg-white">
        <TabMenu />

        {/* application details */}

        {/* candidate details */}
        <div className="mt-5 lg:mt-20 lg:px-4">
          <Application registered={candidate.registered} id={candidate.id} />

          <div className="mt-16 lg:mt-10 mb-2 grid grid-flow-row gap-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <BasicInfo
                basicInfo={{
                  cell: candidate.cell,
                  dob: candidate.dob,
                  email: candidate.email,
                  fullName: candidate.name,
                  gender: candidate.gender,
                  phone: candidate.phone,
                }}
              />
              <LocationInfo location={candidate.location} />
            </div>

            {/* login info */}
            <Login authData={candidate.login} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidatePage;
