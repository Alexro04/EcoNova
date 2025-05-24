import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/apiAuth";
import { useAuth } from "./useAuth";

function useUserData() {
  const { session } = useAuth();

  const {
    data: userData,
    isPending,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(session.access_token),
    retry: false,
  });

  return { userData, isPending, error };
}

export default useUserData;
