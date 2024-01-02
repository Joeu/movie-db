import { MovieBase } from "./apiTypes";

export type MovieId = string | number;

export type Movies = Array<MovieBase>;

export type Notification = {
  message: string;
  type: "success" | "error";
};

export type ImageSize =
  | "w92"
  | "w154"
  | "w185"
  | "w200"
  | "w500"
  | "w780"
  | "original";
