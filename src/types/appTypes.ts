import { MovieBase } from "./apiTypes";

export type MovieId = string | number;

export type Movies = { movies: Array<MovieBase> };

export type Notification = {
  message: string;
  type: "success" | "error";
};

export enum Country {
  BR = "BR",
  PT = "PT",
  US = "US",
}

export type ImageSize =
  | "w92"
  | "w154"
  | "w185"
  | "w200"
  | "w500"
  | "w780"
  | "original";
