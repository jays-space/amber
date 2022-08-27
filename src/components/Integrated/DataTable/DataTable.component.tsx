import { useState } from "react";
import { Text } from "../../Atomic/Typography/Text";

const columns = [
  {
    title: "candidate name",
    dataIndex: "name",
    key: "name",
    width: 100,
  },
  {
    title: "location",
    dataIndex: "location",
    key: "location",
    width: 100,
  },
  {
    title: "stages",
    dataIndex: "stage",
    key: "stage",
    width: 200,
  },
  {
    title: "position",
    dataIndex: "position",
    key: "position",
    width: 100,
  },
  {
    title: "application date",
    dataIndex: "date",
    key: "date",
    width: 100,
  },
  {
    title: "owner",
    dataIndex: "owner",
    key: "owner",
    width: 100,
  },
  //   {
  //     title: "actions",
  //     dataIndex: "actions",
  //     key: "actions",
  //     width: 100,
  //   },
];

const data = [
  {
    key: 1,
    name: "jack",
    location: {
      city: "johannesburg",
      country: "south africa",
    },
    stage: "screening",
    position: "Junior UI Designer",
    team: "design team",
    date: new Date().toLocaleDateString(),
    owner: "albert flores",
  },
  {
    key: 2,
    name: "darlene roberts",
    location: {
      city: "johannesburg",
      country: "south africa",
    },
    stage: "screening",
    position: "Junior UI Designer",
    team: "design team",
    date: new Date().toLocaleDateString(),
    owner: "albert flores",
  },
  {
    key: 3,
    name: "wick",
    location: {
      city: "johannesburg",
      country: "south africa",
    },
    stage: "screening",
    position: "Junior UI Designer",
    team: "design team",
    date: new Date().toLocaleDateString(),
    owner: "albert flores",
  },
  {
    key: 4,
    name: "marry",
    location: {
      city: "johannesburg",
      country: "south africa",
    },
    stage: "screening",
    position: "Junior UI Designer",
    team: "design team",
    date: new Date().toLocaleDateString(),
    owner: "albert flores",
  },
];

const stages = [
  { name: "new applied", position: 1 },
  { name: "screening", position: 2 },
  { name: "design challenge", position: 3 },
  { name: "interview", position: 4 },
  { name: "test", position: 5 },
  { name: "hire", position: 6 },
];

const DataTable = () => {
    const [stageLabel, setStageLabel] = useState<string>("")
  return (
    <div className="mt-10">
      <div className="grid grid-cols-8 py-3 px-4 rounded-lg shadow-md bg-white">
        {columns.map((col) => (
          <div
            key={col.key}
            className="col-span-1 first-of-type:col-span-2 last-of-type:col-span-2"
          >
            <Text className="text-sm font-bold !tracking-wide capitalize">
              {col.title}
            </Text>
          </div>
        ))}
      </div>

      <div className="my-10 py-3 px-4 rounded-lg shadow-md bg-white">
        {data.map((row) => (
          <div key={row.key} className="grid grid-cols-8 py-4 border-b">
            <div className="flex items-center col-span-2">
              <input type={"checkbox"} />
              <img
                src="https://randomuser.me/api/portraits/men/59.jpg"
                alt={row.name}
                className="w-10 ml-5 mr-4 aspect-square rounded-full"
              />
              <Text strong className="text-xl capitalize">
                {row.name}
              </Text>
            </div>

            <div>
              <span>
                <Text
                  strong
                  className="w-10/12 text-xl whitespace-nowrap text-ellipsis overflow-hidden capitalize"
                >
                  {row.location.city}
                </Text>
              </span>
              <span>
                <Text className="capitalize opacity-75">
                  {row.location.country}
                </Text>
              </span>
            </div>

            <div>
              <select name="stage" onChange={(e) => setStageLabel(e.target.value)} className='border-none capitalize text-slate-700 pl-0'>
                {stages.map((stage) => (
                  <option key={stage.position} value={stage.name} selected={row.stage === stage.name} className='p-10 text-lg'>
                    {stage.name}
                  </option>
                ))}
              </select>
              <Text>{stageLabel || row.stage}</Text>
            </div>

            <div>
              <span>
                <Text
                  strong
                  className="w-10/12 text-xl whitespace-nowrap text-ellipsis overflow-hidden"
                >
                  {row.position}
                </Text>
              </span>
              <span>
                <Text className="capitalize opacity-75">{row.team}</Text>
              </span>
            </div>

            <Text strong className="text-xl">
              {row.date}
            </Text>

            <div className="flex items-center col-span-2">
              <img
                src="https://randomuser.me/api/portraits/men/59.jpg"
                alt={row.owner}
                className="w-10 mr-4 aspect-square rounded-full"
              />
              <Text strong className="text-xl capitalize">
                {row.owner}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataTable;
