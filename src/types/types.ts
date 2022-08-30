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
  | "message"
  | "email"
  | "previous"
  | "next"
  | "back"
  | "notification"
  | "visible"
  | "hidden"
  | "search"
  | "menu"
  | "spinner"
  | undefined;

export type SidebarOptionType = {
  label: string;
  icon?: IconNamesType;
};

export type SidebarOptionsGroupType = {
  groupName?: string;
  optionsList: SidebarOptionType[];
};

// Candidate types
export type CandidateNameType = {
  title: string;
  first: string;
  last: string;
};

export type CandidateDOBType = {
  date: string;
  age: string;
};

export type CandidateRegisteredType = {
  date: string;
  age: string;
};

export type CandidateIDType = {
  name: string;
  value: string;
};

export type CandidateAvatarType = {
  large: string;
  medium: string;
  thumbnail: string;
};

export type CandidateLocationType = {
  street: {
    number: number;
    name: string;
  };
  city: string;
  state: string;
  country: string;
  postcode: string;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  timezone: {
    offset: string;
    description: string;
  };
};

export type CandidateAuthType = {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
};

export type CandidatePositionType = {
  role: string;
  team: string;
};

export type CandidateType = {
  gender: string;
  name: CandidateNameType;
  location: CandidateLocationType;
  login: CandidateAuthType;
  dob: CandidateDOBType;
  registered: CandidateRegisteredType;
  email: string;
  phone: string;
  cell: string;
  id: CandidateIDType;
  picture: CandidateAvatarType;
  nat: string;
  
  // additional definitions for UI
  stage: number;
  position: CandidatePositionType;
};
