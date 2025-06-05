import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/apiAuth";

function useUserData() {
  const { data, isPending, error } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(),
    retry: false,
  });

  return { userData: data?.user_data || data, isPending, error };
}

export default useUserData;
