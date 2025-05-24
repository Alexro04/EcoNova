import { useState } from "react";
import { useLocalStorageState } from "../../hooks/useLocalStorageState";
import { AuthContext } from "./useAuth";

export default function AuthLayer({ children }) {
  const [value, setValue] = useLocalStorageState({}, "session");
  const [user_data, setUserData] = useState({});

  const updateUser = setUserData;

  return (
    <AuthContext.Provider
      value={{
        session: value,
        setSession: setValue,
        user_data,
        updateUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
