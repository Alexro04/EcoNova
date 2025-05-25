import { useQuery } from "@tanstack/react-query";
import { getAllCabins } from "../../services/apiCabins";

export default function useAdminUsers() {
  const { data: employees, isPending } = useQuery({
    queryKey: ["admin-users"],
    queryFn: getAllCabins,
  });

  return { employees, isPending };
}
