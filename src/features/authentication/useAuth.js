import { createContext, useContext } from "react";

export const AuthContext = createContext();

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("useCities is used out of bounds of CitiesProvider");
  return context;
}
