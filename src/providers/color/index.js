import { useCallback } from "react";
import { createContext, useState } from "react";

export const ColorContext = createContext([]);

export const ColorProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("light");

  const getOpositeTheme = useCallback(
    () => (currentTheme === "light" ? "dark" : "light"),
    [currentTheme]
  );
  return (
    <ColorContext.Provider
      value={{ currentTheme, setCurrentTheme, getOpositeTheme }}
    >
      {children}
    </ColorContext.Provider>
  );
};
