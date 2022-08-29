// CONSTANTS
import SidebarMenuOptions from "../../../../constants/sidebarOptions.constants";

// COMPONENTS
import { Icon } from "../../../Atomic/Icon";
import { Text } from "../../../Atomic/Typography/Text";

const Sidebar = () => {
  return (
    <div className="w-1/6 p-6 bg-slate-900">
      <div className="mt-2 mb-12 px-4">
          <img src="/logo.png" alt="amber software logo" />
      </div>

      {SidebarMenuOptions.map((optionGroup, idx) => (
        <div key={idx} className="mb-8">
          {optionGroup.groupName && (
            <Text
              key={idx}
              className="mb-2 px-4 font-semibold uppercase text-sm !tracking-widest text-slate-600"
            >
              {optionGroup.groupName}
            </Text>
          )}
          {optionGroup.optionsList.map((option, idx) => (
            <div
              className={`flex items-center my-2 py-3 px-4 rounded-md cursor-pointer  ${
                option.label === "candidates"
                  ? "bg-yellow-500 hover:bg-opacity-80"
                  : "hover:bg-slate-800"
              } transform ease-out duration-100`}
            >
              <Icon
                name={option.icon}
                size={20}
                className={`${
                  option.label === "candidates"
                    ? "!text-slate-900"
                    : "text-slate-700"
                } mr-4`}
              />
              <Text
                key={idx}
                className={`capitalize ${
                  option.label === "candidates"
                    ? "!text-slate-900 !font-bold !tracking-wider"
                    : "text-white"
                } `}
              >
                {option.label}
              </Text>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
