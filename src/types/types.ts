export type IconNamesType =
  | "filter"
  | "download"
  | "print"
  | "add"
  | "more"
  | "home"
  | "inbox"
  | "calendar"
  | "task"
  | "project"
  | "new"
  | "person"
  | "people"
  | "report"
  | "settings"
  | "minimize"
  | "notification"
  | undefined;

export type SidebarOptionType = {
  label: string;
  icon?: IconNamesType;
};

export type SidebarOptionsGroupType = {
  groupName?: string;
  optionsList: SidebarOptionType[];
};
