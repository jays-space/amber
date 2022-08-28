// CONSTANTS
import SidebarMenuOptions from "../../../../constants/sidebarOptions.constants";
import { Text } from "../../../Atomic/Typography/Text";

const Sidebar = () => {
  return (
    <div className="w-1/6 p-6 bg-slate-900">
      <div className="mt-4 mb-12 px-4 text-3xl text-white">LOGO</div>

      {SidebarMenuOptions.map((optionGroup, idx) => (
        <div key={idx} className="mb-10">
          {optionGroup.groupName && (
            <Text
              key={idx}
              className="mb-4 font-semibold uppercase !tracking-widest text-slate-600"
            >
              {optionGroup.groupName}
            </Text>
          )}
          {optionGroup.optionsList.map((option, idx) => (
            <div className="flex items-center mb-2 py-3 px-4 rounded-md cursor-pointer hover:bg-slate-800 transform ease-out duration-100">
              <Text key={idx} className={"text-lg text-white capitalize"}>
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
