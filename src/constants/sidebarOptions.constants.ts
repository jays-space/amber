import { SidebarOptionsGroupType } from "../types/types";

// Menu options for the sidebar
const SidebarMenuOptions: SidebarOptionsGroupType[] = [
  {
    optionsList: [
      { label: "home", icon: "" },
      { label: "messages", icon: "" },
      { label: "calendar", icon: "" },
    ],
  },
  {
    groupName: "development",
    optionsList: [
      { label: "tasks", icon: "" },
      { label: "projects", icon: "" },
      { label: "releases", icon: "" },
    ],
  },
  {
    groupName: "organization",
    optionsList: [
      { label: "employees", icon: "" },
      { label: "candidates", icon: "" },
      { label: "report", icon: "" },
      { label: "settings", icon: "" },
    ],
  },
];

export default SidebarMenuOptions;
