import { Text } from "../../Atomic/Typography/Text";
import { TableRow } from "./TableRow";

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
    {
      title: "actions",
      dataIndex: "actions",
      key: "actions",
      width: 100,
    },
];

const data = [
  {
    key: 1,
    name: "jack",
    location: {
      city: "johannesburg",
      country: "south africa",
    },
    stage: 4,
    position: {
      role: "Junior UI Designer",
      team: "design team",
    },
    date: new Date(),
    owner: "albert flores",
  },
  {
    key: 2,
    name: "darlene roberts",
    location: {
      city: "johannesburg",
      country: "south africa",
    },
    stage: 2,
    position: {
      role: "Junior UI Designer",
      team: "design team",
    },
    date: new Date(),
    owner: "albert flores",
  },
  {
    key: 3,
    name: "wick",
    location: {
      city: "johannesburg",
      country: "south africa",
    },
    stage: 1,
    position: { role: "Junior UI Designer", team: "design team" },
    date: new Date(),
    owner: "albert flores",
  },
  {
    key: 4,
    name: "marry",
    location: {
      city: "johannesburg",
      country: "south africa",
    },
    stage: 5,
    position: { role: "Junior UI Designer", team: "design team" },
    date: new Date(),
    owner: "albert flores",
  },
  {
    key: 5,
    name: "christina",
    location: {
      city: "johannesburg",
      country: "south africa",
    },
    stage: 3,
    position: { role: "Junior UI Designer", team: "design team" },
    date: new Date(),
    owner: "albert flores",
  },
];

const DataTable = () => {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-7 py-3 px-4 rounded-lg shadow-md bg-white">
        {columns.map((col) => (
          <div key={col.key} className="col-span-1">
            <Text className="text-sm font-bold !tracking-wide capitalize">
              {col.title}
            </Text>
          </div>
        ))}
      </div>

      <TableRow data={data} />
    </div>
  );
};

export default DataTable;
