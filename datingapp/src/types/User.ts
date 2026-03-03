export type Gender = "male" | "female" | "other";

export type RelationshipType =
  | "long-term relationship"
  | "serious relationship"
  | "casual dating";

export type DrinkingHabit =
  | "never"
  | "rarely"
  | "occasionally"
  | "socially"
  | "regularly";

export interface UserData {
  id: number;
  username: string;
  password: string;
  firstName: string;
  age: number;
  gender: Gender;
  location: string;
  bio: string;
  interests: string[];
  lookingFor: RelationshipType;
  heightCm: number;
  education: string;
  smoking: boolean;
  drinking: DrinkingHabit;
  profilePicture: string;
  active: boolean;
}