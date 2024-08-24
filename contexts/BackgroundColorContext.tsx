import { createContext } from "react";

export interface BackgroundColorState {
  backgroundColor: string;
  setBackgroundColor: (backgroundColor: string) => void;
}

export const BackgroundColorContext = createContext<BackgroundColorState | undefined>(
  undefined,
);
