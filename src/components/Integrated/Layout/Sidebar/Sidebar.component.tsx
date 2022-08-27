// CONSTANTS
import SidebarMenuOptions from "../../../../constants/sidebarOptions.constants";

const Sidebar = () => {
  return (
    <div className="bg-slate-100 w-1/6">
      {SidebarMenuOptions.map((optionGroup, idx) => (
        <div key={idx}>
          <h4>{optionGroup.groupName}</h4>
          {optionGroup.optionsList.map((option, idx) => (
            <div key={idx}>{option.label}</div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
