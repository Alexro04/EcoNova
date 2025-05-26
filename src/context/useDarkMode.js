import { createContext, useContext } from "react";

export const DarkModeContext = createContext();

export default function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error("DarkMode Context was used outside it's Provider");
  return context;
}
