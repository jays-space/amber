import { Dispatch, SetStateAction } from "react";

// CONSTANTS
import SidebarMenuOptions from "../../../../constants/sidebarOptions.constants";

// COMPONENTS
import { Icon } from "../../../Atomic/Icon";
import { Text } from "../../../Atomic/Typography/Text";

interface ISidebar {
  isCollapsed: boolean;
  setIsCollapsed: Dispatch<SetStateAction<boolean>>;
}

const Sidebar = ({ isCollapsed, setIsCollapsed }: ISidebar) => {
  return (
    <div
      className={`${
        isCollapsed ? "w-20 p-4" : "md:w-1/4 lg:w-1/6 p-6"
      } bg-slate-900 transform ease-out duration-300 cursor-pointer hidden md:block z-50`}
    >
      <div className="relative mt-2 mb-12 px-4">
        <img
          src="/logo.png"
          alt="amber software logo"
          className={`${isCollapsed ? "opacity-0" : "opacity-100"}`}
        />

        {/* toggle sidebar button */}
        <div
          className={`absolute -top-2 hidden md:flex ${
            isCollapsed ? "-right-9" : "-right-11"
          } w-10 aspect-square flex items-center justify-center rounded-full bg-yellow-400 hover:bg-yellow-300 active:bg-slate-200 transform ease-out duration-100 cursor-pointer`}
          onClick={() => setIsCollapsed((v) => !v)}
        >
          <Icon name="minimize" size={28} className="!text-slate-700" />
        </div>
      </div>

      {SidebarMenuOptions.map((optionGroup, idx) => (
        <div key={idx} className="mb-8">
          {optionGroup.groupName && (
            <Text
              key={idx}
              className={`mb-2 px-4 font-semibold uppercase text-sm !tracking-widest text-slate-600 ${
                isCollapsed ? "opacity-0" : "opacity-100"
              }`}
            >
              {optionGroup.groupName}
            </Text>
          )}
          {optionGroup.optionsList.map((option, idx) => (
            <div
              className={`flex  items-center my-2 py-3 ${
                isCollapsed ? "justify-center px-0" : "px-4"
              } rounded-md cursor-pointer  ${
                option.label === "candidates"
                  ? "bg-yellow-500 hover:bg-opacity-80"
                  : "hover:bg-slate-800"
              } transform ease-out duration-100`}
            >
              <Icon
                name={option.icon}
                size={24}
                className={`${
                  option.label === "candidates"
                    ? "!text-slate-900"
                    : "text-slate-700"
                } ${isCollapsed ? "mr-0" : "mr-4"}`}
              />

              <Text
                key={idx}
                className={`capitalize ${
                  option.label === "candidates"
                    ? "!text-slate-900 !font-bold !tracking-wider"
                    : "text-white"
                } ${isCollapsed ? "opacity-0 hidden" : "opacity-100 flex"} `}
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
