// COMPONENTS
import { Text } from "../../Atomic/Typography/Text";

/**
 * @returns tab menu
 */

const tabMenuOptions = [
  { label: "details", active: true },
  { label: "resume", active: false },
  { label: "hiring pipeline", active: false },
  { label: "interviews", active: false },
];

const TabMenu = () => {
  return (
    <div title="tab-menu" className="hidden lg:flex">
      {tabMenuOptions.map((option) => (
        <div
          key={option.label}
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
