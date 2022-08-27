export type IconNamesType =
  | "filter"
  | "download"
  | "print"
  | "add"
  | "more"
  | undefined;

export type SidebarOptionType = {
  label: string;
  icon?: string;
};

export type SidebarOptionsGroupType = {
  groupName?: string;
  optionsList: SidebarOptionType[];
};
