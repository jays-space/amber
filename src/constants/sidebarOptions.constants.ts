import { SidebarOptionsGroupType } from "../types/types";

// Menu options for the sidebar
const SidebarMenuOptions: SidebarOptionsGroupType[] = [
  {
    optionsList: [
      { label: "home", icon: "home" },
      { label: "messages", icon: "inbox" },
      { label: "calendar", icon: "calendar" },
    ],
  },
  {
    groupName: "development",
    optionsList: [
      { label: "tasks", icon: "task" },
      { label: "projects", icon: "project" },
      { label: "releases", icon: "new" },
    ],
  },
  {
    groupName: "organization",
    optionsList: [
      { label: "employees", icon: "person" },
      { label: "candidates", icon: "people" },
      { label: "report", icon: "report" },
      { label: "settings", icon: "settings" },
    ],
  },
];

export default SidebarMenuOptions;
