// COMPONENTS
import { Text } from "../../Atomic/Typography/Text";

const tabMenuOptions = [
  { label: "details", active: true },
  { label: "resume", active: false },
  { label: "hiring pipeline", active: false },
  { label: "interviews", active: false },
];

const TabMenu = () => {
  return (
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
  );
};

export default TabMenu;
