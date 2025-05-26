import { useQuery } from "@tanstack/react-query";
import { getAdmins } from "../../services/apiAuth";

export default function useAdminUsers() {
  const { data, isPending } = useQuery({
    queryKey: ["admins"],
    queryFn: getAdmins,
  });

  return { admins: data?.data, isPending };
}
