// CONSTANTS
import SidebarMenuOptions from "../../../../constants/sidebarOptions.constants";
import { Text } from "../../../Atomic/Typography/Text";

const Sidebar = () => {
  return (
    <div className="w-1/6 p-6 bg-slate-900">
      <div className="mt-2 mb-12 px-4 text-3xl text-white">LOGO</div>

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
            <div className={`flex items-center my-2 py-3 px-4 rounded-md cursor-pointer  ${option.label === 'candidates' ? "bg-yellow-500 hover:bg-yellow-600" : "hover:bg-slate-800"} transform ease-out duration-100`}>
              <Text key={idx} className={`${option.label === 'candidates' ? "!text-slate-800 !font-bold !tracking-wider" : "text-white"} capitalize`}>
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
