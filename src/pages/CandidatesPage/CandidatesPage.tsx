import { useEffect, useState } from "react";

// TYPES
import { CandidateType } from "../../types/types";

// CONSTANTS
import apiUrl from "../../constants/api.constants";

// COMPONENTS
import { DataTable } from "../../components/Integrated/DataTable";
import { CandidatesPageHeader } from "../../components/Integrated/PageHeader/CandidatesPage";
import { Spinner } from "../../components/Integrated/Spinner";

const CandidatesPage = () => {
  const [candidates, setCandidates] = useState<CandidateType[] | null>(null);

  useEffect(() => {
    const getData = async () => {
      await fetch(apiUrl)
        .then((res) => res.json())
        .then((data) =>
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
    <>
      <CandidatesPageHeader candidates={candidates.length} />
      <DataTable data={candidates} />
    </>
  );
};

export default CandidatesPage;
