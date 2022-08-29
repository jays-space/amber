import { useEffect, useState } from "react";

// COMPONENTS
import { Text } from "../../components/Atomic/Typography/Text";
import { Detail } from "../../components/Integrated/Detail";
import { CandidatePageHeader } from "../../components/Integrated/PageHeader/CandidatePage";

// TYPES
import { CandidateType } from "../../types/types";
import { getFormattedDate } from "../../utils/dateTime.utils";

const tabMenuOptions = [
  { label: "details", active: true },
  { label: "resume", active: false },
  { label: "hiring pipeline", active: false },
  { label: "interviews", active: false },
];

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
        {/* tab selector */}
        <div className="flex">
          {tabMenuOptions.map((option) => (
            <div
              className={`px-6 py-4 cursor-pointer hover:bg-slate-50 transform ease-out delay-100 ${
                option.active && "border-b-2 border-yellow-500"
              }`}
            >
              <Text
                className={`${
                  option.active ? "font-bold" : "opacity-80"
                } text-sm uppercase`}
              >
                {option.label}
              </Text>
            </div>
          ))}
        </div>

        {/* candidate details */}
        <div className="mt-20 mb-4 grid grid-cols-2 gap-4">
          {/* candidate details */}
          <div className="p-4 grid grid-cols-2 gap-6 border rounded-md">
            <Detail
              label="full name"
              content={[
                candidate.name.first,
                candidate.name.last,
                `(${candidate.name.title})`,
              ]}
            />
            <Detail label="gender" content={[candidate.gender]} />
            <Detail
              label="dob"
              content={[
                getFormattedDate(candidate.dob.date),
                `(${candidate.dob.age})`,
              ]}
            />
            <Detail lowercase label="email" content={[candidate.email]} />
            <Detail label="phone" content={[candidate.phone]} />
            <Detail label="cell" content={[candidate.cell]} />
          </div>

          <div className="p-4 grid grid-cols-3 gap-6 border rounded-md">
            <Detail
              label="street address"
              content={[
                `${candidate.location.street.number.toString()},`,
                candidate.location.street.name,
              ]}
            />
            <Detail label="city" content={[candidate.location.city]} />
            <Detail label="state" content={[candidate.location.state]} />
            <Detail label="country" content={[candidate.location.country]} />
            <Detail label="postcode" content={[candidate.location.postcode]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidatePage;
