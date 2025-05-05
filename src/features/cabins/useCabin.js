import { useQuery } from "@tanstack/react-query";
import { getAllCabins } from "../../services/apiCabins";

export default function useCabin() {
  const { data, isPending } = useQuery({
    queryKey: ["cabins"],
    queryFn: getAllCabins,
  });

  return { data, isPending };
}
