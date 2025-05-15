import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export default function useBookings() {
  const [searchParams] = useSearchParams();

  // for API side filtering and sorting
  const sortBy = searchParams.get("sortBy") || "checkInDate";
  const sortOrder = searchParams.get("sortOrder") || "asc";
  const status = searchParams.get("status");

  //pagination
  const page = searchParams.get("page");

  const filter =
    !status || status === "all" ? null : { name: "status", value: status };

  const sort = { sortBy, sortOrder };

  const { data: bookings, isPending } = useQuery({
    queryKey: ["bookings", filter, sort, page],
    queryFn: () => getBookings({ filter, sort, page }),
  });

  return { bookings: bookings?.data, isPending, count: bookings?.count };
}
