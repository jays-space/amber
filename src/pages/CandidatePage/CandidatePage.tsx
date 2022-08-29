import { useEffect, useState } from "react";
import { Button } from "../../components/Atomic/Button";
import { Heading } from "../../components/Atomic/Typography/Heading";

// COMPONENTS
import { Text } from "../../components/Atomic/Typography/Text";
import { Stage } from "../../components/Integrated/DataTable/TableRow/Stage";
import { CandidatePageHeader } from "../../components/Integrated/PageHeader/CandidatePage";

// TYPES
import { CandidateType } from "../../types/types";

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
    <div className="flex justify-between items-center">
      <CandidatePageHeader candidate={candidate} />
    </div>
  );
};

export default CandidatePage;
