import { ReactNode, useContext, useState } from "react";
import { BackgroundColorContext, BackgroundColorState } from "./BackgroundColorContext";

const DEFAULT_COLOR = "#fff"; // white

export const BackgroundColorProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [backgroundColor, setBackgroundColor] = useState(DEFAULT_COLOR);

  return (
    <BackgroundColorContext.Provider value={{ backgroundColor, setBackgroundColor }}>
      {children}
    </BackgroundColorContext.Provider>
  );

};

export const useBackgroundColor = (): BackgroundColorState => {
  const context = useContext(BackgroundColorContext);
  if (context === undefined) {
    throw new Error("backgroundColor must be used within a BackgroundColorProvider");
  }
  return context;
};







