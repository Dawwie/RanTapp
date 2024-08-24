import { ReactNode, useContext, useEffect, useState } from "react";
import {
  BackgroundColorContext,
  BackgroundColorState,
} from "./BackgroundColorContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const DEFAULT_COLOR = "#fff"; // white

export const BackgroundColorProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [backgroundColor, setBackgroundColor] = useState("");

  useEffect(() => {
    AsyncStorage.getItem("backgroundColor").then((value) => {
      if (value) {
        setBackgroundColor(value);
      }
    });
  }, []);

  useEffect(() => {
    if (backgroundColor !== DEFAULT_COLOR) {
      AsyncStorage.setItem("backgroundColor", backgroundColor);
    }
  }, [backgroundColor]);

  return (
    <BackgroundColorContext.Provider
      value={{ backgroundColor, setBackgroundColor }}
    >
      {children}
    </BackgroundColorContext.Provider>
  );
};

export const useBackgroundColor = (): BackgroundColorState => {
  const context = useContext(BackgroundColorContext);
  if (context === undefined) {
    throw new Error(
      "backgroundColor must be used within a BackgroundColorProvider",
    );
  }
  return context;
};
