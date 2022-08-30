import { useEffect, useState } from "react";
import axios from "axios";

// TYPES
import { CandidateType } from "../../types/types";

// CONSTANTS
import apiUrl from "../../constants/api.constants";

// COMPONENTS
import { DataTable } from "../../components/Integrated/DataTable";
import { CandidatesPageHeader } from "../../components/Integrated/PageHeader/CandidatesPage";
import { Spinner } from "../../components/Integrated/Spinner";

/**
 * @returns candidates page with data from backend
 */

const CandidatesPage = () => {
  const [candidates, setCandidates] = useState<CandidateType[] | null>(null);

  useEffect(() => {
    document.title = "Candidates | Amber";
  }, []);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(apiUrl)
        .then(({ data }) =>
          setCandidates(
            data.results.map((result: CandidateType) => ({
              ...result,
              stage: 5,
              position: { role: "fullstack developer", team: "dev team" },
            }))
          )
        )
        .catch((e) => console.error(e));
    };

    getData();
  }, []);

  // Render spinner if data is not yet ready
  if (!candidates) return <Spinner />;

  return (
    <div data-testid="candidates-page">
      <CandidatesPageHeader noOfCandidates={candidates.length} />
      <DataTable data={candidates} />
    </div>
  );
};

export default CandidatesPage;
