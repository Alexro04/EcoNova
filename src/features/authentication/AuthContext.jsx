import { useState } from "react";
import { useLocalStorageState } from "../../hooks/useLocalStorageState";
import { AuthContext } from "./useAuth";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export default function AuthLayer({ children }) {
  const [value, setValue] = useLocalStorageState({}, "session");
  const [user_data, setUserData] = useState({});
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const updateUser = setUserData;

  function logout() {
    if (value.access_token) setValue({});
    if (user_data && Object.keys(user_data).length > 0) setUserData({});
    queryClient.removeQueries({ queryKey: ["user"] });
    navigate("/login", { replace: true });
  }

  return (
    <AuthContext.Provider
      value={{
        session: value,
        setSession: setValue,
        user_data,
        updateUser,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
