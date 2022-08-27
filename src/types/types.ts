export type SidebarOptionType = {
  label: string;
  icon?: string;
};

export type SidebarOptionsGroupType = {
  groupName?: string;
  optionsList: SidebarOptionType[];
};