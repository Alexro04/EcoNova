import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";
import { useQueryClient } from "@tanstack/react-query";

function useLogout() {
  const { session, user_data, updateUser, setSession } = useAuth();
  const navigate = useNavigate;
  const queryClient = useQueryClient();

  function logout() {
    //confirm the user is actually logged in( there is a token in session, and a user in auth context)
    if (session.access_token) setSession({});
    if (user_data || Object.keys(user_data) !== 0) updateUser({});
    queryClient.removeQueries(["user"]);
    navigate("/login");
  }

  return { logout };
}

export default useLogout;
