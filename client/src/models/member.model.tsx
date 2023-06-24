export type TeamMember = {
  id: number;
  firstName: string;
  lastName: string;
  jobTitle: string;
  skills: string[];
  profileImg: string;
};

export type handleFunction = (value: TeamMember) => void;
